<template>
  <v-app-bar density="prominent" app>
    <v-sheet width="15%">
      <a href="/">
        <img
          :class="{
            'l-logo-image': device === 'l',
            's-logo-image': device === 's',
          }"
          src="/public/icons/logo.png"
        />
      </a>
    </v-sheet>

    <v-tabs
      v-if="device === 'l'"
      style="position: relative; left: 45%; transform: translate(-50%)"
    >
      <v-tab v-for="page in pages" :to="page.page">{{ page.title }}</v-tab>
    </v-tabs>

    <v-menu v-else>
      <template v-slot:activator="{ props }">
        <v-btn class="my-auto ml-auto px-10" @click="showMenu = !showMenu">
          <v-icon v-if="!showMenu" size="x-large">mdi-menu</v-icon>
          <v-icon v-else size="medium">mdi-triangle-down</v-icon>
        </v-btn>
      </template>
    </v-menu>
  </v-app-bar>

  <v-sheet
    v-if="showMenu"
    v-show="showMenu"
    style="
      width: 100%;
      padding-top: 130px;
      position: fixed;
      z-index: 10;
      background-color: black;
      opacity: 0.8;
    "
  >
    <v-btn
      v-for="page in pages"
      :to="page.page"
      @click="showMenu = !showMenu"
      variant="outlined"
      class="text-center pa-8"
      style="width: 100%; color: white"
      >{{ page.title }}</v-btn
    >
  </v-sheet>
</template>
<script>
import { mergeProps } from "vue";

export default {
  props: {
    device: String,
  },
  data: () => ({
    showMenu: false,
    pages: [
      { title: "Home", page: "/" },
      { title: "Comics", page: "/comics" },
      { title: "Publications", page: "/publications/" },
      { title: "Journals", page: "/journals" },
      { title: "SHRO", page: "/shro" },
      { title: "Submit manuscripts", page: "/submit" },
      { title: "About AYRJ", page: "/about" },
      { title: "Contact Us", page: "/contact" },
    ],
  }),
  methods: {
    mergeProps,
  },
  // watch: {
  //   overlay(val) {
  //     if (val) {
  //       this.overlay;
  //     }
  //   },
  // },
};
</script>
<style scoped>
.l-logo-image {
  max-width: 250px;
  top: -30%;
  position: absolute;
  margin-inline-start: 100px;
}

.s-logo-image {
  max-width: 300px;
  max-height: 240px;
  top: -25%;
  position: absolute;
  margin-inline-start: 30px;
}
</style>
