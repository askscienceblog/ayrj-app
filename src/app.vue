<template>
  <v-app>
    <page-header v-if="render" :device="device"></page-header>
    <v-main>
      <NuxtPage v-if="render" :device="device" :width="width"></NuxtPage>
    </v-main>
    <page-footer v-if="render" :device="device"></page-footer>
  </v-app>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";

export default {
  data() {
    return {
      render: false,
    };
  },
  methods: {
    findDevice(width) {
      if (1400 >= width > 0) {
        return "s";
      } else {
        return "l";
      }
    },

    resizeEvent() {
      this.render = false;
      this.device = this.findDevice(window.outerWidth);
      this.width = window.outerWidth;
      this.render = true;
    },
  },

  beforeMount() {
    const findDevice = function (width) {
      if (1100 >= width > 0) {
        return "s";
      } else {
        return "l";
      }
    };
    this.device = findDevice(window.outerWidth);
    this.width = window.outerWidth;
    this.render = true;
  },

  mounted() {
    window.addEventListener("resize", this.resizeEvent);
  },

  unmounted() {
    window.removeEventListener("resize", this.resize);
  },

  components: {
    PageHeader,
    PageFooter,
  },
};
</script>
