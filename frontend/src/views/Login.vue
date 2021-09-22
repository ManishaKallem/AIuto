<template>
    <ion-page>
        <ion-header :translucent="true">
            <IonToolbar>
                <ion-title> "Welcome" </ion-title>
            </IonToolbar>                
        </ion-header>    
        <ion-content>
             
        </ion-content>

    </ion-page>
</template>

<script lang="ts">
import { IonTitle } from "@ionic/vue";
import { IonBackButton,IonTitle, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonNote, IonPage, IonToolbar } from '@ionic/vue'

export default defineComponent({

    components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonNote,
    IonPage,
    IonToolbar,
    IonTitle
  },
});
</script>


