<template>
  <v-app>
    <page-header></page-header>
    <v-main>
      <NuxtPage></NuxtPage>
    </v-main>
  </v-app>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";

export default {
  components: {
    PageHeader,
  },
};
</script>
