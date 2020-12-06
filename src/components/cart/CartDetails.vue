<template>
  <ion-card>
    <ion-grid>
      <ion-row
        v-for="item in cart"
        :key="item.id"
      >
        <!-- Thumbnail -->

        <!-- Title & Subtitle -->

        <!-- Product Price (multiplied by quantity) -->

        <!-- Quantity Selector (also updating product price) -->

        <!-- Remove Button -->
      </ion-row>
    </ion-grid>
  </ion-card>
</template>

<script>
import {
  IonCard,
  IonGrid,
  IonRow,
} from "@ionic/vue";

export default {
  props: ["cart"],
  components: {
    IonCard,
    IonGrid,
    IonRow,
  },
};
</script>
