package site.questable.user_registration.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import site.questable.user_registration.model.Client;
import site.questable.user_registration.service.ClientService;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:5173/")
public class AuthController {

    private final ClientService userService;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public Client registerUser(@RequestBody Client user) {
        return userService.saveUser(user);
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody Client user) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return "User logged in successfully";
    }
}