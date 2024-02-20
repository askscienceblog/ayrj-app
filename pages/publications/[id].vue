<template>
  <v-container v-show="pageExists && loaded" fluid>
    <v-row class="text-center">
      <p class="font-weight-bold text-h3 px-10 pt-16 pb-5 mx-auto">
        {{ article.title }}
      </p>
    </v-row>
    <v-row>
      <p class="text-center mx-auto mb-5">
        {{ article.authors }}
      </p>
    </v-row>

    <v-row>
      <v-btn class="mx-auto mb-12 mt-3" color="black" @click="reqDownload">
        Download full article
        <v-icon class="ml-2">mdi-download</v-icon>
      </v-btn>
    </v-row>
    <v-row>
      <v-card width="1200" class="mx-auto my-10 px-10" variant="text">
        <p class="text-h5 my-2">Abstract</p>
        <v-divider horizontal></v-divider>
        <p class="text-wrap mt-3">{{ article.abstract }}</p>
      </v-card>
    </v-row>
    <v-row>
      <v-card width="1200" class="mx-auto my-10 px-10" variant="text">
        <p class="text-h5 my-2">Bibliography</p>
        <v-divider horizontal></v-divider>
        <div v-for="src in article.biblio">
          <p class="my-4">{{ src.id + ".   " + src.name }}</p>
        </div>
      </v-card>
    </v-row>
  </v-container>

  <div v-show="!pageExists && loaded">
    <NotFound></NotFound>
  </div>
</template>

<script>
import NotFound from "/components/NotFound.vue";
export default {
  components: { NotFound },
  methods: {
    async reqPaper() {
      const article = await useBaseFetch("/list/published", {
        method: "GET",
        query: {
          length: 1,
          start_at_id: this.$route.params.id,
          content_match_quality_limit: 1,
        },
      });

      if (toRaw(article.data.value)[0].id === this.$route.params.id) {
        this.pageExists = true;
        this.article = toRaw(article.data.value)[0];
        this.article["authors"] = this.article.authors.join(", ");
        this.loaded = true;
      } else {
        this.pageExists = false;
        this.loaded = true;
      }
    },

    async reqDownload() {
      const download = await useBaseFetch("/get/published", {
        method: "GET",
        query: {
          id: this.$route.params.id,
          paper_type: "published",
        },
      });

      const link = document.createElement("a");
      const href = URL.createObjectURL(download.data.value);
      link.href = href;
      link.target = "_blank";
      link.click();
      URL.revokeObjectURL(href);
    },
  },

  data() {
    return {
      loaded: false,
      article: {},
    };
  },
  computed: {},

  mounted() {
    setTimeout(this.reqPaper, 1);
  },
};
</script>
