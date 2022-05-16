import { createApp } from 'vue';
import App from './App.vue';

import router from './router.js';
import store from './store/index.js';

import BaseSquare from './components/UI/BaseSquare.vue';
import SubmitButton from './components/UI/SubmitButton.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-square', BaseSquare);
app.component('submit-button', SubmitButton);

app.mount('#app');
