<template>
  <div id="cart" class="ion-padding">
    <!-- Cart Icon -->
    <div>
      <ion-icon :icon="cartIcon"></ion-icon>
    </div>

  </div>
</template>
<script>
import { IonIcon } from "@ionic/vue";

import { cart } from "ionicons/icons";

export default {
  components: {
    IonIcon,
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
</style>
