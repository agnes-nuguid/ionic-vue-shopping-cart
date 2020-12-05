<template>
  <!-- Required so ionic can load the page with animation/transition smoothly -->
  <ion-page>
    <ion-content>
      <!-- Products -->
      <ion-grid class="ion-padding">
        <ion-row>
          <ion-col v-for="product in products" :key="product.id">
            <ion-img :src="product.thumbnail"></ion-img>
            <ion-fab vertical="top" horizontal="end" edge>
              <ion-fab-button size="small" color="medium">
                <ion-icon name="add" color="dark"></ion-icon>
              </ion-fab-button>
            </ion-fab>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/vue";

import { add } from "ionicons/icons";
import { addIcons } from "ionicons";

addIcons({ add });
export default {
  components: {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonFab,
    IonFabButton,
    IonIcon,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          thumbnail: "https://cdn.onlinewebfonts.com/svg/img_148071.png",
          title: "Lorem Ipsum",
          subtitle: "consectetur adipiscing elit",
          price: 32.0,
        },
        {
          id: 2,
          thumbnail: "https://cdn.onlinewebfonts.com/svg/img_148071.png",
          title: " Dolor Sit Amet",
          subtitle: "Sed do eiusmod tempor incididunt",
          price: 40.2,
        },
        {
          id: 3,
          thumbnail: "https://cdn.onlinewebfonts.com/svg/img_148071.png",
          title: " Sed enimt",
          subtitle: "Ut sem viverra",
          price: 92.0,
        },
        {
          id: 4,
          thumbnail: "https://cdn.onlinewebfonts.com/svg/img_148071.png",
          title: " Eget Nunc",
          subtitle: "Scelerisque viverra mauris in aliquam sem fringilla ut",
          price: 13.0,
        },
      ],
    };
  },
};
</script>
