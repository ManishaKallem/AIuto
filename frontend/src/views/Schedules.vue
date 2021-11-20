<template>
  <ion-page>
    <ion-content>
      <div class="date">
        <p style="font-size: large; text-align: center">
          {{ time.day }}
        </p>
        <h1 style="text-align: center">{{ time.date }}</h1>
        <p style="text-align: center">{{ time.month }} {{ time.year }}</p>
        <!-- Need a method for going from one date to another also need to add arrows-->
        <!-- cant keep text and icon in a single line-->
      </div>
      <div v-if="schedules.length > 0">
        <ion-card
          style="
            border-radius: 8%;
            width: 80%;
            margin-top: 12px;
            margin-left: auto;
            margin-right: auto;
          "
          v-for="(schedule, index) in schedules"
          :key="index"
        >
          <!--image to be inserted-->
          <ion-card-content style="text-align: center">
            <ion-text style="font-size: medium">{{ schedule.title }}</ion-text>
            <ion-text style="font-size: small">
              <div>From: {{ schedule.startTime }}</div>
              <div>To: {{ schedule.endTime }}</div>
              <div>Duration: {{ schedule.diff.hours.toFixed(1) }} hours</div>
            </ion-text>
          </ion-card-content>
        </ion-card>
      </div>
      <div
        v-else
        style="
          margin-left: auto;
          margin-right: auto;
          padding-left: 20px;
          padding-right: 20px;
          text-align: center;
        "
      >
        <ion-text color="primary">
          You do not have anything on your schedule. Create some using the
          button below.
        </ion-text>
      </div>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button href="/scheduler">
          <ion-icon src="assets/icon/create-outline.svg"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import scheduleService from '@/services/api/schedule';
import {
  IonCard,
  IonCardContent,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonPage,
  IonText,
} from '@ionic/vue';
import { useHead } from '@vueuse/head';
import { DateTime } from 'luxon';
import { defineComponent, onMounted, ref } from 'vue';

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
    const schedules = ref<any[]>([]);
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
    const time = DateTime.now();
    onMounted(async () => {
      const fetched = await scheduleService.getSchedules();
      schedules.value = fetched.data.map((element: any) => {
        const startTime = DateTime.fromISO(element.startTime);
        const endTime = DateTime.fromISO(element.endTime);
        element.diff = endTime.diff(startTime, ['hours']);
        element.startTime = startTime.toLocaleString(DateTime.DATETIME_SHORT);
        element.endTime = endTime.toLocaleString(DateTime.DATETIME_SHORT);
        return element;
      });
    });
    return {
      schedules,
      time: {
        day: time.toFormat('EEEE'),
        month: time.toFormat('MMM'),
        year: time.toFormat('y'),
        date: time.toFormat('d'),
      },
    };
  },
});
</script>
