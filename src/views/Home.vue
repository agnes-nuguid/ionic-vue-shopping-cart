<template>
  <!-- Required so ionic can load the page with animation/transition smoothly -->
  <ion-page>
    <ion-content>
      <!-- Cart -->
      <cart-overview></cart-overview>

      <!-- Details View -->
      <cart-details
        v-if="cart.length"
        :cart="cart"
      ></cart-details>

      <!-- Products -->
      <products-list
        :products="products"
        @add-to-cart="handleAddToCart"
      ></products-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";

import CartOverview from "../components/cart/CartOverview.vue";

import CartDetails from "../components/cart/CartDetails.vue";

import ProductsList from "../components/products/ProductsList.vue";

export default {
  components: {
    IonPage,
    IonContent,
    CartOverview,
    CartDetails,
    ProductsList,
  },
  data() {
    return {
      cart: [],
      products: [
        {
          id: "1",
          thumbnail: "https://cdn.onlinewebfonts.com/svg/img_148071.png",
          title: "Lorem Ipsum",
          subtitle: "consectetur adipiscing elit",
          price: 32.0,
        },
        {
          id: "2",
          thumbnail: "https://cdn.onlinewebfonts.com/svg/img_148071.png",
          title: " Dolor Sit Amet",
          subtitle: "Sed do eiusmod tempor incididunt",
          price: 40.2,
        },
        {
          id: "3",
          thumbnail: "https://cdn.onlinewebfonts.com/svg/img_148071.png",
          title: " Sed enimt",
          subtitle: "Ut sem viverra",
          price: 92.0,
        },
        {
          id: "4",
          thumbnail: "https://cdn.onlinewebfonts.com/svg/img_148071.png",
          title: " Eget Nunc",
          subtitle: "Scelerisque viverra mauris in aliquam sem fringilla ut",
          price: 13.0,
        },
      ],
    };
  },

  methods: {
    handleAddToCart: function(product) {
      if (this.cart.filter((item) => item.id === product.id).length) {
        this.cart
          .filter((item) => item.id === product.id)
          .map((item) => (item.quantity += 1));
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
  },
};
</script>
