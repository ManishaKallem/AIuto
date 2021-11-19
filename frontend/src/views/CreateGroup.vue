<template>
  <ion-page>
    <ion-content>
      <ion-toolbar style="margin-bottom: 15%">
        <ion-back-button default-href="/group" slot="start" />
        <ion-label slot="end" style="padding-right: 38%">
          Create Group
        </ion-label>
      </ion-toolbar>
      <ion-card style="width: 95%; height: 75%; border-radius: 4%">
        <form @submit.prevent="submitForm">
          <ion-card-content>
            <ion-item style="padding-top: 14%">
              <ion-input
                type="text"
                placeholder="Title"
                style="border-radius: 5%; width: 90%; height: 8%"
                v-model="title"
              />
            </ion-item>
            <ion-item style="padding-top: 10%">
              <ion-textarea
                placeholder="Description"
                rows="4"
                style="border-radius: 4%"
                v-model="description"
              />
            </ion-item>
            <ion-item style="padding-top: 10%">
              <ion-button
                type="submit"
                style="text-align: center; width: 50%; margin: auto"
              >
                Create
              </ion-button>
            </ion-item>
          </ion-card-content>
        </form>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import socialsService from '@/services/api/socials';
import {
  IonBackButton,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTextarea,
  IonToolbar,
} from '@ionic/vue';
import { useHead } from '@vueuse/head';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonToolbar,
    IonCard,
    IonInput,
    IonCardContent,
    IonBackButton,
    IonLabel,
    IonTextarea,
    IonItem,
    IonButton,
  },

  setup() {
    const title = ref('');
    const description = ref('');
    useHead({
      title: 'Create Group',
      meta: [
        {
          name: 'description',
          content:
            'Create group feature of AIuto which will helps in creating groups',
        },
      ],
    });
    const router = useRouter();
    const submitForm = async () => {
      const [status] = await socialsService.createGroup(
        title.value,
        description.value,
      );
      if (status) router.push('/group');
    };
    return { title, description, submitForm };
  },
});
</script>
