<template>
  <form @submit.prevent="handleRegister">
    <ion-card>
      <ion-item>
        <ion-text color="primary">
          <h1>Register</h1>
        </ion-text>
      </ion-item>
      <ion-item>
        <ion-label>Username</ion-label>
        <ion-input v-model="username" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Email</ion-label>
        <ion-input v-model="email" required></ion-input>
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
import userService from "@/services/api/user";

export default defineComponent({
  components: { IonText, IonInput, IonLabel, IonItem, IonCard, IonButton },
  data: () => ({
    username: "",
    email: "",
    password: "",
  }),
  methods: {
    async handleRegister() {
      // TODO: Handle errors
      const resp = await userService.create(
        this.email,
        this.username,
        this.password
      );
      return resp;
    },
  },
});
</script>
