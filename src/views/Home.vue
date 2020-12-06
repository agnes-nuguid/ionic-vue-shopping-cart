<template>
  <!-- Required so ionic can load the page with animation/transition smoothly -->
  <ion-page>
    <ion-content>
      <!-- Cart -->

      <!-- Details View -->

      <!-- Products -->
      <products-list
      ></products-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";

import ProductsList from "../components/products/ProductsList.vue";

export default {
  components: {
    IonPage,
    IonContent,
    ProductsList,
  },
};
</script>
