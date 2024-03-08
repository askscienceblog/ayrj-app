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

  <div class="text-center mt-16 mb-10">
    <v-text-field
      style="display: inline-table"
      :class="{
        's-field': device === 's' ? true : false,
        'l-field': device === 's' ? false : true,
      }"
      label="Search Publications by Article Name"
      hide-details="auto"
      variant="outlined"
      v-model="userSearchContent"
      @input="searchName()"
    ></v-text-field>

    <v-select
      style="display: inline-table"
      :class="{
        's-select': device === 's' ? true : false,
        'l-select': device === 's' ? false : true,
      }"
      label="Categories"
      variant="outlined"
      :items="articleCategories"
      v-model="userSelectedCategory"
    >
    </v-select>
  </div>
  <v-sheet
    class="mx-auto mb-10"
    :width="`${device === 'l' ? '80%' : '90%'}`"
    v-if="showFeatured"
  >
    <p class="text-h5 mt-3 mb-7 font-weight-bold">Featured articles</p>
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
            {{ article.abstract }}
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
          src="/featured/phage.jpeg"
          style="display: inline-block"
        />

        <v-divider
          width="90%"
          class="mx-auto mt-16 border-opacity-100"
        ></v-divider>
      </div>
    </v-sheet>
  </div>

  <div v-if="showFeatured && device == 'l'">
    <v-container>
      <v-row v-for="(article, index) in featured">
        <v-col>
          <v-card variant="flat" class="l-featured-card">
            <p class="text-wrap text-h4 font-weight-medium">
              {{ article.title }}
            </p>
            <p class="text-wrap text-subtitle-1 my-5">
              {{ article.abstract }}
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
          <img class="l-featured-image" src="/featured/phage.jpeg" />
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
    :device="device"
  ></ProjectsTable>
</template>

<script>
import ProjectsTable from "../components/ProjectsTable.vue";

export default {
  props: {
    device: String,
    width: Number,
  },
  watch: {
    userSelectedCategory(newValue, oldValue) {
      this.searchCategory(newValue);
    },
  },

  methods: {
    isOdd(index) {
      if (index % 2 === 0) {
        return false;
      } else {
        return true;
      }
    },
    async searchName() {
      // console.log(category);
      const reqContent = await useBaseFetch("/list/published", {
        method: "GET",
        query: {
          length: 5,
          contains: this.userSearchContent,
          quality_limit: 100,
        },
      });
      if (this.userSearchContent) {
        this.content = toRaw(reqContent.data.value);
        // console.log(this.content);
        this.showFeatured = false;
      } else {
        this.showFeatured = true;
      }
    },
    async searchCategory(category) {
      const reqContent = await useBaseFetch("/list/published", {
        method: "GET",
        query: {
          length: 5,
          quality_limit: 100,
          category: category,
        },
      });

      if (this.userSelectedCategory) {
        this.content = toRaw(reqContent.data.value);
        this.showFeatured = false;
      } else {
        this.showFeatured = true;
      }
    },
    async reqFeatured() {
      const reqFeatured = await useBaseFetch("/features", {
        method: "GET",
      });
      const featured = toRaw(reqFeatured.data.value);
      this.featured = featured;
    },
  },

  computed: {
    tableHeaderString() {
      if (this.userSearchContent) {
        return `Search Results for \"${this.userSearchContent}\"`;
      } else {
        return `Search Results for ${this.userSelectedCategory}`;
      }
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

      featured: [],
    };
  },

  mounted() {
    setTimeout(this.reqFeatured, 1);
  },
  components: {
    ProjectsTable,
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

.s-featured-image {
  max-width: 320px;

  position: relative;
  left: 50%;
  transform: translate(-50%);
}

.l-featured-image {
  max-width: 400px;

  position: relative;
  top: 30%;
  left: 20%;
}

.l-background-scale {
  background-size: 100% 100%;
}

.s-background-scale {
  background-position: center center;
  background-size: auto 100%;
}

.s-featured-card {
  width: 90%;

  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 50px;
}

.l-featured-card {
  width: 100%;
}

.s-field {
  width: 65%;
}

.s-select {
  width: 25%;
}

.l-field {
  width: 60%;
}

.l-select {
  width: 20%;
}
</style>
