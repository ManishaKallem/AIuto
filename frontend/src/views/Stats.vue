<template>
  <ion-page>
    <ion-content>
      <ion-text>
        <p style="font-size: 250%; text-align: center">Coming Soon!</p>
      </ion-text>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonText } from '@ionic/vue';
import { useHead } from '@vueuse/head';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonPage,
    IonContent,
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
