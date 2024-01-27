<template>
  <!-- Manuscript Submission Instructions -->
  <v-sheet class="background" width="100%" height="auto">
    <div style="color: white; backdrop-filter: blur(12px)" class="flex-column">
      <p class="pa-16 text-h3 text-center font-weight-bold">
        Submit Your Manuscript
      </p>
      <p class="text-h5 my-4" style="position: relative; left: 10%">
        Manuscript Requirements:
      </p>
      <div v-for="req in reqs" class="d-flex mx-10">
        <div style="position: relative; left: 10%" class="my-3 text-wrap">
          <v-icon style="display: inline" class="mr-2">mdi-play</v-icon>
          <p style="display: inline" class="text-h5 text-wrap">
            {{ req }}
          </p>
        </div>
      </div>
      <!-- <v-container>
        <v-row >
          
        </v-row>
      </v-container> -->
      <p class="text-h5 pt-8 pb-16" style="position: relative; left: 10%">
        Email your completed manuscript to askscienceblog@gmail.com
      </p>
    </div>
  </v-sheet>

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
              iconTag: "@askscienceblog",
              href: "https://www.instagram.com/",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.background {
  width: auto;
  height: 500px;

  background-image: url("/public/imgs/background/samples-blue.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
