<template>
  <div style="position: relative; text-align: center; color: white">
    <v-sheet
      class="background"
      :class="{
        'l-background-scale': device === 'l' ? true : false,
        's-background-scale': device === 's' ? true : false,
      }"
      height="300"
      width="100%"
      style="filter: blur(4px); color: white"
    >
    </v-sheet>
    <p class="text-h3 font-weight-bold page-title">Publications</p>
  </div>

  <div class="text-center mt-16">
    <v-text-field
      style="display: inline-table; width: 60%"
      label="Search Publications by Name, UEN, Authors etc"
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

  <v-container v-if="showFeatured">
    <v-row>
      <v-sheet class="mx-auto mb-5" width="100%">
        <p class="text-h5 my-15 font-weight-bold">Featured articles</p>
        <v-sheet color="black" height="2" class="mt-n6"></v-sheet>
      </v-sheet>
    </v-row>

    <v-row>
      <v-sheet width="100%" class="my-16" v-for="(article, index) in featured">
        <v-container>
          <v-row>
            <v-col>
              <v-card v-if="!isOdd(index)" class="text-left" variant="flat">
                <p class="text-wrap text-h4 font-weight-medium">
                  {{ article.title }}
                </p>
                <p class="text-wrap text-subtitle-1 my-5">
                  {{ article.subtitle }}
                </p>
                <v-btn
                  variant="elevated"
                  color="black"
                  :to="`/articles/${article.id}`"
                >
                  Read More!
                </v-btn>
              </v-card>

              <v-sheet v-else width="100%" class="my-10 mx-10" height="100%"
                ><NuxtImg class="featured-image" :src="article.img"></NuxtImg>
              </v-sheet>
            </v-col>

            <v-col color="black">
              <v-sheet
                v-if="!isOdd(index)"
                width="100%"
                class="my-10 mx-10"
                height="100%"
                ><NuxtImg class="featured-image" :src="article.img"></NuxtImg>
              </v-sheet>

              <v-card v-else class="text-left span-a" variant="flat">
                <p class="text-wrap text-h4 font-weight-medium">
                  {{ article.title }}
                </p>
                <p class="text-wrap text-subtitle-1 my-5">
                  {{ article.subtitle }}
                </p>
                <v-btn
                  variant="elevated"
                  color="black"
                  :to="`/articles/${article.id}`"
                >
                  Read More!
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-row>
  </v-container>

  <ProjectsTable
    v-else
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
  },
  mounted() {
    console.log(useAttrs().device);
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
          img: "../public/imgs/featured/phage.jpeg",
          id: "123",
        },
        {
          section: "Biology",
          title:
            "Doctor bartender: phage cocktails to treat multi-drug resistant Mycobacterium abscessus",
          subtitle:
            "M. abscessus is a rising global clinical issue due to their inherent ability to gain resistance to antibiotics and thus difficult in treating patients, it is also pervasive in the environment, making human-pathogen contact a frequent occurrence. This study uses phages (bacteria infecting viruses) to treat these infections.",
          img: "../public/imgs/featured/phage.jpeg",
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
.featured-image {
  max-height: 500px;
  max-width: 500px;
}

.page-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: white;
}

.background {
  width: auto;
  height: 200px;

  background-image: url("/public/imgs/background/incubator.jpg");
  background-repeat: no-repeat;
}

.l-background-scale {
  background-size: 100% 100%;
}
.s-background-scale {
  background-position: center center;
  background-size: auto 100%;
}
</style>
