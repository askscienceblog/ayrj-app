<template>
  <!-- Section Title -->
  <v-sheet class="text-center background" width="100%">
    <div
      style="
        color: white;
        backdrop-filter: blur(8px);
        position: relative;
        top: 14%;
      "
    >
      <v-card variant="text" max-width="1000" class="mx-auto">
        <p class="text-h3 text-wrap font-weight-bold mt-16">
          Asean Young Researchers' Journal
        </p>
        <p class="text-h6 my-6">
          Be empowered to contribute to science! Submit your manuscripts here
          and have them published in Asean's only Young Scientist Journal. No
          prior publications required.
        </p>
        <v-btn
          class="display-inline mt-5"
          height="80"
          rounded="0"
          variant="outlined"
          >PUBLISH WITH US</v-btn
        >
        <v-btn class="display-inline mt-5" height="80" rounded="0"
          >READ PUBLICATIONS</v-btn
        >
      </v-card>
    </div>
  </v-sheet>

  <!-- Ad #1 -->
  <!-- Carousel -->
  <v-carousel hide-delimiter-background show-arrows="hover">
    <v-carousel-item>
      <v-sheet
        color="#00000000"
        class="my-16 px-3 d-flex flex-row flex-wrap align-content-center"
      >
        <div class="mx-auto">
          <v-btn
            v-for="highlight in highlights"
            width="300"
            height="300"
            class="mx-2"
            rounded="0"
            color="#6fa2a6"
          >
            <p class="text-h5 text-wrap">{{ highlight.title }}</p>
          </v-btn>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

  <!-- Message -->
  <v-sheet height="500" width="100%" class="">
    <v-container>
      <v-row> </v-row>
      <v-row>
        <v-col>
          <p class="text-h4 mt-16 font-weight-bold">
            A Journal by Young Scientists for Young Scientists
          </p>
        </v-col>
        <v-col>
          <p class="text-wrap text-h6 mt-16">
            Starting out in research can be daunting, one feels like a small
            fish in a big pond. We hope that this journal will help make the
            pond smaller, make research exposure more accessiblte to all.
          </p>
          <p class="text-wrap text-h6 my-8">
            We hope to see your manuscript soon.
          </p>
          <v-btn
            class="mt-10 px-12"
            height="50"
            variant="outlined"
            rounded="0"
            color="#52787b"
          >
            SUBMIT YOUR MANUSCRIPT
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>

  <!-- Ad #2 -->
  <v-sheet
    width="100%"
    height="500"
    color="#52787b"
    style="opacity: 0.7"
    class="text-center"
  >
    <v-card variant="text" max-width="500" class="mx-auto pt-16">
      <p class="text-h4 text-wrap font-weight-bold mt-16">
        Calling Citizen Scientists
      </p>
      <p class="my-6">
        If you have a passion for science and love to answer questions, why not
        volunteer with us to spread knowledge and fight disinformation.
        Volunteers of all walks of life welcome!
      </p>
      <v-btn class="mt-5 px-10" height="50" rounded="0" variant="outlined">
        CONTACT
      </v-btn>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      highlights: [
        { title: "Mycobacterium and phages", href: "" },
        { title: "Novel wastewater treatment", href: "" },
        { title: "Genetic editing to better mushroom", href: "" },
      ],
    };
  },
};
</script>

<style scoped>
.background {
  width: auto;
  height: 500px;

  background-image: url("/public/imgs/background/petridish.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
