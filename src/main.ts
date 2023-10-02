import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { httpClient } from './global/httpClient.ts';
import { createPinia } from 'pinia';

const pinia = createPinia();

const app = createApp(App);

app.directive('lazyload', {
  beforeMount(el) {
    el.setAttribute('loading', 'lazy');
  },
});
app.use(pinia);
app.provide('http', httpClient);
app.mount('#app');
