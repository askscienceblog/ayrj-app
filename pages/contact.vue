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
    <p class="text-h3 font-weight-bold page-title">Contact Us</p>
  </div>

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
      ><p class="text-h4 pb-8">Have a question?</p>
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

  background-image: url("/public/background/samples-orange.jpg");
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

.l-background-scale {
  background-size: 100% 200%;
}
.s-background-scale {
  background-position: center center;
  background-size: 100% 120%;
}

.s-form {
  padding-inline: 50px;
}

.l-form {
  width: 500px;
}
</style>
