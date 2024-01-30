<template>
  <!-- Manuscript Submission Instructions -->
  <div class="">
    <v-sheet
      ref="sectionBackground"
      class="background"
      :class="{
        'l-background-scale': device === 'l',
        's-background-scale': device === 's',
      }"
    >
      <v-sheet
        class="overlay"
        :class="{
          'l-overlay': device === 'l',
          's-overlay': device === 's',
        }"
      ></v-sheet>
      <div class="flex-column page-title">
        <p class="pa-16 text-h3 text-center font-weight-bold">
          Submit Your Manuscript
        </p>
        <p class="text-h5 my-4 page-subtitle">Manuscript Requirements:</p>
        <div v-for="req in reqs" class="d-flex mx-10">
          <div class="my-3 text-wrap page-subtitle">
            <v-icon style="display: inline" class="mr-2">mdi-play</v-icon>
            <p style="display: inline" class="text-h5 text-wrap">
              {{ req }}
            </p>
          </div>
        </div>
        <p
          class="text-h5 pt-8 pb-16 text-wrap"
          :class="{
            'text-center': device === 's',
            'page-subtitle': device === 'l',
          }"
        >
          Email your completed manuscript to askscienceblog@gmail.com
        </p>
      </div>
    </v-sheet>
  </div>

  <!-- Question -->
  <v-sheet class="my-16">
    <v-container>
      <v-row>
        <p class="text-h4 pa-5">Have a question?</p>
      </v-row>
      <v-row>
        <v-col>
          <v-form>
            <v-text-field
              variant="outlined"
              label="Name"
              :rules="rules"
            ></v-text-field>
            <v-text-field
              variant="outlined"
              label="Phone Number"
              :rules="rules"
            ></v-text-field>
            <v-text-field
              variant="outlined"
              label="Email"
              :rules="rules"
            ></v-text-field>
            <v-textarea
              variant="outlined"
              label="Message"
              :rules="rules"
            ></v-textarea>
            <v-btn
              type="submit"
              variant="outlined"
              class="px-10"
              density="default"
              height="50"
            >
              Submit
            </v-btn>
          </v-form>
        </v-col>

        <!-- Channels -->
        <v-col>
          <p class="text-center text-h4">Get in Touch</p>
          <div v-for="channel in channels" class="my-10 text-center">
            <p class="text-h5 mb-3">{{ channel.name }}</p>

            <v-sheet class="mx-auto" v-for="content in channel.contents">
              <v-btn variant="text" :href="content.href">
                <v-icon class="pa-5">{{ content.icon }}</v-icon>
                <p>{{ content.iconTag }}</p>
              </v-btn>
            </v-sheet>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  computed: {
    device() {
      return useAttrs().device;
    },
  },
  data() {
    return {
      reqs: [
        "Font must be in Times New Roman 12",
        "Single Line Spacing",
        "Justified Alignment",
        "1-inch margins",
        "Abstract with 250 word limit is required",
        "Include full name, country and institution of the authors",
        "All materials must be submitted in Microsoft Word Document",
      ],
      rules: [
        (value) => {
          if (value) return true;

          return "";
        },
      ],
      channels: [
        {
          name: "Email",
          contents: [
            {
              icon: "mdi-email",
              iconTag: "askscienceblog@gmail.com",
              href: "https://www.google.com/gmail",
            },
          ],
        },
        {
          name: "Social Media",
          contents: [
            {
              icon: "mdi-linkedin",
              iconTag: "LinkedIn",
              href: "https://www.linkedin.com/",
            },
            {
              icon: "mdi-instagram",
              iconTag: "@asean.youthresearchjournal",
              href: "https://www.instagram.com/asean.youngresearchersjournal?igsh=ZXlzaDR3OXQzM2xj",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.page-subtitle {
  position: relative;
  left: 10%;
}
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

  background-image: url("/public/imgs/background/samples-blue.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  transition: background-size 4s ease;
  background-position: center center;
}

.overlay {
  position: absolute;
  top: 0%;
  z-index: 0;

  background-color: black;
  opacity: 0.5;
}

.s-overlay {
  width: 100%;
  height: 1130px;
}

.l-overlay {
  width: 100%;
  height: 930px;
}

.s-background-scale {
  width: 100%;
  height: 1000px;

  background-size: auto 100%;
  background-position: center center;
}

.l-background-scale {
  width: 100%;
  height: 800px;

  background-size: 100% 120%;
}
</style>
