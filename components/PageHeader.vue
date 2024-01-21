<template>
  <v-app-bar density="prominent">
    <img class="logo-image" src="/public/imgs/logo.png" />

    <v-tabs>
      <v-tabs>
        <v-tab to="/">Home</v-tab>
        <v-tab to="/articles">Articles</v-tab>
        <v-tab to="/downloads">Downloads</v-tab>
        <v-tab to="/blog">Experiment Blog</v-tab>
        <v-tab to="/about">About AYRJ</v-tab>
        <v-tab to="/submit">Submit your manuscript</v-tab>
      </v-tabs>
    </v-tabs>
  </v-app-bar>
</template>
<script>
import { mergeProps } from "vue";

export default {
  data: () => ({
    items: [
      { title: "Biology", page: "/articles/biology" },
      { title: "Chemistry", page: "/articles/chemistry" },
      { title: "Physics", page: "/articles/physics" },
      { title: "Mathemetics", page: "/articles/mathematics" },
      { title: "Engineering", page: "/articles/engineering" },
      { title: "Computing", page: "/articles/computing" },
    ],
  }),
  methods: {
    mergeProps,
  },
};
</script>
<style scoped>
.logo-image {
  max-width: 400px;
  max-height: 300px;
  margin-top: -60px;
  margin-inline: 50px;
}
</style>
