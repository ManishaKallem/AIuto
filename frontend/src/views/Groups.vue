<template>
  <ion-page>
    <ion-content>
      <h1 style="width: 70%; text-align: center">Coming Soon</h1>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';

export default defineComponent({
  components: {
    IonPage,
    IonContent,
  },
  setup() {
    useHead({
      title: 'Scheduler',
      meta: [
        {
          name: 'description',
          content:
            'Scheduler feature of AIuto which will help in setting tasks for the future',
        },
      ],
    });
  },
});
</script>
