<template>
  <ion-page>
    <ion-content>
      <ion-toolbar>
        <ion-searchbar
          show-cancel-button="focus"
          clear-icon="close-circle"
          animated="true"
        ></ion-searchbar>
      </ion-toolbar>

      <ion-card style="margin-top: 25%; border-radius: 8%">
        <ion-card-header style="text-align: center; font-size: 120%"
          >Groups</ion-card-header
        >
        <ion-card-content>
          <ion-item-group>
            <ion-list>
              <ion-item-divider>
                <ion-avatar>
                  <img src="assets/icon/diary.png" />
                </ion-avatar>

                <ion-label>Reading group</ion-label>
                <ion-label slot="end">17 Members</ion-label>
              </ion-item-divider>

              <ion-item-divider>
                <ion-avatar>
                  <img src="assets/icon/favicon.png" />
                </ion-avatar>
                <ion-label>Gym group</ion-label>
                <ion-label slot="end">24 Members</ion-label>
              </ion-item-divider>
              <ion-item-divider>
                <ion-avatar>
                  <img src="assets/icon/icon.png" />
                </ion-avatar>
                <ion-label>Chorus group</ion-label>
                <ion-label slot="end">35 Members</ion-label>
              </ion-item-divider>
            </ion-list>
          </ion-item-group>
        </ion-card-content>
      </ion-card>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button href="/creategr">
          <ion-icon src="assets/icon/add-circle-outline.svg"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import {
  IonContent,
  IonPage,
  IonToolbar,
  IonSearchbar,
  IonCard,
  IonCardContent,
  IonFab,
  IonFabButton,
  IonAvatar,
  IonList,
  IonItemDivider,
  IonLabel,
  IonItemGroup,
  IonCardHeader,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonToolbar,
    IonSearchbar,
    IonCard,
    IonFab,
    IonFabButton,
    IonCardContent,
    IonAvatar,
    IonList,
    IonItemDivider,
    IonLabel,
    IonItemGroup,
    IonCardHeader,
  },
  setup() {
    useHead({
      title: 'Groups',
      meta: [
        {
          name: 'description',
          content:
            'Groups feature of AIuto which will show the groups you have joined',
        },
      ],
    });
  },
});
</script>
