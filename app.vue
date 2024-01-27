<template>
  <v-app>
    <page-header :device="device"></page-header>
    <v-main>
      <NuxtPage></NuxtPage>
    </v-main>
    <page-footer :device="device"></page-footer>
  </v-app>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";

export default {
  data() {
    return {
      windowWidth: 2000,
    };
  },

  computed: {
    device() {
      console.log(this.windowWidth);
      if (1100 >= this.windowWidth > 0) {
        return "s";
      } else {
        return "l";
      }
    },
  },

  mounted() {
    window.addEventListener("resize", this.resizeEvent);
    this.windowWidth = window.innerWidth;
  },
  unmounted() {
    window.removeEventListener("resize", this.resizeEvent);
  },
  methods: {
    resizeEvent() {
      this.windowWidth = window.innerWidth;
    },
  },

  components: {
    PageHeader,
    PageFooter,
  },
};
</script>
