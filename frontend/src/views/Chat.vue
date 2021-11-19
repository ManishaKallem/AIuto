<template>
  <ion-page>
    <ion-toolbar>
      <ion-back-button slot="start" href="/group">
        <!--href to the grouplist-->
      </ion-back-button>
      <ion-label slot="end" style="padding-right: 38%">Group name</ion-label>
    </ion-toolbar>
    <ion-content>
      <ion-card style="height: 80%">
        <ion-card-content>
          <ion-item>
            <ion-item-divider slot="start" style="border-radius: 6%">
              <ion-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus sed nihil excepturi quas a laborum natus numquam
                repellat labo</ion-text
              >
            </ion-item-divider>
          </ion-item>
          <ion-item>
            <ion-item-divider
              slot="end"
              style="
                border-radius: 6%;
                display: flex;
                flex-direction: column-reverse;
                position: bottom;
                bottom: 0%;
              "
            >
              <ion-text slot="end" style="padding-left: 20%; text-align: end"
                >ipsum dolor sir
              </ion-text>
            </ion-item-divider>
          </ion-item>
        </ion-card-content>
      </ion-card>
      <ion-item style="position: fixed; bottom: 0; width: 100%">
        <ion-input
          type="text"
          placeholder="Type Here..."
          style="border-radius: 5%; width: 80%"
        ></ion-input>

        <img src="assets/icon/micmin.ico" slot="end" />
      </ion-item>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import {
  IonPage,
  IonContent,
  IonText,
  IonCard,
  IonCardContent,
  IonInput,
  IonItem,
  IonToolbar,
  IonBackButton,
  IonLabel,
  IonItemDivider,
} from '@ionic/vue';
import { useHead } from '@vueuse/head';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonText,
    IonCard,
    IonCardContent,
    IonInput,
    IonItem,
    IonToolbar,
    IonBackButton,
    IonLabel,
    IonItemDivider,
  },
  setup() {
    useHead({
      title: 'ACT Bot',
      meta: [
        {
          name: 'description',
          content: 'act bot feature of aiuto',
        },
      ],
    });
  },
});
</script>
