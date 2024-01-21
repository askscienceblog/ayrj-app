<template>
  <v-sheet
    class="text-center text-h3 page-title font-weight-bold background"
    height="300"
    width="100%"
  >
    Experiment Blog
  </v-sheet>

  <v-container>
    <v-row>
      <v-sheet class="mx-auto mb-5" width="100%">
        <p class="text-h5 my-15 font-weight-bold">Featured posts</p>
        <v-sheet color="black" height="2" class="mt-n6"></v-sheet>
      </v-sheet>
    </v-row>

    <v-row>
      <v-sheet width="100%" class="my-16" v-for="(article, index) in featured">
        <v-container>
          <v-row>
            <v-col>
              <v-card
                v-if="!isOdd(index)"
                class="text-left pa-16"
                variant="flat"
              >
                <p class="text-wrap text-h4 font-weight-medium">
                  {{ article.title }}
                </p>
                <p class="text-wrap text-subtitle-1 my-5">
                  {{ article.subtitle }}
                </p>
                <v-btn variant="elevated" color="black"> Read More! </v-btn>
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

              <v-card v-else class="text-left pa-16" variant="flat">
                <p class="text-wrap text-h4 font-weight-medium">
                  {{ article.title }}
                </p>
                <p class="text-wrap text-subtitle-1 my-5">
                  {{ article.subtitle }}
                </p>
                <v-btn variant="elevated" color="black"> Read More! </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    isOdd(index) {
      if (index % 2 === 0) {
        return false;
      } else {
        return true;
      }
    },
  },

  data() {
    return {
      featured: [
        {
          section: "Biology",
          title: "Coming soon...",
          subtitle: "Coming soon...",
          img: "../public/imgs/featured/phage.jpeg",
        },
        {
          section: "Biology",
          title: "Coming soon...",
          subtitle: "Coming soon...",
          img: "../public/imgs/featured/phage.jpeg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.featured-image {
  max-height: 500px;
  max-width: 500px;
}

.page-title {
  padding-top: 120px;
  color: white;
}

.background {
  width: auto;
  height: 200px;

  background-image: url("/public/imgs/background/incubator.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
