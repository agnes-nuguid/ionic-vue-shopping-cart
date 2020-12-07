<template>
  <!-- Required so ionic can load the page with animation/transition smoothly -->
  <ion-page>
    <ion-content>
      <!-- Cart -->
      <cart-overview
        :cart="cart"
        @drop="onDrop($event)"
        @dragover.prevent
        @dragenter.prevent
      ></cart-overview>

      <!-- Details View -->
      <cart-details
        v-if="cart.length"
        :cart="cart"
        @remove-from-cart="handleRemoveFromCart"
        @drop="onDrop($event)"
        @dragover.prevent
        @dragenter.prevent
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
          thumbnail: "assets/placeholder.png",
          title: "Lorem Ipsum",
          subtitle: "consectetur adipiscing elit",
          price: 57.03,
        },
        {
          id: "2",
          thumbnail: "assets/placeholder.png",
          title: " Dolor Sit Amet",
          subtitle: "Sed do eiusmod tempor incididunt",
          price: 40.2,
        },
        {
          id: "3",
          thumbnail: "assets/placeholder.png",
          title: " Sed enimt",
          subtitle: "Ut sem viverra",
          price: 92.64,
        },
        {
          id: "4",
          thumbnail: "assets/placeholder.png",
          title: " Eget Nunc",
          subtitle: "Scelerisque viverra mauris in aliquam sem fringilla ut",
          price: 13.1,
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
    handleRemoveFromCart: function(itemId) {
      this.cart = this.cart.filter((item) => item.id !== itemId);
    },
    onDrop: function(event) {
      event.preventDefault(); // Prevents redirection to image
      const productId = event.dataTransfer.getData("productId");
      const product = this.products.find((product) => product.id === productId);
      this.handleAddToCart(product);
    },
  },
};
</script>
