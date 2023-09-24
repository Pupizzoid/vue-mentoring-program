import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { httpClient } from './global/httpClient.ts';

const app = createApp(App);

app.directive('lazyload', {
  beforeMount(el) {
    el.setAttribute('loading', 'lazy');
  },
});
app.provide('http', httpClient);
app.mount('#app');
