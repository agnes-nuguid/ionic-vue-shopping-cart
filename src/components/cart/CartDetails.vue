<template>
  <ion-card>
    <ion-grid>
      <ion-row
        v-for="item in cart"
        :key="item.id"
      >
        <!-- Thumbnail -->
        <ion-col size="2">
          <ion-img :src="item.thumbnail"></ion-img>
        </ion-col>

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
  IonCol,
  IonImg,
} from "@ionic/vue";

export default {
  props: ["cart"],
  components: {
    IonCard,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
  },
};
</script>
