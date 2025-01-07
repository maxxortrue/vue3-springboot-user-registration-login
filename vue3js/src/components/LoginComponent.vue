<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Login Form</div>
            <div class="card-body">
              <form @submit.prevent="loginUser">
                <div class="form-group">
                  <label>Email</label>
                  <input v-model="user.email" class="form-control" type="email" placeholder="Email" />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input v-model="user.password" class="form-control" type="password" placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
              </form>
              <div class="mt-3">
                <span>Not registered? <router-link to="/register">Register/SignUp Here</router-link></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AuthService from '../AuthService';
  
  export default {
    data() {
      return {
        user: {
          email: '',
          password: ''
        }
      };
    },
    methods: {
      loginUser() {
        AuthService.login(this.user).then(response => {
          console.log(response.data);
        });
      }
    }
  };
  </script>