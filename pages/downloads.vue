<template>
  <v-sheet class="text-center" height="auto">
    <img
      src="/public/imgs/background/articles.jpg"
      class="pub-background"
      height="230"
      width="100%"
    />

    <p class="text-h3 font-weight-bold page-title">Downloads</p>
  </v-sheet>

  <v-card
    v-for="download in downloads"
    class="d-flex flex-fill mx-auto my-2"
    height="100"
    max-width="1200"
  >
    <p class="my-auto mx-auto me-auto text-h5 font-weight-bold">
      {{ download.title }}
    </p>
    <v-btn
      color="grey-darken-1"
      class="my-auto mx-10"
      @click="reqDownload(download.id)"
      icon="mdi-download"
    ></v-btn>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      downloads: [
        { title: "Research Journal 2024 Q1", id: "2024q1" },
        { title: "Research Journal 2024 Q2", id: "2024q2" },
        { title: "Research Journal 2024 Q3", id: "2024q3" },
      ],
    };
  },

  methods: {
    reqDownload(id) {
      console.log(id);
    },
  },
};
</script>

<style scoped>
.page-title {
  margin-top: -150px;
  margin-bottom: 120px;
  color: white;
}
</style>
