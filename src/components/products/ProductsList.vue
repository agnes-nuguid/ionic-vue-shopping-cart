<template>
  <!-- Products -->
  <ion-grid class="ion-margin">
    <ion-row class="ion-justify-content-center">
      <ion-col
        size-sm="2"
        size="6"
        v-for="product in products"
        :key="product.id"
      >
        <ion-img :src="product.thumbnail" alt="Placeholder image"></ion-img>
        <ion-fab vertical="top" horizontal="end" edge>
          <ion-fab-button
            size="small"
            color="medium"
            @click="addToCart(product)"
          >
            <ion-icon :icon="add" color="dark"></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import {
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/vue";

import { add } from "ionicons/icons";

export default {
  props: ["products"],
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonFab,
    IonFabButton,
    IonIcon,
  },
  methods: {
    addToCart: function(product) {
      this.$emit("add-to-cart", product);
    },
  },
  setup() {
    return {
      add,
    };
  },
};
</script>

<style>
ion-fab-button {
  --border-width: 2px;
  --border-color: var(--ion-color-dark);
  --border-style: solid;
}

ion-fab.fab-vertical-top.fab-edge {
  top: -20px;
}

ion-fab.fab-horizontal-end {
  right: calc(-17px + var(--ion-safe-area-right, 0px));
}
</style>
