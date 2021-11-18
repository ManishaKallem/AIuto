<template>
  <ion-page>
    <ion-content>
      <div class="date">
        <p style="font-size: large; text-align: center">
          {{ CurrentDateDay().day }}
        </p>
        <h1 style="text-align: center">{{ CurrentDateDay().date }}</h1>
        <p style="text-align: center">
          {{ CurrentDateDay().month }} {{ CurrentDateDay().year }}
        </p>
        <!-- Need a method for going from one date to another also need to add arrows-->
      </div>

      <ion-card style="border-radius: 7%">
        <ion-item style="margin-top: 5%">
          <ion-label position="floating">WHat have you been upto?</ion-label>
          <ion-input placeholder="Enter Input"></ion-input>
        </ion-item>
        <ion-item style="margin-top: 5%">
          <ion-label position="fixed">Start Time</ion-label>
          <ion-datetime display-format="HH:mm"></ion-datetime>
        </ion-item>
        <ion-item style="margin-top: 5%">
          <ion-label position="fixed">End Time</ion-label>
          <!-- Need a method such that end time cant be before start time-->
          <ion-datetime display-format="HH:mm"></ion-datetime>
        </ion-item>
        <ion-item style="margin-top: 5%">
          <ion-label>Repeat</ion-label>
          <ion-select interface="popover">
            <ion-select-option value="never">Never</ion-select-option>
            <ion-select-option value="daily">Daily</ion-select-option>
            <ion-select-option value="weekly">Weekly</ion-select-option>
            <ion-select-option value="monthly">Monthly</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item style="margin-top: 5%">
          <ion-label> Add Note</ion-label>
          <ion-textarea
            rows="4"
            placeholder="Enter any note here..."
          ></ion-textarea>
        </ion-item>
      </ion-card>
      <ion-item>
        <ion-button
          slot="start"
          expand="full"
          fill="clear"
          type="submit"
          style="width: 50%; margin: auto"
          >Cancel</ion-button
        >
        <ion-button
          slot="end"
          type="submit"
          expand="full"
          fill="clear"
          style="width: 100%; margin: auto"
          >Save</ion-button
        >
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonPage,
  IonButton,
  IonCard,
  IonInput,
  IonTextarea,
  IonLabel,
  IonDatetime,
  IonSelect,
  IonSelectOption,
  IonItem,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonCard,
    IonLabel,
    IonDatetime,
    IonSelect,
    IonSelectOption,
    IonInput,
    IonTextarea,
    IonItem,
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
