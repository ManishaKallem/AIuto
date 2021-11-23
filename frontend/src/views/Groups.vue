<template>
  <ion-page>
    <ion-loading :is-open="isFetching" message="Loading groups..." />
    <ion-content v-if="!isFetching">
      <ion-toolbar>
        <ion-searchbar
          show-cancel-button="focus"
          clear-icon="close-circle"
          animated="true"
          v-model="query"
          @ionChange="filterGroups"
        />
      </ion-toolbar>
      <ion-card style="margin-top: 25%; border-radius: 8%">
        <ion-card-header style="text-align: center">
          <ion-text color="primary"><h1>Groups</h1></ion-text>
        </ion-card-header>
        <ion-card-content>
          <div v-if="groups.length > 0">
            <ion-list v-if="displayGroups.length > 0">
              <ion-item
                v-for="(group, index) in displayGroups"
                :key="index"
                :href="`/group/${group.id}`"
              >
                <ion-label>
                  {{ group.title }}
                </ion-label>
                <ion-label slot="end">
                  {{ group._count.users }} member(s)
                </ion-label>
              </ion-item>
            </ion-list>
            <ion-text v-else>
              <p>No group matches the query `{{ query }}`</p>
            </ion-text>
          </div>
          <ion-text style="text-align: center" v-else color="danger">
            <p>
              You have not joined/created any groups yet. Click the button below
              to do so.
            </p>
          </ion-text>
        </ion-card-content>
      </ion-card>
      <ion-fab vertical="bottom" horizontal="start" slot="fixed">
        <ion-fab-button @click="askInviteString">
          <ion-icon :icon="arrowRedoOutline" />
        </ion-fab-button>
      </ion-fab>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button href="/create-group">
          <ion-icon src="assets/icon/add-circle-outline.svg"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import EnterGroupInviteStringVue from '@/components/EnterGroupInviteString.vue';
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
  IonLoading,
  IonPage,
  IonSearchbar,
  IonText,
  IonToolbar,
  popoverController,
} from '@ionic/vue';
import { useHead } from '@vueuse/head';
import { arrowRedoOutline } from 'ionicons/icons';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonToolbar,
    IonSearchbar,
    IonLoading,
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
    const query = ref('');
    const groups = ref<any[]>([]);
    const displayGroups = ref<any[]>([]);
    const isFetching = ref(true);
    onMounted(async () => {
      const resp = await socialsService.getGroups();
      groups.value = resp.data;
      displayGroups.value = resp.data;
      isFetching.value = false;
    });
    const filterGroups = (input: Event) => {
      const searchString = (input.target as HTMLInputElement).value;
      if (searchString === '') displayGroups.value = groups.value;
      else {
        displayGroups.value = groups.value.filter(
          (e) =>
            e.title.toLowerCase().includes(searchString.toLowerCase()) ||
            e.description.toLowerCase().includes(searchString.toLowerCase()),
        );
      }
    };
    const askInviteString = async (ev: Event) => {
      const popover = await popoverController.create({
        component: EnterGroupInviteStringVue,
        cssClass: 'my-custom-class',
        event: ev,
        translucent: true,
      });
      await popover.present();
      const { role } = await popover.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    };
    return {
      query,
      groups,
      isFetching,
      displayGroups,
      filterGroups,
      askInviteString,
      arrowRedoOutline,
    };
  },
});
</script>
