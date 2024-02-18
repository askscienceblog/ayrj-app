<template>
  <!-- Manuscript Submission Instructions -->
  <v-sheet
    ref="background"
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
    <div class="background-center">
      <p class="page-title text-h3 text-center font-weight-bold">
        Submit Your Manuscript
      </p>
      <div class="page-subtitle">
        <p class="text-h5 my-4">Manuscript Requirements:</p>
        <div v-for="req in reqs" class="d-flex mx-5">
          <div class="my-3 text-wrap">
            <v-icon class="mr-2 mt-n2" style="display: inline-block"
              >mdi-play</v-icon
            >
            <p style="display: inline" class="text-h5 text-wrap">
              {{ req }}
            </p>
          </div>
        </div>
      </div>

      <p
        class="text-h5 pt-8 pb-16 text-wrap"
        :class="{
          'text-center': device === 's',
          'page-subtitle': device === 'l',
        }"
        style="color: white; position: relative; z-index: 1"
      >
        Email your completed manuscript to askscienceblog@gmail.com
      </p>
    </div>
  </v-sheet>

  <!-- Questions Section -->
  <v-sheet
    class="text-center my-10"
    :class="{
      'd-flex': device === 'l',
      'align-center': device === 'l',
      'justify-center': device === 'l',
    }"
  >
    <v-sheet
      :class="{
        'mx-auto': device === 's',
        'mx-16': device === 'l',
        's-form': device === 's',
        'l-form': device === 'l',
      }"
      ><p class="text-h4 py-5">Have a question?</p>
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
          height="40"
        >
          Submit
        </v-btn>
      </v-form>
    </v-sheet>

    <!-- Channels -->
    <div class="my-16">
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
    </div>
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
.background-center {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.page-title {
  position: relative;
  padding-block: 50px;
  z-index: 1;

  color: white;
}
.page-subtitle {
  position: relative;
  z-index: 1;

  margin-inline: 10%;
  color: white;
}

.background {
  z-index: 0;

  background-image: url("/public/background/samples-blue.jpg");
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
  height: 1280px;
}

.l-overlay {
  width: 100%;
  height: 880px;
}

.s-background-scale {
  width: 100%;
  height: 1150px;

  background-size: auto 100%;
  background-position: center center;
}

.l-background-scale {
  width: 100%;
  height: 750px;

  background-size: 100% 120%;
}

.s-form {
  padding-inline: 50px;
}

.l-form {
  width: 500px;
}
</style>
