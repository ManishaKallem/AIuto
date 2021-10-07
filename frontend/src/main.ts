import { IonicVue } from '@ionic/vue';
/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/display.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/float-elements.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/typography.css';
import { createHead } from '@vueuse/head';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { key, store } from './store';
import VeeValidatePlugin from './services/validation';
/* Theme variables */
import './theme/variables.css';

const head = createHead();

const app = createApp(App)
  .use(IonicVue)
  .use(head)
  .use(router)
  .use(VeeValidatePlugin);

// pass the injection key
app.use(store, key);

router.isReady().then(() => {
  app.mount('#app');
});
