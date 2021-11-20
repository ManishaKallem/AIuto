<template>
  <ion-page>
    <ion-content>
      <div class="dates" style="text-align: center; margin-top: 20px">
        <ion-item-group>
          <ion-button
            shape="round"
            slot="start"
            color="secondary"
            fill="outline"
            @click="prevDate"
            style="margin-right: 10px"
          >
            Prev
          </ion-button>
          <ion-button
            shape="round"
            slot="start"
            color="secondary"
            fill="outline"
            @click="nextDate"
            style="margin-left: 10px"
          >
            Next
          </ion-button>
        </ion-item-group>
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
          <div style="font-size: 200%; width: 80%; margin: auto">
            <ion-card-content>
              <div style="font-size: 50px">{{ time.toFormat('dd') }}</div>
              <div>{{ time.toFormat('LLL') }} {{ time.toFormat('yyyy') }}</div>
            </ion-card-content>
          </div>
        </ion-card>
      </div>
      <ion-grid
        style="margin-left: auto; margin-right: auto; text-align: center"
      >
        <ion-row>
          <ion-col v-for="(emotion, index) in emotions" :key="index" size="4">
            <ion-button
              @click="submitEmotion(emotion)"
              expand="full"
              color="tertiary"
              shape="round"
            >
              {{ emotion }}
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
      <div style="text-align: center; margin-top: 5%">
        <img
          :src="`assets/icon/${icon.toLowerCase()}.png`"
          :alt="`${icon} icon`"
          style="height: 100px; width: 100px"
        />
      </div>
      <div style="text-align: center; margin-top: 5%">
        <ion-text style="font-size: 140%; width: 100%" color="danger">
          <p>Hey!</p>
          <p>How are you feeling today?</p>
        </ion-text>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import moodNavigatorService from '@/services/api/navigator';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonItemGroup,
  IonPage,
  IonRow,
  IonText,
} from '@ionic/vue';
import { useHead } from '@vueuse/head';
import { DateTime } from 'luxon';
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

enum Emotions {
  HAPPY = 'HAPPY',
  ANGRY = 'ANGRY',
  ECSTATIC = 'ECSTATIC',
  GLOOMY = 'GLOOMY',
  TIRED = 'TIRED',
  SAD = 'SAD',
}

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonRow,
    IonItemGroup,
    IonCard,
    IonCardContent,
    IonGrid,
    IonCol,
    IonText,
    IonButton,
  },
  setup() {
    useHead({
      title: 'Mood navigator',
      meta: [
        {
          name: 'description',
          content: 'Mood Navigator feature of AIuto',
        },
      ],
    });
    const icon = ref('HAPPY');
    const route = useRoute();
    const router = useRouter();
    const date = computed(() => route.query.date as string);

    const EMOTIONS = Object.keys(Emotions);
    const submitEmotion = async (emotion: string) => {
      icon.value = emotion;
      await moodNavigatorService.createMoodNavigatorRecord(emotion, date.value);
    };
    const prevDate = () =>
      router.push({
        query: { date: DateTime.fromISO(date.value).minus({ day: 1 }).toISO() },
      });
    const nextDate = () =>
      router.push({
        query: { date: DateTime.fromISO(date.value).plus({ day: 1 }).toISO() },
      });
    const getTime = computed(() => DateTime.fromISO(date.value));
    onMounted(() => {
      if (!date.value) router.push({ query: { date: DateTime.now().toISO() } });
    });
    return {
      emotions: EMOTIONS,
      submitEmotion,
      icon,
      prevDate,
      nextDate,
      time: getTime,
    };
  },
});
</script>
