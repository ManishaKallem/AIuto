<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button slot="start" default-href="/act"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-loading :is-open="isFetching" message="Loading questions..." />
    <ion-content v-if="!isFetching">
      <div v-for="(column, index) in columns" :key="index">
        <ion-card v-if="!column.defaultValue">
          <ion-card-header>{{ column.description }}</ion-card-header>
          <ion-card-content>
            <div v-if="column.options">
              <ion-chip
                v-for="(option, indexOption) in column.options"
                :key="indexOption"
                :outline="column.value === option ? false : true"
                @click="selectOption(option, column.id)"
              >
                <ion-label>{{ option }}</ion-label>
              </ion-chip>
            </div>
            <div v-else-if="column.textBox">
              <ion-textarea rows="3" />
            </div>
            <div v-else>
              <ion-input @input="enterValue($event, column.id)" />
            </div>
          </ion-card-content>
        </ion-card>
      </div>
      <div style="text-align: center; margin-bottom: 15px">
        <ion-button fill="outline" @click="submit" v-if="!loading">
          Submit
        </ion-button>
        <ion-spinner v-else />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import predictionService from '@/services/api/prediction';
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonInput,
  IonTextarea,
  IonBackButton,
  IonCardHeader,
  IonSpinner,
  IonChip,
  IonLabel,
  IonButton,
  IonHeader,
  IonButtons,
  IonLoading,
  alertController,
} from '@ionic/vue';
import { useHead } from '@vueuse/head';
import { DateTime } from 'luxon';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  components: {
    IonPage,
    IonCard,
    IonButton,
    IonSpinner,
    IonContent,
    IonCardContent,
    IonToolbar,
    IonTextarea,
    IonInput,
    IonBackButton,
    IonHeader,
    IonButtons,
    IonCardHeader,
    IonLoading,
    IonChip,
    IonLabel,
  },
  setup() {
    useHead({
      title: 'Therapy',
      meta: [
        {
          name: 'description',
          content: 'Therapy bot',
        },
      ],
    });
    const columns = ref<any[]>([]);
    const loading = ref(false);
    const isFetching = ref(true);

    const selectOption = (value: string, id: string) => {
      const index = columns.value.findIndex((e) => e.id === id);
      columns.value[index].value = value;
    };

    const enterValue = (event: Event, id: string) => {
      const index = columns.value.findIndex((e) => e.id === id);
      const value = (event.target as HTMLInputElement).value;
      columns.value[index].value = value;
    };

    const submit = async () => {
      loading.value = true;
      const [status, resp] = await predictionService.mentalHealthPredict(
        columns.value,
      );
      if (!status) {
        const alert = await alertController.create({
          header: 'Failure',
          message: resp,
          buttons: ['OK'],
        });
        alert.present();
      } else {
        const yes = resp.data[0].value * 100;
        const no = resp.data[1].value * 100;
        let message;
        yes > no
          ? (message = `You need mental treatment (${yes.toFixed(2)}% sure)`)
          : (message = `You do not need mental treatment (${no.toFixed(
              2,
            )}% sure)`);
        const alert = await alertController.create({
          header: 'Success',
          message: message,
          buttons: ['OK'],
        });
        alert.present();
      }
      loading.value = false;
    };

    onMounted(async () => {
      const resp = await predictionService.getMentalHealthColumns();
      columns.value = resp.data.map((c: any) => {
        if (c.name === 'Timestamp')
          c.defaultValue = DateTime.now().toFormat('yyyy-MM-dd hh:mm:ss');
        if (c.defaultValue) c.value = c.defaultValue;
        return c;
      });
      isFetching.value = false;
    });
    return { columns, loading, enterValue, selectOption, submit, isFetching };
  },
});
</script>
