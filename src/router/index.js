import { createRouter, createWebHistory } from "@ionic/vue-router";

import ProductsPage from "../pages/ProductsPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "/products",
    component: ProductsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
