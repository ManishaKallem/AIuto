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
          <img src="assets/icon/statmin.ico" />
          <ion-label>Stats</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="journal" href="/schedules">
          <img src="assets/icon/diarymin.ico" />
          <ion-label>Journal</ion-label>
          <!--<ion-badge>6</ion-badge>-->
        </ion-tab-button>

        <ion-tab-button tab="group" href="/group">
          <img src="assets/icon/grpmin.ico" />
          <ion-label>Groups</ion-label>
          <!--<ion-badge>6</ion-badge>--><!--<ion-badge>6</ion-badge>-->
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
