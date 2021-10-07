<template>
  <vee-form
    @submit="handleRegister"
    :validation-schema="schema"
    v-slot="{ isSubmitting }"
  >
    <ion-card>
      <ion-item>
        <ion-text color="primary">
          <h1>Register</h1>
        </ion-text>
      </ion-item>
      <ion-item>
        <ion-label>Username</ion-label>
        <vee-field name="username" v-slot="{ field }">
          <ion-input
            type="text"
            name="username"
            placeholder="Username"
            v-bind="field"
          />
        </vee-field>
        <ErrorMessage name="username" />
      </ion-item>
      <ion-item>
        <ion-label>Email</ion-label>
        <vee-field name="email" v-slot="{ field }">
          <ion-input
            type="email"
            name="Email"
            placeholder="Email"
            v-bind="field"
          />
        </vee-field>
        <ErrorMessage name="email" />
      </ion-item>
      <ion-item>
        <ion-label>Password</ion-label>
        <vee-field name="password" v-slot="{ field }">
          <ion-input
            type="password"
            name="password"
            v-bind="field"
            placeholder="Password"
          />
        </vee-field>
        <ErrorMessage name="password" />
      </ion-item>
      <ion-item>
        <ion-button type="submit" :disabled="isSubmitting">Submit</ion-button>
      </ion-item>
    </ion-card>
  </vee-form>
</template>

<script lang="ts">
import userService from '@/services/api/user';
import {
  IonButton,
  IonCard,
  IonInput,
  IonItem,
  IonLabel,
  IonText,
  alertController,
} from '@ionic/vue';
import { useHead } from '@vueuse/head';
import { defineComponent } from 'vue';

interface FormInput {
  username: string;
  email: string;
  password: string;
}

export default defineComponent({
  components: {
    IonText,
    IonInput,
    IonLabel,
    IonItem,
    IonCard,
    IonButton,
  },
  data: () => ({
    schema: {
      username: 'required|min:3|max:50|alpha_spaces',
      email: 'required|min:3|max:20|email',
      password: 'required|min:5|max:50',
    },
    apiErrors: {
      usernameErrors: [],
      emailErrors: [],
      passwordErrors: [],
    },
  }),
  methods: {
    async handleRegister(values: FormInput) {
      const [status, resp] = await userService.create(
        values.email,
        values.username,
        values.password,
      );
      if (!status) {
        this.apiErrors.usernameErrors = resp.resp.usernameErrors || [];
        this.apiErrors.emailErrors = resp.resp.emailErrors || [];
        this.apiErrors.passwordErrors = resp.resp.passwordErrors || [];
        const alert = await alertController.create({
          header: 'Fail',
          message: 'There were some errors in registering with these details',
          buttons: ['OK'],
        });
        alert.present();
      } else {
        const alert = await alertController.create({
          header: 'Success',
          message: 'Please login with your new account',
          buttons: ['OK'],
        });
        alert.present();
      }
    },
  },
  setup() {
    useHead({
      title: 'Register',
      meta: [
        {
          name: 'description',
          content: 'The register page of AIuto',
        },
      ],
    });
    return {};
  },
});
</script>
