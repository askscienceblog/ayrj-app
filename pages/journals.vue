<template>
  <div style="position: relative; text-align: center; color: white">
    <v-sheet class="background"> </v-sheet>
    <v-sheet class="overlay"></v-sheet>
    <p class="text-h3 font-weight-bold page-title">Journals</p>
  </div>

  <v-sheet class="mx-auto mb-8" width="80%">
    <p class="text-h5 my-15 font-weight-bold">Journals</p>
    <v-sheet color="black" height="2" class="mt-n6"></v-sheet>
  </v-sheet>

  <v-card
    v-for="download in downloads"
    class="mx-auto my-2 d-flex align-center justify-center"
    height="100"
    max-width="80%"
  >
    <p class="text-center text-h5 font-weight-bold">
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
        { title: "AYRJ Volume 1 Issue 1", id: "2024q1" },
        { title: "AYRJ Volume 1 Issue 2", id: "2024q2" },
        { title: "AYRJ Volume 1 Issue 3", id: "2024q3" },
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  color: white;
}

.background {
  z-index: 0;

  width: 100%;
  height: 300px;

  background-image: url("/public/imgs/background/microscope.png");
  background-repeat: no-repeat;
  background-size: 100%;
  transition: background-size 4s ease;
  background-position: center center;
}

.overlay {
  position: absolute;
  top: 0%;
  z-index: 0;

  height: 300px;
  width: 100%;

  background-color: black;
  opacity: 0.5;
}
</style>
