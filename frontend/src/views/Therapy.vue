<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button slot="start" default-href="/act"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-card>
        <ion-card-header
          >Are you stressed about your daily work?
        </ion-card-header>
        <ion-card-content>
          <ion-chip>
            <ion-label>Never</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label>Sometimes</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label>Often</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label>Rarely</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label>NA</ion-label>
          </ion-chip>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header
          >Any family history for mental illness?
        </ion-card-header>
        <ion-card-content>
          <ion-chip>
            <ion-label>Yes</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label>No</ion-label>
          </ion-chip>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          Do you think you will be benefited from a psychological therapy?
        </ion-card-header>
        <ion-card-content>
          <ion-chip>
            <ion-label>Yes</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label>No</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label> Don't Know </ion-label>
          </ion-chip>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          Do you have any mental health care options in your mind?
        </ion-card-header>
        <ion-card-content>
          <ion-chip>
            <ion-label> Yes </ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label> No </ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label> Not Sure </ion-label>
          </ion-chip>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          Are your coworkers (if any) making you feel stressed or irritated?
        </ion-card-header>
        <ion-card-content>
          <ion-chip>
            <ion-label>Yes</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label>No</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label>Some Of Them</ion-label>
          </ion-chip>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header> Do you often feel confused? </ion-card-header>
        <ion-card-content>
          <ion-chip>
            <ion-label>Yes</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label>No</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label>Don't Know</ion-label>
          </ion-chip>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          Are you seeking any help for your mental illness?
        </ion-card-header>
        <ion-card-content>
          <ion-chip>
            <ion-label>Yes </ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label>No</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label>Don't Know</ion-label>
          </ion-chip>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          Are you seeking any help for your mental illness?
        </ion-card-header>
        <ion-card-content>
          <ion-chip>
            <ion-label>Somewhat Easy</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label>Very Easy</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label>Somewhat Difficult</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label> Very Difficult </ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label>Don't Know</ion-label>
          </ion-chip>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          Are you suffering from any physical illness?
        </ion-card-header>
        <ion-card-content>
          <ion-chip>
            <ion-label>Yes</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label>No</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label>Maybe</ion-label>
          </ion-chip>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header> Please select your Gender: </ion-card-header>
        <ion-card-content>
          <ion-chip>
            <ion-label>Male</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label>Female</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-label>Others</ion-label>
          </ion-chip>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header> Please enter your Age </ion-card-header>
        <ion-card-content>
          <ion-input placeholder="Age"></ion-input>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          Write anything here which you want us to know about your mental health
          to predict your state of illness.
        </ion-card-header>
        <ion-card-content>
          <ion-textarea placeholder="Anything you want" rows="3">
          </ion-textarea>
        </ion-card-content>
      </ion-card>
      <ion-textarea></ion-textarea>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonInput,
  IonTextarea,
  IonBackButton,
  IonCardHeader,
  IonChip,
  IonLabel,
  IonHeader,
  IonButtons,
} from '@ionic/vue';
import { useHead } from '@vueuse/head';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonPage,
    IonCard,
    IonContent,
    IonCardContent,
    IonToolbar,
    IonTextarea,
    IonInput,
    IonBackButton,
    IonHeader,
    IonButtons,
    IonCardHeader,
    IonChip,
    IonLabel,
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
