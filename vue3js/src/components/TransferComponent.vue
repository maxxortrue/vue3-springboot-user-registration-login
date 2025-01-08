<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Upload File</div>
            <div class="card-body">
              <form @submit.prevent="uploadFile">
                <div class="form-group">
                  <input type="file" @change="selectFile" class="form-control" />
                </div>
                <button type="submit" class="btn btn-primary mt-3">Upload</button>
              </form>
              <div v-if="fileName" class="mt-3">
                <span>Uploaded file: {{ fileName }}</span>
                <button @click="downloadFile" class="btn btn-secondary ml-3">Download</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import FileService from '../FileService';
  
  export default {
    data() {
      return {
        selectedFile: null,
        fileName: ''
      };
    },
    methods: {
      selectFile(event) {
        this.selectedFile = event.target.files[0];
      },
      uploadFile() {
        FileService.uploadFile(this.selectedFile).then(response => {
          this.fileName = response.data;
        });
      },
      downloadFile() {
        FileService.downloadFile(this.fileName).then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', this.fileName);
          document.body.appendChild(link);
          link.click();
        });
      }
    }
  };
  </script>