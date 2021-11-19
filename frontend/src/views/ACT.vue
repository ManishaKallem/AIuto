<template>
  <ion-page>
    <ion-content>
      <ion-text>
        <p style="font-size: 250%; text-align: center">
          Hi! <br />I'm ACT bot
        </p></ion-text
      >

      <p style="text-align: center">What category do you want to choose?</p>

      <ion-button fill="solid" expand="block" style="width: 75%; margin: auto">
        Pschycology <br />
        predictor
      </ion-button>

      <ion-button
        fill="solid"
        expand="block"
        style="width: 75%; margin: auto; margin-top: 5%"
        href="/therapy"
      >
        Therapist
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonContent, IonPage, IonText } from '@ionic/vue';

import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';

export default defineComponent({
  components: {
    IonPage,
    IonContent,

    IonButton,
    IonText,
  },
  setup() {
    useHead({
      title: 'ACT Bot',
      meta: [
        {
          name: 'description',
          content: 'act bot feature of aiuto',
        },
      ],
    });
  },
});
</script>
