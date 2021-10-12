<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Welcome</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-item>
        <ion-text>
          <div class="hi">
            <p>Welcome</p>
            <p style="text-indent: 25%">to</p>
            <p style="text-indent: 10%">AIuto</p>
          </div>
        </ion-text>
      </ion-item>
      <div
        style="
          position: fixed;
          bottom: 15%;
          width: 100%;
          padding-left: 12%;
          padding-right: 12%;
          font-style: italic;
        "
      >
        <ion-button
          color="success"
          href="/auth/login"
          expand="block"
          style="margin-bottom: 15%"
        >
          Login
        </ion-button>
        <ion-button color="success" href="/auth/register" expand="block">
          Register
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonToolbar,
  IonText,
} from '@ionic/vue';

import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonItem,
    IonHeader,
    IonButton,
    IonToolbar,
    IonText,
  },
  setup() {
    useHead({
      title: 'Welcome',
      meta: [
        {
          name: 'description',
          content: 'The Welcome page of AIuto',
        },
      ],
    });
  },
});
</script>

<style>
.hi {
  width: 200%;
  font-size: 200%;
  font-style: italic;
  color: rgba(25, 247, 125, 0.658);
  padding-top: 10%;
  padding-bottom: 10%;
  padding-left: 80%;
  padding-right: 0;

  position: relative;
}
</style>
