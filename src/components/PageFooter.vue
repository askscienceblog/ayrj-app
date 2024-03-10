<template>
  <!-- Website Publicity -->
  <v-sheet
    v-if="device === 'l'"
    color="#eeeeee"
    width="100%"
    height="auto"
    class="py-16"
  >
    <v-sheet
      color="#00000000"
      class="d-flex flex-wrap"
      style="position: relative; left: 5%"
    >
      <!-- Logo -->
      <img class="l-logo-image" src="/public/logo.png" />

      <v-divider vertical class="border-opacity-50"></v-divider>

      <!-- About Us -->
      <v-sheet
        height="auto"
        width="180"
        class="flex-item-center mx-5"
        color="#eeeeee"
      >
        <div v-for="page in pages" class="text-center">
          <v-btn variant="text">
            <a
              class="text-subtitle-2"
              :href="page.href"
              style="text-decoration: none"
              >{{ page.title }}</a
            >
          </v-btn>
        </div>
      </v-sheet>

      <v-divider vertical class="border-opacity-50"></v-divider>

      <!-- Form -->
      <v-sheet class="flex-item-center mx-5" color="#00000000">
        <p class="font-weight-bold ml-6">
          Join our newsletter. No spam. Just Knowledge.
        </p>

        <v-sheet min-width="380" class="my-6 ml-6" color="#00000000">
          <v-form>
            <v-text-field
              variant="outlined"
              :rules="nameRule"
              v-model="firstName"
              label="First Name"
            ></v-text-field>

            <v-text-field
              variant="outlined"
              :rules="emailRule"
              v-model="emailAddress"
              label="Email Address"
            ></v-text-field>

            <v-sheet width="100" class="mt-n1"
              ><v-btn
                type="submit"
                color="blue"
                block
                @click="formUnavailable()"
                >Submit</v-btn
              >
            </v-sheet>
          </v-form>
        </v-sheet>
      </v-sheet>
    </v-sheet>
  </v-sheet>

  <!-- "s" Devices -->

  <!-- About Us -->
  <v-sheet
    color="#eeeeee"
    width="100%"
    height="300"
    class="py-11"
    v-if="device === 's'"
  >
    <div v-for="page in pages" class="text-center">
      <v-btn variant="text">
        <a
          class="text-subtitle-2"
          :href="page.href"
          style="text-decoration: none"
          >{{ page.title }}</a
        >
      </v-btn>
    </div>
  </v-sheet>

  <v-divider
    horizontal
    class="border-opacity-100"
    v-if="device === 's'"
  ></v-divider>

  <!-- Form -->
  <v-sheet class="py-10" color="#eeeeee" v-if="device === 's'">
    <v-sheet
      class="text-center"
      style="
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      "
      color="#00000000"
      max-width="400px"
    >
      <p class="font-weight-bold ml-6 text-wrap">
        Join our newsletter. No spam. Just Knowledge.
      </p>

      <v-sheet width="300px" class="my-6 mx-auto" color="#00000000">
        <v-form>
          <v-text-field
            variant="outlined"
            :rules="nameRule"
            v-model="firstName"
            label="First Name"
            required
          ></v-text-field>

          <v-text-field
            variant="outlined"
            :rules="emailRule"
            v-model="emailAddress"
            label="Email Address"
            required
          ></v-text-field>

          <v-sheet width="100" class="mx-auto"
            ><v-btn type="submit" color="blue" block @click="formUnavailable()"
              >Submit</v-btn
            ></v-sheet
          >
        </v-form>
      </v-sheet>
    </v-sheet>
  </v-sheet>

  <!-- Website Footer -->
  <v-sheet width="100%" color="#000000" height="80px">
    <v-container variant="bg-surface-variant">
      <v-col class="text-left">
        <v-sheet color="white" height="1" width="100%" class="mb-2"> </v-sheet>

        <v-btn
          class="mx-1"
          density="compact"
          variant="text"
          icon="mdi-github"
          @click="pushLink('https://github.com/askscienceblog')"
        >
        </v-btn>

        <v-btn
          class="mx-1"
          density="compact"
          variant="text"
          icon="mdi-linkedin"
          @click="
            pushLink(
              'https://www.linkedin.com/company/aseanyouthresearchjournal'
            )
          "
        >
        </v-btn>

        <v-btn
          class="mx-1"
          density="compact"
          variant="text"
          icon="mdi-instagram"
          @click="
            pushLink(
              'https://www.instagram.com/asean.youngresearchersjournal?igsh=ZXlzaDR3OXQzM2xj'
            )
          "
        >
        </v-btn>

        <a class="px-2">Check out our socials</a>
      </v-col>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  props: { device: String },
  data() {
    return {
      firstName: null,
      emailAddress: null,

      pages: [
        { title: "Home", href: "/" },
        { title: "Publications", href: "/publications/" },
        { title: "Journals", href: "/journals" },
        { title: "Submit manuscripts", href: "/submit" },
        { title: "About AYRJ", href: "/about" },
        { title: "Contact Us", href: "/contact" },
      ],
      nameRule: [
        (value) => {
          if (value?.length <= 10) return true;
          console.log(value);
          return "Field info must be a string";
        },
      ],
      emailRule: [
        (value) => {
          if (/.+@.+\..+/.test(value)) return true;

          return "E-mail must be valid.";
        },
      ],
    };
  },
  methods: {
    pushLink(href) {
      const link = document.createElement("a");
      link.target = "_blank";
      link.href = href;
      link.click();
    },
    formUnavailable() {
      alert("Newsletter Coming Soon...");
    },
  },
};
</script>

<style scoped>
.flex-item-center {
  align-self: center;
}

.l-logo-image {
  max-width: 400px;
  max-height: 300px;
  margin-top: 40px;
  margin-inline: 100px;
}

.s-footer-logo {
  max-width: 400px;
  max-height: 300px;
}
</style>
