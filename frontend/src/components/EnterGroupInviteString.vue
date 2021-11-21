<template>
  <div style="display: flex; align-items: center; padding: 10px">
    <ion-input v-model="inviteString" placeholder="Enter invite string" />
    <ion-icon :icon="addOutline" @click="joinGroup" size="large" />
  </div>
</template>

<script lang="ts">
import socialsService from '@/services/api/socials';
import { alertController, IonIcon, IonInput } from '@ionic/vue';
import { addOutline } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { IonInput, IonIcon },
  setup() {
    const inviteString = ref('');
    const joinGroup = async () => {
      const [status, resp] = await socialsService.joinGroup(inviteString.value);
      if (!status) {
        const alert = await alertController.create({
          header: 'Failure',
          message: resp,
          buttons: ['OK'],
        });
        alert.present();
      } else {
        const alert = await alertController.create({
          header: 'Success',
          message: 'Joined group successfully!',
          buttons: ['OK'],
        });
        alert.present();
      }
    };
    return { inviteString, addOutline, joinGroup };
  },
});
</script>
