<template>
  <div>
    <div>
      <v-btn @click="prevPage" variant="text" style="display: inline">
        <v-icon>mdi-arrow-left-thick</v-icon>
      </v-btn>
      <p style="display: inline">{{ ` ${page} / ${numPages} ` }}</p>
      <v-btn @click="nextPage" variant="text" style="display: inline">
        <v-icon>mdi-arrow-right-thick</v-icon>
      </v-btn>
    </div>

    <canvas ref="pdfCanvas" style="border: solid" class="my-5"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    width: String,
    src: String,
  },
  data() {
    return {
      scale: 2,

      pdf: undefined,
      numPages: undefined,
      page: 1,
    };
  },
  watch: {
    page() {
      this.loadPage();
    },
  },

  mounted() {
    this.fetchPDF();
    console.log(this.width);
  },

  methods: {
    nextPage() {
      if (this.page == this.numPages) {
        this.page = 1;
      } else {
        this.page++;
      }
    },
    prevPage() {
      if (this.page === 1) {
        this.page = this.numPages;
      } else {
        this.page--;
      }
    },
    async loadPage() {
      const page = await toRaw(this.pdf).getPage(this.page);

      const viewport = page.getViewport({ scale: 5 });

      // Prepare canvas using PDF page dimensions
      const canvas = this.$refs.pdfCanvas;
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      canvas.style.width = `${this.width * 0.8}px`;
      canvas.style.height = `${
        ((this.width * 0.8) / viewport.width) * viewport.height
      }px`;
      // Render PDF page into canvas context
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      await page.render(renderContext).promise;
    },

    async fetchPDF() {
      const pdfjsLib = window["pdfjsLib"];

      // Load a PDF document
      const loadingTask = pdfjsLib.getDocument(this.src);

      const pdf = await loadingTask.promise;

      this.numPages = pdf.numPages;
      this.pdf = pdf;

      this.loadPage();
    },
  },
};
</script>
