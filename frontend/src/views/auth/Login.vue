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
        <ion-button type="submit">Submit</ion-button>
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
} from "@ionic/vue";
import { defineComponent } from "vue";
import authService from "@/services/api/auth";
import { useHead } from "@vueuse/head";

export default defineComponent({
  components: { IonText, IonInput, IonLabel, IonItem, IonCard, IonButton },
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    async handleLogin() {
      // TODO: Handle errors
      const resp = await authService.loginUser(this.username, this.password);
      return resp;
    },
  },
  setup() {
    useHead({
      title: "Login",
      meta: [
        {
          name: "description",
          content: "The login page of AIuto",
        },
      ],
    });
  },
});
</script>
