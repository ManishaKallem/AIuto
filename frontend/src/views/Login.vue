<template>
  <form @submit.prevent="handleLogin">
    <ion-card>
      <ion-item>
        <ion-text color="primary">
          <h1>Login</h1>
        </ion-text>
      </ion-item>
      <ion-item>
        <ion-label>Username</ion-label>
        <ion-input v-model="username" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Password</ion-label>
        <ion-input v-model="password" type="password" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-button type="submit">Sign Up</ion-button>
      </ion-item>
    </ion-card>
  </form>
</template>

<script lang="ts">
import {
  IonButton,
  IonCard,
  IonInput,
  IonItem,
  IonLabel,
  IonText,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import authService from '@/services/api/auth';

export default defineComponent({
  components: { IonText, IonInput, IonLabel, IonItem, IonCard, IonButton },
  data: () => ({
    username: '',
    password: '',
  }),
  methods: {
    async handleLogin() {
      const resp = await authService.loginUser(this.username, this.password);
      console.log(resp);
      return 'hello';
    },
  },
});
</script>
