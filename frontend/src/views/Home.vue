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
          <ion-item-group v-if="isLoggedIn">
            <a href="/auth/login">
              <ion-item-divider>Login</ion-item-divider>
            </a>
            <a href="/auth/register">
              <ion-item-divider>Register</ion-item-divider>
            </a>
          </ion-item-group>
          <ion-item-group v-else>
            <ion-item-divider @click="logout">Logout</ion-item-divider>
          </ion-item-group>
          <ion-item-group>
            <a href="/mood-navigator">
              <ion-item-divider>Mood Navigator</ion-item-divider>
            </a>
          </ion-item-group>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { getStorageItem, removeStorageItem } from '@/services/storage';
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
import { defineComponent, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

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
    const isLoggedIn = ref(false);
    const router = useRouter();
    const refresh = (ev: CustomEvent) => {
      setTimeout(() => {
        ev.detail.complete();
      }, 3000);
    };
    const logout = async () => {
      await removeStorageItem('token');
      router.push('/auth/login');
    };
    onMounted(async () => {
      const token = await getStorageItem('token');
      if (!token) isLoggedIn.value = true;
    });
    return { refresh, isLoggedIn, logout };
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
