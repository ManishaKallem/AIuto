<template>
  <ion-page v-if="!isFetching && !!information">
    <ion-toolbar style="text-align: center">
      <ion-label>
        {{ group.title }}
      </ion-label>
    </ion-toolbar>
    <ion-content>
      <ion-card style="height: 80%; overflow-y: auto">
        <ion-card-content>
          <ion-item
            v-for="(message, index) in group.messages"
            :key="index"
            style="padding: 5px"
          >
            <ion-item-divider
              :slot="message.userId === information.id ? 'end' : 'start'"
              style="border-radius: 6%; display: flex"
              :style="
                message.userId === information.id
                  ? {
                      flexDirection: 'column-reverse',
                    }
                  : {}
              "
            >
              <ion-text color="primary">
                <p>{{ message.contents }}</p>
              </ion-text>
              <ion-text color="secondary">
                <span>{{ message.user.username }}</span>
              </ion-text>
            </ion-item-divider>
          </ion-item>
        </ion-card-content>
      </ion-card>
      <ion-item style="position: fixed; bottom: 0; width: 100%">
        <ion-input
          type="text"
          v-model="contents"
          placeholder="Type Here..."
          style="border-radius: 5%; width: 80%"
        />
        <ion-icon :icon="send" @click="postMessage" />
      </ion-item>
    </ion-content>
  </ion-page>
  <ion-loading v-else :is-open="isFetching" message="Loading messages..." />
</template>

<script lang="ts">
import socialsService from '@/services/api/socials';
import userService from '@/services/api/user';
import {
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonPage,
  IonText,
  IonToolbar,
  IonLoading,
} from '@ionic/vue';
import { useHead } from '@vueuse/head';
import { sendOutline as send } from 'ionicons/icons';
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonText,
    IonCard,
    IonCardContent,
    IonIcon,
    IonInput,
    IonItem,
    IonToolbar,
    IonLabel,
    IonItemDivider,
    IonLoading,
  },
  setup() {
    const isFetching = ref(true);
    const name = ref('');
    const contents = ref('');
    const groupId = useRoute().params.id as string;
    useHead({
      title: computed(() => `Group ${name.value}`),
      meta: [
        {
          name: 'description',
          content: 'Chat with group',
        },
      ],
    });
    const group = ref<any>([]);
    const information = ref<any>(null);
    const fetchMessages = async () => {
      const resp = await socialsService.getGroupMessages(groupId);
      group.value = resp.data;
      return resp;
    };
    onMounted(async () => {
      const info = await userService.information();
      information.value = info.data;
      const resp = await fetchMessages();
      name.value = resp.data.title;
      isFetching.value = false;
    });
    const postMessage = async () => {
      await socialsService.postMessageToGroup(groupId, contents.value);
      contents.value = '';
      await fetchMessages();
    };
    return { send, group, isFetching, information, contents, postMessage };
  },
});
</script>
