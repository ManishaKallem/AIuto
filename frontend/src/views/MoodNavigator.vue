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
      <div class="dates">
        <ion-buttons>
          <ion-button
            shape="round"
            slot="start"
            style="
              border-radius: 50px;
              margin-top: 5%;
              margin-left: 6%;
              font-size: 150%;
            "
          >
            {{ CurrentDateDay().date - 2 }}
          </ion-button>

          <ion-button
            shape="round"
            slot="start"
            style="
              border-radius: 50px;
              margin-top: 5%;
              margin-left: 6%;
              font-size: 150%;
            "
          >
            {{ CurrentDateDay().date - 1 }}
          </ion-button>

          <ion-button
            shape="round"
            slot="start"
            style="
              border-radius: 50px;
              margin-top: 5%;
              margin-left: 6%;
              font-size: 150%;
            "
          >
            {{ CurrentDateDay().date }}
          </ion-button>

          <ion-button
            shape="round"
            slot="secondary"
            style="
              border-radius: 50px;
              margin-top: 5%;
              margin-left: 6%;
              font-size: 150%;
            "
          >
            {{ CurrentDateDay().date + 1 }}
          </ion-button>

          <ion-button
            shape="round"
            slot="end"
            style="
              border-radius: 50px;
              margin-top: 5%;
              margin-left: 6%;
              margin-right: 1%;
              font-size: 150%;
            "
          >
            {{ CurrentDateDay().date + 2 }}
          </ion-button>
        </ion-buttons>
      </div>
      <div style="padding: 10%; text-align: center">
        <ion-card
          disable="true"
          style="
            display: flex;
            width: 100%;
            flex-direction: row;
            margin: 0%;
            height: 100%;
          "
        >
          <div
            id="app"
            style="
              font-size: 200%;

              width: 80%;
              margin: auto;
            "
          >
            <ion-card-content style="font-size: 150%">
              {{ CurrentDateDay().date }}<br />
              {{ CurrentDateDay().day }}
            </ion-card-content>
          </div>
        </ion-card>
      </div>
      <ion-item>
        <ion-buttons slot="start">
          <img src="assets/icon/happy.png" style="height: 75px; width: 75px" />
        </ion-buttons>
        <ion-buttons slot="end">
          <img src="assets/icon/angry.png" style="height: 75px; width: 75px" />
        </ion-buttons>
      </ion-item>
      <ion-item>
        <ion-buttons slot="start">
          <img
            src="assets/icon/ecstatic.png"
            style="height: 75px; width: 75px"
          />
        </ion-buttons>
        <ion-buttons slot="end">
          <img src="assets/icon/gloomy.png" style="height: 75px; width: 75px" />
        </ion-buttons>
      </ion-item>
      <ion-item>
        <ion-buttons slot="start">
          <img src="assets/icon/tired.png" style="height: 75px; width: 75px" />
        </ion-buttons>
        <ion-buttons slot="end">
          <img src="assets/icon/sad.png" style="height: 80px; width: 80px" />
        </ion-buttons>
      </ion-item>

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
  IonCard,
  IonCardContent,
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
    IonCard,
    IonCardContent,
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
  methods: {
    CurrentDateDay() {
      const current = new Date();
      const date = current.getDate();
      const days = current.getDay();
      let day = 'day';

      switch (days) {
        case 0:
          day = 'Sunday';
          break;

        case 1:
          day = 'Monday';
          break;

        case 2:
          day = 'Tuesday';
          break;

        case 3:
          day = 'Wednesday';
          break;

        case 4:
          day = 'Thursday';
          break;

        case 5:
          day = 'Friday';
          break;

        case 6:
          day = 'Saturday';
          break;

        default:
          day = 'everything is a lie';
          break;
      }

      return {
        date,
        day,
      };
    },
  },
});
</script>
