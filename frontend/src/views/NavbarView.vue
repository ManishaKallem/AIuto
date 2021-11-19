<template>
  <ion-page>
    <ion-tabs
      @ionTabsWillChange="beforeTabChange"
      @ionTabsDidChange="afterTabChange"
    >
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="act" href="/act">
          <ion-icon :icon="personCircle"></ion-icon>
          <ion-label>ACT</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="stats" href="/stats">
          <ion-icon :icon="personCircle"></ion-icon>
          <ion-label>Stats</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="journal" href="/schedules">
          <ion-icon :icon="calendar"></ion-icon>
          <ion-label>Journal</ion-label>
          <ion-badge>6</ion-badge>
        </ion-tab-button>

        <ion-tab-button tab="group" href="/group">
          <ion-label>Groups</ion-label>
          <ion-badge>6</ion-badge>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonIcon,
  IonLabel,
  IonPage,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonBadge,
  IonRouterOutlet,
} from '@ionic/vue';
import { calendar, personCircle } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonIcon,
    IonLabel,
    IonPage,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonBadge,
    IonRouterOutlet,
  },
  setup() {
    const beforeTabChange = () => {
      // do something before tab change
    };
    const afterTabChange = () => {
      // do something after tab change
    };
    return {
      calendar,
      personCircle,
      beforeTabChange,
      afterTabChange,
    };
  },
});
</script>
