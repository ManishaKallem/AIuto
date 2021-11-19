<template>
  <ion-page>
    <ion-content>
      <div class="date">
        <p style="font-size: large; text-align: center">
          {{ time.day }}
        </p>
        <h1 style="text-align: center">{{ time.date }}</h1>
        <p style="text-align: center">{{ time.month }} {{ time.year }}</p>
      </div>
      <form @submit.prevent="handleSubmit">
        <ion-card style="border-radius: 7%">
          <ion-item style="margin-top: 5%">
            <ion-label position="floating">
              What would you like to do?
            </ion-label>
            <ion-input placeholder="Enter title" v-model="title" />
          </ion-item>
          <ion-item style="margin-top: 5%">
            <ion-label position="fixed">Start Time</ion-label>
            <ion-datetime
              display-format="MMM DD, YYYY HH:mm"
              v-model="startTime"
            />
          </ion-item>
          <ion-item style="margin-top: 5%">
            <ion-label position="fixed">End Time</ion-label>
            <!-- TODO: Need a method such that end time cant be before start time-->
            <ion-datetime
              display-format="MMM DD, YYYY HH:mm"
              v-model="endTime"
            />
          </ion-item>
          <ion-item style="margin-top: 5%">
            <ion-label>Repeat</ion-label>
            <ion-select interface="popover" v-model="repeatEach">
              <ion-select-option
                :value="option"
                v-for="(option, index) in RepeatEach"
                :key="index"
              >
                {{ option }}
              </ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item style="margin-top: 5%">
            <ion-label>Add Note</ion-label>
            <ion-textarea
              rows="4"
              placeholder="Enter any note here..."
              v-model="note"
            />
          </ion-item>
        </ion-card>
        <ion-item>
          <ion-button
            slot="start"
            expand="full"
            fill="clear"
            type="submit"
            style="width: 50%; margin: auto"
          >
            Cancel
          </ion-button>
          <ion-button
            slot="end"
            type="submit"
            expand="full"
            fill="clear"
            style="width: 100%; margin: auto"
          >
            Save
          </ion-button>
        </ion-item>
      </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import scheduleService from '@/services/api/schedule';
import {
  alertController,
  IonButton,
  IonCard,
  IonContent,
  IonDatetime,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTextarea,
} from '@ionic/vue';
import { useHead } from '@vueuse/head';
import { DateTime } from 'luxon';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

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
    const note = ref('');
    const title = ref('');
    const startTime = ref('');
    const endTime = ref('');
    const repeatEach = ref('');
    const router = useRouter();

    enum RepeatEach {
      NEVER = 'NEVER',
      DAILY = 'DAILY',
      WEEKLY = 'WEEKLY',
      MONTHLY = 'MONTHLY',
    }

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
    const handleSubmit = async () => {
      const [status, resp] = await scheduleService.createSchedule(
        startTime.value,
        endTime.value,
        title.value,
        repeatEach.value,
        note.value,
      );
      if (!status) {
        const alert = await alertController.create({
          header: 'Failure',
          message: resp,
          buttons: ['OK'],
        });
        alert.present();
      } else {
        const alert = await alertController.create({
          header: 'Success',
          message: 'Added item to your schedule',
          buttons: ['OK'],
        });
        alert.present();
        router.push('/nav/schedules');
      }
    };
    const time = DateTime.now();
    return {
      note,
      title,
      repeatEach,
      startTime,
      endTime,
      RepeatEach,
      handleSubmit,
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
