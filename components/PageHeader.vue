<template>
  <v-app-bar density="prominent">
    <img class="logo-image" src="/public/imgs/logo.png" />

    <v-tabs>
      <v-tabs>
        <v-tab to="/">Home</v-tab>
        <v-tab to="/articles/">
          <v-sheet class="text-center my-auto">
            <v-menu :open-on-hover="true">
              <template v-slot:activator="{ props: menu }">
                <v-tooltip location="top">
                  <template v-slot:activator="{ props: tooltip }">
                    <v-btn color="primary" v-bind="mergeProps(menu, tooltip)">
                      Articles
                    </v-btn>
                  </template>
                </v-tooltip>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title>
                    <v-btn variant="flat" class="my-auto" :href="item.page">
                      {{ item.title }}
                    </v-btn></v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>
          </v-sheet>
        </v-tab>
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
