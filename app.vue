<template>
  <v-app>
    <page-header></page-header>
    <v-main>
      <NuxtPage></NuxtPage>
    </v-main>
    <page-footer></page-footer>
  </v-app>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";

export default {
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>
