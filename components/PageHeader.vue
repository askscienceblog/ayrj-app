<template>
  <v-app-bar density="prominent" app>
    <img
      :class="{
        'l-logo-image': device === 'l' ? true : false,
        's-logo-image': device === 's' ? true : false,
      }"
      src="/public/imgs/logo.png"
    />

    <v-tabs v-if="device === 'l'" class="mx-auto">
      <v-tab v-for="page in pages" :to="page.page">{{ page.title }}</v-tab>
    </v-tabs>

    <v-menu v-else>
      <template v-slot:activator="{ props: menu }">
        <v-tooltip location="start" text="Browse">
          <template v-slot:activator="{ props: tooltip }">
            <v-btn
              class="my-auto ml-auto px-10"
              v-bind="mergeProps(menu, tooltip)"
            >
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
        </v-tooltip>
      </template>

      <v-btn
        v-for="page in pages"
        :to="page.page"
        variant="outlined"
        class="text-center px-5 py-8"
        style="background-color: white"
        >{{ page.title }}</v-btn
      >
    </v-menu>
  </v-app-bar>
</template>
<script>
import { mergeProps } from "vue";

export default {
  props: {
    device: String,
  },
  data: () => ({
    pages: [
      { title: "Home", page: "/" },
      { title: "Publications", page: "/publications/" },
      { title: "Journals", page: "/journals" },
      { title: "Experiment Blog", page: "/blog" },
      { title: "About AYRJ", page: "/about" },
      { title: "Submit manuscripts", page: "/submit" },
    ],
  }),
  methods: {
    mergeProps,
  },
};
</script>
<style scoped>
.l-logo-image {
  max-width: 400px;
  max-height: 300px;
  position: relative;
  top: -45%;
  margin-inline-start: 30px;
}

.s-logo-image {
  max-width: 300px;
  max-height: 240px;
  position: relative;
  top: -24%;
  margin-inline-start: 30px;
}
</style>
