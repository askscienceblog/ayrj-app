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
        <p class="text-h5 text-center font-weight-bold">About Us</p>

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
          Join our newsletter. No spam. Just Knowledge
        </p>

        <v-sheet min-width="380" class="my-6 ml-6" color="#00000000">
          <v-form>
            <p class="font-weight-bold my-3">First Name:</p>
            <v-text-field
              variant="outlined"
              :rules="rules"
              v-model="firstName"
              label="Your First Name"
            ></v-text-field>

            <p class="font-weight-bold my-3">Email Address:</p>
            <v-text-field
              variant="outlined"
              :rules="rules"
              v-model="emailAddress"
              label="Your Email Address"
            ></v-text-field>

            <v-sheet width="100" class="mt-n1"
              ><v-btn type="submit" color="blue" block>Submit</v-btn>
            </v-sheet>
          </v-form>
        </v-sheet>
      </v-sheet>
    </v-sheet>
  </v-sheet>

  <!-- "s" Devices -->
  <!-- <v-sheet color="#eeeeee" v-if="device === 's'"> -->
  <!-- Logo -->
  <!-- <img
      class="s-footer-logo"
      style="
        position: relative;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
      "
      src="/public/logo.png"
    />
  </v-sheet>

  <v-divider
    horizontal
    class="border-opacity-100"
    v-if="device === 's'"
  ></v-divider> -->

  <!-- About Us -->
  <v-sheet color="#eeeeee" width="100%" height="300" v-if="device === 's'">
    <p class="text-h5 text-center font-weight-bold mt-12">About Us</p>

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
        Join our newsletter. No spam. Just Knowledge
      </p>

      <v-sheet width="300px" class="my-6 mx-auto" color="#00000000">
        <v-form>
          <p class="font-weight-bold my-3">First Name:</p>
          <v-text-field
            variant="outlined"
            :rules="rules"
            v-model="firstName"
            label="Your First Name"
          ></v-text-field>

          <p class="font-weight-bold my-3">Email Address:</p>
          <v-text-field
            variant="outlined"
            :rules="rules"
            v-model="emailAddress"
            label="Your Email Address"
          ></v-text-field>

          <v-sheet width="100" class="mx-auto"
            ><v-btn type="submit" color="blue" block>Submit</v-btn></v-sheet
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
          icon="mdi-email"
          href=""
        >
        </v-btn>

        <v-btn
          class="mx-1"
          density="compact"
          variant="text"
          icon="mdi-linkedin"
          href="https://www.linkedin.com/company/aseanyouthresearchjournal"
        >
        </v-btn>

        <v-btn
          class="mx-1"
          density="compact"
          variant="text"
          icon="mdi-instagram"
          href="https://instagram.com"
        >
        </v-btn>

        <a class="">@The Science Journal</a>
      </v-col>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  props: { device: String },
  data: () => {
    return {
      pages: [
        { title: "How we operate", href: "/about" },
        { title: "Articles", href: "/articles/" },
        { title: "Experiment Blog", href: "/blog" },
        { title: "Contact Us", href: "/submit" },
        { title: "Submit your manuscript", href: "/submit" },
      ],
      rules: [
        (value) => {
          if (value) return true;

          return "";
        },
      ],
    };
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
