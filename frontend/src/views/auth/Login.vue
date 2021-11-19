<template>
  <form @submit.prevent="handleLogin">
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button slot="start" default-href=""></ion-back-button>
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
    <div style="text-align: center; position: fixed; bottom: 15px; width: 100%">
      <p style="text-align: center">Don't have an account?<br /></p>
      <a href="/auth/register" style="text-align: center; width: 100%"
        >Register now</a
      >
    </div>
  </form>
</template>

<script lang="ts">
import authService from '@/services/api/auth';
import { setStorageItem } from '@/services/storage';
import {
  alertController,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonToolbar,
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
    IonBackButton,
    IonButtons,
    IonHeader,
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
        await setStorageItem('token', resp.data.token);
        router.push('/');
      }
    };
    return { username, password, handleLogin };
  },
});
</script>
