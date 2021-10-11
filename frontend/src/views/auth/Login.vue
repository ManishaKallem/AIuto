<template>
  <form @submit.prevent="handleLogin">
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button slot="start" default-href="/home"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
      <img src="/assets/login.png" />
    </ion-header>
    <ion-card>
      <ion-item>
        <ion-label>Username</ion-label>
        <ion-input v-model="username" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Password</ion-label>
        <ion-input v-model="password" type="password" required></ion-input>
      </ion-item>
      <ion-item>
        <div style="padding-left: 35%">
          <ion-button type="submit">Submit</ion-button>
        </div>
      </ion-item>
    </ion-card>
  </form>
</template>

<script lang="ts">
import authService from '@/services/api/auth';
import { useStore } from '@/store';
import {
  alertController,
  IonButton,
  IonCard,
  IonInput,
  IonToolbar,
  IonItem,
  IonLabel,
} from '@ionic/vue';
import { useHead } from '@vueuse/head';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    IonInput,
    IonLabel,
    IonItem,
    IonCard,
    IonButton,
    IonToolbar,
  },
  setup() {
    useHead({
      title: 'Login',
      meta: [
        {
          name: 'description',
          content: 'The login page of AIuto',
        },
      ],
    });
    const store = useStore();
    const router = useRouter();
    const username = ref('');
    const password = ref('');
    const handleLogin = async () => {
      const [status, resp] = await authService.loginUser(
        username.value,
        password.value,
      );
      if (!status) {
        const alert = await alertController.create({
          header: 'Failure',
          message: resp,
          buttons: ['OK'],
        });
        alert.present();
      } else {
        await store.dispatch('auth/refreshToken', resp.data.token);
        router.push({ name: 'home' });
      }
    };
    return { username, password, handleLogin };
  },
});
</script>
