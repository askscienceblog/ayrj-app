<template>
  <v-app-bar density="prominent" app>
    <v-sheet width="15%">
      <a href="/">
        <img
          :class="{
            'l-logo-image': device === 'l',
            's-logo-image': device === 's',
          }"
          src="/public/logo.png"
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
        <v-btn class="my-auto ml-auto px-10" v-bind="props">
          <v-icon size="x-large">mdi-menu</v-icon>
        </v-btn>
      </template>

      <v-btn
        v-for="page in pages"
        :to="page.page"
        variant="outlined"
        class="text-center px-16"
        style="background-color: white; padding-top: 20px; padding-bottom: 30px"
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
