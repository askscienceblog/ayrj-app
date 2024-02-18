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
    <p class="text-h3 font-weight-bold page-title">Publications</p>
  </div>

  <div class="text-center mt-16">
    <v-text-field
      style="display: inline-table; width: 60%"
      label="Search Publications by Article Name"
      hide-details="auto"
      variant="outlined"
      v-model="userSearchContent"
      @input="search"
    ></v-text-field>

    <v-select
      style="display: inline-table; width: 20%"
      label="Categories"
      variant="outlined"
      :items="articleCategories"
      v-model="userSelectedCategory"
      multiple
      chips
    >
    </v-select>
  </div>
  <v-sheet
    class="mx-auto mb-10"
    width="80%"
    v-if="showFeatured"
    style="position: relative"
  >
    <p class="text-h5 mt-3 mb-8 font-weight-bold">Featured articles</p>
    <v-divider class="border-opacity-100" thickness="3"></v-divider>
  </v-sheet>

  <div v-if="showFeatured && device === 's'">
    <v-sheet v-for="(article, index) in featured">
      <div class="my-16">
        <v-card class="s-featured-card" variant="flat" style="">
          <p class="text-wrap text-h5 font-weight-bold">
            {{ article.title }}
          </p>
          <p class="text-wrap text-justify text-subtitle-1 my-5">
            {{ article.subtitle }}
          </p>
          <v-btn
            variant="elevated"
            color="black"
            :to="`/publications/${article.id}`"
          >
            Read More!
          </v-btn>
        </v-card>

        <img
          class="s-featured-image"
          :src="article.img"
          style="display: inline-block"
        />

        <v-divider
          width="80%"
          class="mx-auto my-10 border-opacity-100"
        ></v-divider>
      </div>
    </v-sheet>
  </div>

  <div v-if="showFeatured && device == 'l'">
    <v-container>
      <v-row v-for="(article, index) in featured">
        <v-col>
          <v-card variant="flat" style="">
            <p class="text-wrap text-h4 font-weight-medium">
              {{ article.title }}
            </p>
            <p class="text-wrap text-subtitle-1 my-5">
              {{ article.subtitle }}
            </p>
            <v-btn
              variant="elevated"
              color="black"
              :to="`/publications/${article.id}`"
            >
              Read More!
            </v-btn>
          </v-card>
        </v-col>

        <v-col>
          <img class="s-featured-image" :src="article.img" />
        </v-col>

        <v-divider
          width="80%"
          class="mx-auto my-16 border-opacity-100"
        ></v-divider>
      </v-row>
    </v-container>
  </div>
  <ProjectsTable
    v-if="!showFeatured"
    :projects="content"
    :articleSection="tableHeaderString"
  ></ProjectsTable>
</template>

<script>
import { useAttrs } from "vue";
import ProjectsTable from "../components/ProjectsTable.vue";

export default {
  methods: {
    isOdd(index) {
      if (index % 2 === 0) {
        return false;
      } else {
        return true;
      }
    },
    async search() {
      const reqContent = await useBaseFetch("/list/published", {
        method: "GET",
        query: {
          length: 5,
          contains_content: this.userSearchContent,
          content_match_quality_limit: 0.2,
        },
      });
      if (this.userSearchContent) {
        this.content = toRaw(reqContent.data.value);
        console.log(this.content);
        this.showFeatured = false;
      } else {
        this.showFeatured = true;
      }
    },
  },

  computed: {
    tableHeaderString() {
      return `Search Results for \"${this.userSearchContent}\"`;
    },
    device() {
      return useAttrs().device;
    },
    width() {
      console.log(useAttrs().width);
      return useAttrs().width;
    },
  },
  data() {
    return {
      showFeatured: true,
      articleCategories: [
        { title: "Biology", value: "Biology" },
        { title: "Chemistry", value: "Chemistry" },
        { title: "Physics", value: "Physics" },
        { title: "Mathematics", value: "Mathematics" },
        { title: "Computing", value: "Computing" },
        { title: "Engineering", value: "Engineering" },
      ],
      // User Inputs
      userSearchContent: null,
      userSelectedCategory: null,

      // Dynamic Content
      content: [],

      featured: [
        {
          section: "Biology",
          title:
            "Doctor bartender: phage cocktails to treat multi-drug resistant Mycobacterium abscessus",
          subtitle:
            "M. abscessus is a rising global clinical issue due to their inherent ability to gain resistance to antibiotics and thus difficult in treating patients, it is also pervasive in the environment, making human-pathogen contact a frequent occurrence. This study uses phages (bacteria infecting viruses) to treat these infections.",
          img: "/featured/phage.jpeg",
          id: "123",
        },
        {
          section: "Biology",
          title:
            "Doctor bartender: phage cocktails to treat multi-drug resistant Mycobacterium abscessus",
          subtitle:
            "M. abscessus is a rising global clinical issue due to their inherent ability to gain resistance to antibiotics and thus difficult in treating patients, it is also pervasive in the environment, making human-pathogen contact a frequent occurrence. This study uses phages (bacteria infecting viruses) to treat these infections.",
          img: "/featured/phage.jpeg",
          id: "123",
        },
      ],
    };
  },
  components: {
    ProjectsTable,
  },
};
</script>

<style scoped>
.s-featured-image {
  max-width: 320px;

  position: relative;
  left: 50%;
  transform: translate(-50%);
}

.s-featured-card {
  width: 80%;

  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 50px;
}
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
</style>
