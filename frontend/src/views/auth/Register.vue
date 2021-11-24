<template>
  <vee-form
    @submit="handleRegister"
    :validation-schema="schema"
    v-slot="{ isSubmitting, errors }"
  >
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button
            slot="start"
            default-href="/auth/login"
          ></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button type="submit" v-if="!isSubmitting"> Create </ion-button>
          <ion-spinner v-else />
        </ion-buttons>
      </ion-toolbar>
      <ion-text>
        <div
          style="
            width: 100%;
            height: 100%;
            text-align: center;
            font-size: 200%;
            padding-top: 10%;
            padding-bottom: 10%;
          "
        >
          <p>What should we</p>
          <p>call you?</p>
        </div>
      </ion-text>
    </ion-header>
    <ion-card>
      <ion-item-group>
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
        </ion-item>
        <ion-item v-if="errors.username || apiErrors.usernameErrors.length > 0">
          <ion-text color="danger">
            <ErrorMessage name="username" as="p" />
            <p v-for="(error, index) in apiErrors.usernameErrors" :key="index">
              {{ error }}
            </p>
          </ion-text>
        </ion-item>
      </ion-item-group>
      <ion-item-group>
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
        </ion-item>
        <ion-item v-if="errors.email || apiErrors.emailErrors.length > 0">
          <ion-text color="danger">
            <ErrorMessage name="email" as="p" />
            <p v-for="(error, index) in apiErrors.emailErrors" :key="index">
              {{ error }}
            </p>
          </ion-text>
        </ion-item>
      </ion-item-group>
      <ion-item-group>
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
        </ion-item>
        <ion-item v-if="errors.password || apiErrors.passwordErrors.length > 0">
          <ion-text color="danger">
            <ErrorMessage name="password" as="p" />
            <p v-for="(error, index) in apiErrors.passwordErrors" :key="index">
              {{ error }}
            </p>
          </ion-text>
        </ion-item>
      </ion-item-group>
    </ion-card>
    <div style="text-align: center; position: fixed; bottom: 15px; width: 100%">
      <p style="text-align: center">Already have an account?<br /></p>
      <a href="/auth/login" style="text-align: center; width: 100%">Login</a>
    </div>
  </vee-form>
</template>

<script lang="ts">
import userService from '@/services/api/user';
import {
  alertController,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonHeader,
  IonInput,
  IonSpinner,
  IonItem,
  IonItemGroup,
  IonLabel,
  IonText,
  IonToolbar,
} from '@ionic/vue';
import { useHead } from '@vueuse/head';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

interface FormInput {
  username: string;
  email: string;
  password: string;
}

export default defineComponent({
  components: {
    IonText,
    IonInput,
    IonItemGroup,
    IonBackButton,
    IonButtons,
    IonSpinner,
    IonToolbar,
    IonHeader,
    IonLabel,
    IonItem,
    IonCard,
    IonButton,
  },
  data: () => ({
    schema: {
      username: 'required|min:3|max:50|alpha_num',
      email: 'required|min:3|email',
      password: 'required|min:5|max:50',
    },
  }),
  methods: {
    hasErrors(errors: Record<string, string>) {
      const errorKeys = Object.keys(errors);
      if (errorKeys.length > 0) return true;
      return false;
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
    const apiErrors = ref({
      usernameErrors: [],
      emailErrors: [],
      passwordErrors: [],
    });
    const router = useRouter();
    const handleRegister = async (values: FormInput) => {
      apiErrors.value.passwordErrors = [];
      apiErrors.value.usernameErrors = [];
      apiErrors.value.emailErrors = [];
      const [status, resp] = await userService.create(
        values.email,
        values.username,
        values.password,
      );
      if (!status) {
        if (resp.message) apiErrors.value.passwordErrors = resp.message || [];
        else {
          apiErrors.value.usernameErrors = resp.resp.usernameErrors || [];
          apiErrors.value.emailErrors = resp.resp.emailErrors || [];
        }
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
        router.push({ name: 'auth-login' });
      }
    };
    return { handleRegister, apiErrors };
  },
});
</script>
