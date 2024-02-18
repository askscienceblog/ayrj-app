<template>
  <div style="position: relative; text-align: center; color: white">
    <v-sheet class="background"> </v-sheet>
    <v-sheet class="overlay"></v-sheet>
    <p class="text-h3 font-weight-bold page-title">Experiment Blogs</p>
  </div>
  <v-sheet class="mx-16 mb-5" width="100%">
    <p class="text-h5 my-15 font-weight-bold">Research Blogs</p>
    <v-sheet color="black" height="2" class="mt-n6"></v-sheet>
  </v-sheet>

  <p class="text-center text-h5 my-16">Coming Soon...</p>
</template>

<style scoped>
.page-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  color: white;
}

.background {
  z-index: 0;

  width: 100%;
  height: 300px;

  background-image: url("/public/background/samples-orange.jpg");
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
