import axios from 'axios';

// Base URL for your API
const API_BASE_URL = "http://localhost:8080/api/files";

class FileService {
    // Upload a file to the server
    async uploadFile(file) {
        let formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log("File uploaded successfully:", response.data); // Log the success response
            return response.data;
        } catch (error) {
            console.error("Error uploading file:", error); // Log the error
            throw error; // Rethrow the error after logging it
        }
    }

    // Download a file from the server
    async downloadFile(fileName) {
        try {
            const response = await axios.get(`${API_BASE_URL}/download/${fileName}`, {
                responseType: 'blob' // Important for handling binary data
            });

            // Log response for debugging
            console.log("File downloaded successfully:", response);

            // Create a link to trigger the download
            const blob = response.data;
            const link = document.createElement('a');
            const url = window.URL.createObjectURL(blob);
            link.href = url;
            link.setAttribute('download', fileName); // Set the filename for download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            return response.data;
        } catch (error) {
            console.error("Error downloading file:", error); // Log the error
            throw error; // Rethrow the error after logging it
        }
    }
}

export default new FileService();
