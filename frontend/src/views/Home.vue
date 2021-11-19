<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Dashboard</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <ion-card>
        <ion-card-header>
          <ion-title color="primary">Welcome to AIuto!</ion-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item-group>
            <a href="/auth/login">
              <ion-item-divider>Login</ion-item-divider>
            </a>
            <a href="/auth/register">
              <ion-item-divider>Register</ion-item-divider>
            </a>
          </ion-item-group>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonItemDivider,
  IonItemGroup,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { useHead } from '@vueuse/head';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    useHead({
      title: 'Dashboard',
      meta: [
        {
          name: 'description',
          content: 'AIuto dashboard',
        },
      ],
    });
    const refresh = (ev: CustomEvent) => {
      setTimeout(() => {
        ev.detail.complete();
      }, 3000);
    };
    return { refresh };
  },
  components: {
    IonContent,
    IonHeader,
    IonItemDivider,
    IonPage,
    IonItemGroup,
    IonRefresher,
    IonRefresherContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonTitle,
    IonToolbar,
  },
});
</script>
