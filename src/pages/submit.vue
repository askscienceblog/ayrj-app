<template>
  <div style="position: relative">
    <v-sheet class="background" :class="{
      'l-background-scale': device === 'l' ? true : false,
      's-background-scale': device === 's' ? true : false,
    }">
    </v-sheet>
    <v-sheet class="overlay"></v-sheet>
    <p class="text-h3 font-weight-bold text-center page-title">
      Submit Your Manuscripts
    </p>
  </div>

  <v-sheet class="text-center my-16">
    <p class="mx-auto text-h4 mb-16">Manuscript Requirements</p>
    <v-divider class="border-opacity-100 mx-auto mb-10" thickness="3" :width="dividerWidth"></v-divider>

    <div style="width: fit-content; padding-inline: 20px" class="mx-auto" width="fix-content">
      <div class="my-5 text-wrap text-left" width="300px">
        <p style="padding: 10px" class="text-h6 text-wrap">
          All applicants should submit the following documents to <adress><a
              href="mailto:contact_us@ayrj.org">contact_us@ayrj.org</a>
          </adress>
        </p>
        <ul style="padding-left: 30px" class="text-h6 text-wrap">
          <li>Submit a signed copy of the
            Publication Agreement Form</li>
          <li>For participants in the Singapore Science and Engineering Fair (SSEF):</li>
          <ul style="padding-left: 30px">
            <li>SSEF Abstract</li>
            <li>SSEF Report</li>
          </ul>
          <li>For other applicants:</li>
          <ul style="padding-left: 30px">
            <li>Download the template below and format the manuscript accordingly</li>
          </ul>
        </ul>
      </div>
    </div>

    <div class="d-flex justify-center align-center flex-wrap">
      <v-btn variant="outlined" width="400" height="80" style="background-color: black; color: white" class="mb-10 mt-4"
        rounded="l" @click="reqTemplate">Manuscript Template
        <v-icon class="mx-1">mdi-download</v-icon>
      </v-btn>
      <v-btn variant="outlined" width="400" height="80" style="background-color: black; color: white" class="mb-10 mt-4"
        rounded="l" @click="reqForm">Publication Agreement Form
        <v-icon class="mx-1">mdi-download</v-icon>
      </v-btn>
    </div>

    <v-divider class="border-opacity-100 mx-auto" thickness="3" :width="dividerWidth"></v-divider>
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
        link.download = "template.docx";
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
        link.download = "application";
        link.click();
        URL.revokeObjectURL(href);
      } else {
        alert("Template Unavailable");
      }
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
