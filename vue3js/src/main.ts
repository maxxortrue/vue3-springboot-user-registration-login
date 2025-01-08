import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import RegisterComponent from './components/RegisterComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import TransferComponent from './components/TransferComponent.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// 定义路由
const routes = [
  { path: '/', redirect: '/transfer' },  // 根路径重定向到注册页面
  { path: '/register', name: 'Register', component: RegisterComponent },
  { path: '/login', name: 'Login', component: LoginComponent },
  { path: '/transfer', name: 'Login', component: TransferComponent }
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
});

// 创建 Vue 应用实例
const app = createApp(App);

// 使用路由
app.use(router);

// 挂载应用
app.mount('#app');