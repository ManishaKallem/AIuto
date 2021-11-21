<template>
  <div style="padding: 10px">
    <div style="padding: 3px">
      <ion-text>
        <strong>Invite string:</strong> <u>{{ props.inviteString }}</u>
      </ion-text>
    </div>
    <div style="padding: 3px">
      <ion-text>
        <strong>Group description:</strong> <u>{{ props.description }}</u>
      </ion-text>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IonText } from '@ionic/vue';
import { defineProps } from 'vue';

const props = defineProps<{ inviteString: string; description: string }>();
</script>
