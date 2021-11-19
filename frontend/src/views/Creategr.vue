<template>
  <ion-page>
    <ion-content>
      <ion-toolbar style="margin-bottom: 15%">
        <ion-back-button
          default-href="/nav/group"
          slot="start"
        ></ion-back-button>
        <ion-label slot="end" style="padding-right: 38%"
          >Create Group</ion-label
        >
      </ion-toolbar>
      <ion-card style="width: 95%; height: 75%; border-radius: 4%">
        <ion-card-content>
          <ion-item style="padding-top: 14%">
            <ion-input
              type="text"
              placeholder="Title"
              style="border-radius: 5%; width: 90%; height: 8%"
            ></ion-input>
          </ion-item>
          <ion-item style="padding-top: 10%">
            <ion-textarea
              placeholder="Description"
              rows="4"
              style="border-radius: 4%"
            ></ion-textarea>
            <!-- rounded corners for the inputs to be applied -->
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
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import {
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
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';

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
  },
});
</script>
