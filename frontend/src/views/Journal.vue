<template>
  <ion-page>
    <ion-content>
      <div class="date">
        <ion-icon src="assets/icon/arrow-back-outline.svg"></ion-icon>
        <p style="font-size: large; text-align: center">
          {{ CurrentDateDay().day }}
        </p>

        <h1 style="text-align: center">{{ CurrentDateDay().date }}</h1>
        <p style="text-align: center">
          {{ CurrentDateDay().month }} {{ CurrentDateDay().year }}
        </p>
        <!-- Need a method for going from one date to another also need to add arrows-->
        <!-- cant keep text and icon in a single line-->
      </div>

      <!--image to be inserted-->
      <ion-card style="border-radius: 8%; width: 80%; margin: auto">
        <ion-card-content style="text-align: center">
          <ion-text style="font-size: medium">Reading</ion-text>
          <ion-text style="font-size: small"
            >13:00-14:00 <br />
            1 hour</ion-text
          >
        </ion-card-content>
      </ion-card>

      <ion-card
        style="
          border-radius: 8%;
          width: 80%;
          margin-top: 5%;
          margin-left: auto;
          margin-right: auto;
        "
      >
        <ion-card-content style="text-align: center">
          <ion-text style="font-size: medium">Dancing</ion-text>
          <ion-text style="font-size: small"
            >15:00-18:00 <br />
            2 hour</ion-text
          >
        </ion-card-content>
      </ion-card>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button href="/nav/scheduler">
          <ion-icon src="assets/icon/create-outline.svg"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonIcon,
  IonText,
  IonFab,
  IonFabButton,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonCardContent,
    IonIcon,
    IonText,
    IonFab,
    IonFabButton,
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
  methods: {
    CurrentDateDay() {
      const current = new Date();
      const date = current.getDate();
      const days = current.getDay();
      const months = current.getMonth();
      const year = current.getFullYear();
      let day = 'day';
      let month = 'month';

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

      switch (months) {
        case 0:
          month = 'Jan';
          break;

        case 1:
          month = 'Feb';
          break;

        case 2:
          month = 'Mar';
          break;

        case 3:
          month = 'April';
          break;

        case 4:
          month = 'May';
          break;

        case 5:
          month = 'June';
          break;

        case 6:
          month = 'July';
          break;

        case 7:
          month = 'Aug';
          break;

        case 8:
          month = 'Sept';
          break;

        case 9:
          month = 'Oct';
          break;

        case 10:
          month = 'Nov';
          break;

        case 11:
          month = 'Dec';
          break;

        default:
          month = 'timeline is messed up';
          break;
      }

      return {
        date,
        day,
        month,
        year,
      };
    },
  },
});
</script>
