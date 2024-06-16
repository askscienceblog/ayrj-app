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
    <p class="text-h3 font-weight-bold page-title">Comics</p>
  </div>

  <div class="flexbox">
    <p class="text-h4 my-10 font-weight-bold">View and Download our Comics</p>
    <v-select
      style="flex: 50%"
      label="Volume"
      variant="outlined"
      :items="comicsTitles"
      v-model="selectedComicTitle"
    ></v-select>
    <!-- <embed
      :class="{ display: showComic }"
      v-if="device === 'l' && showComic"
      :src="selectedComic?.path"
      height="800"
    />
    <embed />
    <v-btn variant="outlined"></v-btn> -->
    <pdfdocument
      :class="{ display: showComic }"
      v-if="showComic"
      :src="selectedComic?.path"
      :width="width"
      :key="selectedComic.title"
    ></pdfdocument>
  </div>
</template>

<script>
import pdfdocument from "../components/PDF/PDFDocument.vue";

export default {
  props: {
    width: Number,
    device: String,
  },
  components: {
    pdfdocument,
  },
  data() {
    return {
      comics: [
        { title: "Comics Vol.1", path: "/comics/vol1.pdf" },
        { title: "Comics Vol.2", path: "/comics/vol2.pdf" },
        { title: "Comics Vol.3", path: "/comics/vol3.pdf" },
        { title: "Comics Vol.4", path: "/comics/vol4.pdf" },
        { title: "Comics Vol.5", path: "/comics/vol5.pdf" },
      ],
      selectedComicTitle: null,
      showComic: false,
      selectedComic: null,
    };
  },
  watch: {
    selectedComicTitle() {
      if (this.selectedComicTitle) {
        this.showComic = false;
        console.log(this.selectedComicTitle);
        this.selectedComic = this.comics.find((comic) => {
          return comic.title === this.selectedComicTitle;
        });
        this.showComic = true;
      }
    },
  },
  computed: {
    comicsTitles() {
      return this.comics.map((comic) => {
        return comic.title;
      });
    },
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}

.flexbox {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  text-align: center;
}

.background {
  z-index: 0;

  width: 100%;
  height: 300px;

  background-image: url("/public/background/incubator.jpg");
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
  background-size: 100% 100%;
}

.s-background-scale {
  background-position: center center;
  background-size: auto 100%;
}

.page-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  color: white;
}
</style>
