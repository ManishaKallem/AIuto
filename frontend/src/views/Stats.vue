<template>
  <ion-page>
    <ion-loading :is-open="isFetching" message="Loading stats..." />
    <ion-content v-if="!isFetching">
      <div style="text-align: center">
        <bar-chart :chart-data="testData" />
        <a href="/mood-navigator" style="margin-top: 10px">Mood Navigator</a>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import navigatorService from '@/services/api/navigator';
import { IonContent, IonPage, IonLoading } from '@ionic/vue';
import { useHead } from '@vueuse/head';
import { Chart, registerables } from 'chart.js';
import { defineComponent, onMounted, ref } from 'vue';
import { BarChart } from 'vue-chart-3';

Chart.register(...registerables);

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    BarChart,
    IonLoading,
  },
  setup() {
    useHead({
      title: 'Stats',
      meta: [
        {
          name: 'description',
          content: 'Stats for user',
        },
      ],
    });
    const isFetching = ref(true);
    const testData = ref<any>(null);
    onMounted(async () => {
      const resp = await navigatorService.getMoodEntries();
      const moods = resp.data.map((e: any) => e.mood);
      const map: Map<string, number> = moods.reduce(
        (acc: any, e: any) => acc.set(e, (acc.get(e) || 0) + 1),
        new Map(),
      );
      testData.value = {
        plugins: {
          legend: false,
        },
        labels: [...map.keys()],
        datasets: [
          {
            label: `Mood over last ${moods.length} days`,
            data: [...map.values()],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(255, 205, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(201, 203, 207, 0.8)',
            ],
          },
        ],
      };
      isFetching.value = false;
    });

    return { testData, isFetching };
  },
});
</script>
