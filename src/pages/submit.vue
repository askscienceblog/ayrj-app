<template>
  <div style="position: relative">
    <v-sheet
      class="background"
      :class="{
        'l-background-scale': device === 'l' ? true : false,
        's-background-scale': device === 's' ? true : false,
      }"
    >
    </v-sheet>
    <v-sheet class="overlay"></v-sheet>
    <p class="text-h3 font-weight-bold text-center page-title">
      Submit Your Manuscripts
    </p>
  </div>

  <v-sheet class="text-center my-16">
    <p class="mx-auto text-h4 mb-16">Manuscript Requirements</p>
    <v-divider
      class="border-opacity-100 mx-auto mb-10"
      thickness="3"
      :width="dividerWidth"
    ></v-divider>

    <div
      style="width: fit-content; padding-inline: 20px"
      class="mx-auto"
      width="fix-content"
    >
      <div v-for="req in reqs" class="my-5 text-wrap text-left" width="300px">
        <v-icon class="mr-2 mt-n2" style="display: inline-block"
          >mdi-play</v-icon
        >
        <p style="display: inline" class="text-h6 text-wrap">
          {{ req }}
        </p>
      </div>
    </div>

    <v-btn
      variant="outlined"
      width="200"
      height="80"
      style="background-color: black; color: white"
      class="mb-10 mt-4 mx-10"
      rounded="l"
      @click="reqTemplate"
      >Template
      <v-icon class="mx-1">mdi-download</v-icon>
    </v-btn>
    <v-btn
      variant="outlined"
      width="200"
      height="80"
      style="background-color: black; color: white"
      class="mb-10 mt-4 mx-10"
      rounded="l"
      @click="reqForm"
      >Form
      <v-icon class="mx-1">mdi-download</v-icon>
    </v-btn>
    <v-divider
      class="border-opacity-100 mx-auto"
      thickness="3"
      :width="dividerWidth"
    ></v-divider>

    <p class="text-h5 mt-16 mx-10 text-wrap font-weight-bold">
      Email your completed manuscript to askscienceblog@gmail.com
    </p>
  </v-sheet>
</template>

<script>
import { useBaseFetch } from "~/composables/useBaseFetch";

export default {
  props: { device: String },
  computed: {
    dividerWidth() {
      if (this.device === "s") {
        return "auto";
      } else {
        return "700";
      }
    },
  },
  methods: {
    async reqTemplate() {
      const download = await useBaseFetch("/get/template", {
        method: "GET",
        query: {
          id: 0,
        },
      });
      if (download.data.value) {
        const link = document.createElement("a");
        const href = URL.createObjectURL(download.data.value);
        link.href = href;
        link.download = "ayrj-template.docx";
        link.click();
        URL.revokeObjectURL(href);
      } else {
        alert("Template Unavailable");
      }
    },

    async reqForm() {
      const download = await useBaseFetch("/get/form", {
        method: "GET",
        query: {
          id: 0,
        },
      });
      if (download.data.value) {
        const link = document.createElement("a");
        const href = URL.createObjectURL(download.data.value);
        link.href = href;
        link.download = "ayrj-application-form.pdf";
        link.click();
        URL.revokeObjectURL(href);
      } else {
        alert("Template Unavailable");
      }
    },
  },
  data() {
    return {
      reqs: [
        "Font must be in Times New Roman 12",
        "Single Line Spacing",
        "Justified Alignment",
        "1-inch margins",
        "Abstract with 250 word limit is required",
        "Include full name, country and institution of the authors",
        "All materials must be submitted in Microsoft Word Document",
        "Agree to terms of publication outlined in application form",
      ],
    };
  },
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

  background-image: url("/public/background/samples-blue.jpg");
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

.l-background-scale {
  background-size: 100% 200%;
}
.s-background-scale {
  background-position: center center;
  background-size: 100% 140%;
}
</style>
