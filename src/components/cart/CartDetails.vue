<template>
  <ion-card class="ion-margin">
    <ion-grid>
      <ion-row
        class="ion-justify-content-around ion-align-items-center"
        v-for="item in cart"
        :key="item.id"
      >
        <!-- Thumbnail -->
        <ion-col size-xs="6" size-sm="2" size-xl="1">
          <ion-img :src="item.thumbnail"></ion-img>
        </ion-col>

        <!-- Title & Subtitle -->
        <ion-col size-xs="12" size-sm="4">
          <h3>{{ item.title }}</h3>
          <p>{{ item.subtitle }}</p>
        </ion-col>

        <!-- Product Price (multiplied by quantity) -->
        <ion-col size-sm="2">
          $ {{ parseFloat(item.price * item.quantity).toFixed(2) }}
        </ion-col>

        <!-- Quantity Selector (also updating product price) -->
        <ion-col size-sm="1">
          <ion-input
            type="number"
            :value="item.quantity"
            min="1"
            @input="item.quantity = parseInt($event.target.value)"
          >
          </ion-input>
        </ion-col>

        <!-- Remove Button -->
        <ion-col size-sm="1">
          <ion-button
            fill="clear"
            color="dark"
            @click="removeFromCart(item.id)"
          >
            <ion-icon :icon="trashOutline"></ion-icon>
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card>
</template>

<script>
import {
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonInput,
  IonButton,
  IonIcon,
} from "@ionic/vue";

import { trashOutline } from "ionicons/icons";

export default {
  props: ["cart"],
  components: {
    IonCard,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonInput,
    IonButton,
    IonIcon,
  },
  methods: {
    removeFromCart: function(product) {
      this.$emit("remove-from-cart", product);
    },
  },
  setup() {
    return {
      trashOutline,
    };
  },
};
</script>

<style>
ion-col {
  color: var(--ion-color-dark);
}
</style>
