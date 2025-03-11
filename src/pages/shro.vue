<template>
  <div style="position: relative">
    <v-sheet class="background" :class="{
      'l-background-scale': device === 'l' ? true : false,
      's-background-scale': device === 's' ? true : false,
    }">
    </v-sheet>
    <v-sheet class="overlay"></v-sheet>
    <p class="text-h3 font-weight-bold text-center page-title">
      Singapore Humanities Research Olympiad
    </p>
  </div>

  <v-sheet class="text-center text-wrap my-16">
    <p class="mx-auto text-h4 mb-16">Apply now to SHRO and secure a 6 month research project under prominent researchers</p>
    <v-btn class="mx-auto" height="80" width="200" rounded="0" @click="openTab("https://qr.codes/VK1RUs")">REGISTER NOW!<v-btn/>
  </v-sheet>
</template>

<script>
import { useBaseFetch } from "~/composables/useBaseFetch";

export default {
  props: { device: String },
};
</script>

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

  background-image: url("/public/background/shro.png");
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

.underlined {
  text-decoration: underline;
}

.l-background-scale {
  background-size: 100% 200%;
}

.s-background-scale {
  background-position: center center;
  background-size: 100% 140%;
}
</style>