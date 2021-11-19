<template>
  <ion-page>
    <ion-content>
      <ion-toolbar>
        <ion-searchbar
          show-cancel-button="focus"
          clear-icon="close-circle"
          animated="true"
        />
      </ion-toolbar>
      <ion-card style="margin-top: 25%; border-radius: 8%">
        <ion-card-header style="text-align: center">
          <ion-text color="primary"><h1>Groups</h1></ion-text>
        </ion-card-header>
        <ion-card-content>
          <ion-list v-if="groups.length > 0">
            <ion-item v-for="(group, index) in groups" :key="index">
              <ion-label>
                {{ group.title }}
              </ion-label>
              <ion-label slot="end">
                {{ group._count.users }} member(s)
              </ion-label>
            </ion-item>
          </ion-list>
          <ion-text style="text-align: center" v-else color="danger">
            <p>
              You have not joined/created any groups yet. Click the button below
              to do so.
            </p>
          </ion-text>
        </ion-card-content>
      </ion-card>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button href="/create-group">
          <ion-icon src="assets/icon/add-circle-outline.svg"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import socialsService from '@/services/api/socials';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
  IonText,
  IonToolbar,
} from '@ionic/vue';
import { useHead } from '@vueuse/head';
import { defineComponent, onMounted, ref } from 'vue';

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
    IonIcon,
    IonList,
    IonItem,
    IonText,
    IonLabel,
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
    const groups = ref<any[]>([]);
    onMounted(async () => {
      const resp = await socialsService.getGroups();
      groups.value = resp.data;
    });

    return { groups };
  },
});
</script>
