package site.questable.user_registration.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import site.questable.user_registration.model.Client;
import site.questable.user_registration.repository.ClientRepository;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class ClientService implements UserDetailsService {

    private final ClientRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public Client saveUser(Client user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public Client findByUsername(String email) {
        return userRepository.findByEmail(email);
    }

    public boolean checkUserPassword(String providedPassword, String storedEncryptedPassword) {
        return passwordEncoder.matches(providedPassword, storedEncryptedPassword);
    }    

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Client user = userRepository.findByEmail(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), Collections.emptyList());
    }
}
