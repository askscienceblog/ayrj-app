<template>
  <!-- Section Title -->
  <v-sheet
    class="background text-center"
    :class="{
      'l-background-scale': device === 'l',
      's-background-scale': device === 's',
    }"
    style="position: relative"
  >
    <v-sheet class="overlay"></v-sheet>
    <div style="max-width: 1000px" class="page-title">
      <div class="mx-5">
        <p class="text-h3 text-wrap font-weight-bold">
          Asean Young Researchers' Journal
        </p>
        <p class="text-h6 mt-6">Based in Asia, open to the world.</p>
        <p class="text-h6">
          Be empowered to publish with ASEAN's first and only journal for youth
          scientists.
        </p>
        <p class="text-h6">No prior publications required.</p>
        <div style="display: inline">
          <v-btn
            class="mt-6"
            height="80"
            width="200"
            rounded="0"
            variant="outlined"
            href="/submit/"
            >PUBLISH WITH US</v-btn
          >
          <v-btn
            class="mt-6"
            height="80"
            width="200"
            rounded="0"
            href="/publications/"
            >READ PUBLICATIONS</v-btn
          >
        </div>
      </div>
    </div>
  </v-sheet>

  <div
    class="text-center"
    style="
      position: relative;
      top: 10%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin-top: 100px;
      margin-bottom: 150px;
      padding-inline: 30px;

      max-width: 1000px;
      height: auto;
    "
  >
    <p class="text-h4 font-weight-bold my-10">
      Science and Humanities Research Olympiad
    </p>
    <div style="max-width: 600px" class="mx-auto">
      <p class="text-wrap text-h6">
        Empowering Youth Through Scientific Engagement
      </p>
    </div>

    <v-btn
      class="mt-14 px-12"
      height="50"
      variant="outlined"
      rounded="0"
      color="#52787b"
      href="/shro"
    >
      COMING SOON...
    </v-btn>
  </div>

  <!-- Ad #2 -->
  <v-sheet
    width="100%"
    height="420"
    color="#52787b"
    style="opacity: 0.7"
    class="text-center"
  >
    <v-card variant="text" max-width="500" class="mx-auto px-12 py-16">
      <p class="text-h4 text-wrap font-weight-bold">
        Calling Citizen Scientists
      </p>
      <p class="my-6">
        We are on a quest to make science more equitable and share knowledge. If
        you love to share your passion for science and research, we welcome you
        to join us.
      </p>
      <v-btn
        class="mt-5 px-10"
        height="50"
        rounded="0"
        variant="outlined"
        href="/submit"
      >
        JOIN US NOW
      </v-btn>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  props: { device: String },
};
</script>

<style scoped>
.page-title {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  color: white;
}

.background {
  z-index: 0;

  width: 100%;
  height: 600px;

  background-image: url("/public/background/petridish.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  transition: background-size 4s ease;
  background-position: center center;
}

.overlay {
  position: absolute;
  top: 0%;
  z-index: 0;

  width: 100%;
  height: 600px;

  background-color: black;
  opacity: 0.5;
}

.l-background-scale {
  background-size: 100% 100%;
}

.s-background-scale {
  background-size: auto 100%;
}
</style>
