<template>
  <div id="cart" class="ion-padding">
    <!-- Cart Icon -->
    <div>
      <ion-icon :icon="cartIcon"></ion-icon>
    </div>

    <div id="cart-summary">
      <!-- Total Items -->
      <ion-badge class="ion-padding" color="medium">
        {{ totalItems }}
      </ion-badge>

  </div>
  </div>
</template>
<script>
import { IonIcon, IonBadge } from "@ionic/vue";

import { cart } from "ionicons/icons";

export default {
  props: ["cart"],
  components: {
    IonIcon,
    IonBadge,
  },
  computed: {
    totalItems: function() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
  },
  setup() {
    return {
      cartIcon: cart,
    };
  },
};
</script>

<style>

#cart ion-icon {
  font-size: 64px;
  color: var(--ion-color-dark);
}

ion-badge {
  line-height: 1;
  border-radius: 50%;
  color: var(--ion-color-dark);
}
</style>
