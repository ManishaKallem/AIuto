<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button slot="start" default-href="/Welcome">
            <!-- default-href will change later -->
          </ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-item>
        <ion-text>
          <div
            style="
              position: fixed;
              bottom: 15px;
              font-size: 140%;
              color: blueviolet;
              width: 100%;
              text-align: center;
            "
          >
            <p>Hey!</p>
            <p>How are You Feeling Today</p>
          </div>
        </ion-text>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonBackButton,
  IonHeader,
  IonPage,
  IonButtons,
  IonToolbar,
  IonText,
  IonItem,
} from '@ionic/vue';

import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonButtons,
    IonBackButton,
    IonHeader,
    IonToolbar,
    IonText,
    IonItem,
  },
  setup() {
    useHead({
      title: 'MoodNavigator',
      meta: [
        {
          name: 'description',
          content: 'Mood Navigator feature of AIuto',
        },
      ],
    });
  },
});
</script>
