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
    <p class="text-h4 font-weight-bold text-center page-title">
      Science and Humanities Research Olympiad
    </p>
  </div>

  <v-sheet class="text-center text-wrap my-16">
    <p class="mx-10 text-h5 font-weight-bold">
      Apply now to SHRO and secure a 6 month research project under prominent
      researchers
    </p>

    <p class="py-15 text-h5 font-weight-bold mx-10">
      Look out for our exciting program ahead!
    </p>

    <p class="mx-10 text-h5 font-weight-bold">
      Sign up as one or up to group of three with friends from ANY pre-U
      institution (secondary school/polytechnic/junior college)
    </p>

    <v-btn
      class="mt-16 font-weight-bold"
      height="80"
      width="200"
      rounded="0"
      @click="
        openTab(
          'https://docs.google.com/forms/d/1MbhSxP-q0qzZFRYJHrawekJs869mTGhABaeseajtYig/viewform?pli=1&pli=1&pli=1&chromeless=1&pli=1&fbclid=PAZXh0bgNhZW0CMTEAAab8v1npv6pn3saUiybjDmq5fmYSm5f7fqJw38_ykRg8bbKE9LqToay1qg8_aem_PBKIJeVWoK9o1ZIVA9_NVw&edit_requested=true&edit_requested=true#response=ACYDBNhpZFzvjAjCthRd9j2nmyZWucf-8Cl5ayTemWvJzy0Z-a7cCLWc9l0GiHKBL9RGL3M '
        )
      "
      >REGISTER NOW!</v-btn
    >
  </v-sheet>

  <v-sheet class="text-center py-10">
    <v-timeline
      align="start"
      line-thickness="3"
      line-color="black"
      class="mx-auto"
      style="width: 100%"
    >
      <v-timeline-item>
        <div class="text-left py-8">
          <div class="text-h5 font-weight-bold">12 March</div>
          <div
            class="text-h6"
            :class="{ 'l-timeline-textbox': true ? device == 'l' : false }"
          >
            Opening of registration of SHRO 2025
          </div>
        </div>
      </v-timeline-item>

      <v-timeline-item>
        <div
          class="mx-right text-right py-8 ml-auto"
          :class="{ 'l-timeline-textbox': true ? device == 'l' : false }"
        >
          <div class="text-h5 font-weight-bold">April</div>
          <div class="text-h6">Virtual interview and shortlisting</div>
        </div>
      </v-timeline-item>

      <v-timeline-item>
        <div
          class="mx-right py-8 text-left"
          :class="{ 'l-timeline-textbox': true ? device == 'l' : false }"
        >
          <div class="text-h5 font-weight-bold">18 April</div>
          <div class="text-h6">Registration Closed</div>
        </div>
      </v-timeline-item>

      <v-timeline-item>
        <div
          class="text-right py-8 ml-auto"
          :class="{ 'l-timeline-textbox': true ? device === 'l' : false }"
        >
          <div class="text-h5 font-weight-bold">31 May</div>
          <div class="text-h6">
            In-person project pitch for shortlisted candidates
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item>
        <div
          class="py-8 text-left"
          :class="{ 'l-timeline-textbox': true ? device === 'l' : false }"
        >
          <div class="text-h5 font-weight-bold">June</div>
          <div class="text-h6">Commencement and Mentorship</div>
        </div>
      </v-timeline-item>
      <v-timeline-item>
        <div
          class="text-right py-8 mr-auto"
          :class="{ 'l-timeline-textbox': true ? device === 'l' : false }"
        >
          <div class="text-h5 font-weight-bold">Oct/Nov</div>
          <div class="text-h6">Stand down for end of year examinations</div>
        </div>
      </v-timeline-item>
      <v-timeline-item>
        <div
          class="text-left py-8"
          :class="{ 'l-timeline-textbox': true ? device === 'l' : false }"
        >
          <div class="text-h5 font-weight-bold">Dec/Jan</div>
          <p class="text-h6">
            Resume research project. Submission of project findings and prize
            presentations
          </p>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-sheet>
</template>

<script>
export default {
  props: { device: String },
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
  height: 400px;

  background-image: url("/public/background/shro-logo.png");
  background-repeat: no-repeat;
  background-size: 100%;
  transition: background-size 4s ease;
  background-position: center center;
}

.l-timeline-textbox {
  width: 300px;
}

.overlay {
  position: absolute;
  top: 0%;
  z-index: 0;

  height: 400px;
  width: 100%;

  background-color: black;
  opacity: 0.5;
}

.underlined {
  text-decoration: underline;
}

.l-background-scale {
  background-size: auto 100%;
}

.s-background-scale {
  background-size: auto 100%;
}
</style>
