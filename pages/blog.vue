<template>
  <div style="position: relative; text-align: center; color: white">
    <v-sheet class="background"> </v-sheet>
    <v-sheet class="overlay"></v-sheet>
    <p class="text-h3 font-weight-bold page-title">Experiment Blogs</p>
  </div>

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

  background-image: url("/public/imgs/background/samples-orange.jpg");
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
</style>
