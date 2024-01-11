<template>
  <!-- Manuscript Submission Instructions -->
  <v-sheet color="#52787b" style="opacity: 0.7" width="100%" height="auto">
    <p class="pa-16 text-h3 text-center font-weight-bold" style="color: white">
      Submit Your Manuscript
    </p>
    <p class="text-h5" style="margin-left: 300px">Manuscript Requirements:</p>
    <v-container>
      <v-row v-for="req in reqs">
        <v-chip
          style="margin-left: 155px; color: white"
          class="my-2"
          variant="text"
        >
          <v-icon class="pa-4">mdi-play</v-icon>
          <p class="text-h5">{{ req }}</p>
        </v-chip>
      </v-row>
    </v-container>
    <p class="text-h5 pt-6 pb-16" style="margin-left: 300px">
      Email your completed manuscript to askscienceblog@gmail.com
    </p>
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
