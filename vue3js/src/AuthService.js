import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/auth";

class AuthService {
    // Register new user
    async register(user) {
        try {
            const response = await axios.post(`${API_BASE_URL}/register`, user);
            console.log('Registration successful:', response.data);
            return response.data;
        } catch (error) {
            console.error('Registration error:', this.handleError(error));
            throw error; // Re-throw error for further handling by the calling code
        }
    }

    // Login user
    async login(user) {
        try {
            const response = await axios.post(`${API_BASE_URL}/login`, user);
            console.log('Login successful:', response.data);
            return response.data;
        } catch (error) {
            console.error('Login error:', this.handleError(error));
            throw error; // Re-throw error for further handling by the calling code
        }
    }

    // A utility function to handle and log error messages properly
    handleError(error) {
        if (error.response) {
            // The server responded with a status other than 2xx
            console.error('Error Response:', error.response);
            return `Error ${error.response.status}: ${error.response.data.message || 'Unknown error'}`;
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
            return 'No response received from the server.';
        } else {
            // Something else happened during request setup
            console.error('Request Setup Error:', error.message);
            return `Error: ${error.message}`;
        }
    }
}

export default new AuthService();
