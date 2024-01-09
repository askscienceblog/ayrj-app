<template>
  <template>
    <v-footer inset>
      <v-container fluid>
        <v-row>
          <!-- Website Publicity -->
          <v-sheet color="#eeeeee" width="100%" height="auto">
            <v-container fluid>
              <v-row>
                <!-- Logo -->
                <v-col class="v-col-5">
                  <logo class="logo-position" width="480"></logo>
                </v-col>

                <v-divider vertical></v-divider>

                <!-- About Us -->
                <v-col class="v-col-2">
                  <v-sheet
                    height="auto"
                    width="180"
                    class="aboutus-position"
                    color="#eeeeee"
                  >
                    <v-container fluid>
                      <v-row
                        ><p class="text-h5 mx-3 my-3 font-weight-bold">
                          About Us
                        </p>
                      </v-row>
                      <v-row v-for="page in pages"
                        ><v-btn variant="text">
                          <a
                            class="text-subtitle-2"
                            :href="page.href"
                            style="text-decoration: none"
                            >{{ page.title }}</a
                          >
                        </v-btn>
                      </v-row>
                    </v-container>
                  </v-sheet>
                </v-col>

                <v-divider vertical></v-divider>

                <!-- Form -->
                <v-col class="">
                  <v-container>
                    <v-row>
                      <p class="font-weight-bold form-position ml-6">
                        Join our newsletter. No spam. Just Knowledge
                      </p>
                    </v-row>

                    <v-row>
                      <v-sheet
                        min-width="380"
                        class="my-5 ml-6"
                        color="#00000000"
                      >
                        <v-form>
                          <p class="font-weight-bold">First Name:</p>
                          <v-text-field
                            :rules="rules"
                            v-model="firstName"
                            label="Your First Name"
                          ></v-text-field>

                          <p class="font-weight-bold">Email Address:</p>
                          <v-text-field
                            :rules="rules"
                            v-model="emailAddress"
                            label="Your Email Address"
                          ></v-text-field>

                          <v-sheet width="100" class="mt-n1"
                            ><v-btn type="submit" color="blue" block
                              >Submit</v-btn
                            ></v-sheet
                          >
                        </v-form>
                      </v-sheet>
                    </v-row>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-row>

        <v-row>
          <!-- Website Footer -->
          <v-sheet width="100%" color="#000000" height="80px">
            <v-container variant="bg-surface-variant">
              <v-col class="text-left">
                <v-sheet color="white" height="1" width="100%"> </v-sheet>

                <v-chip variant="text" class="mt-1">
                  <v-btn max-width="5" variant="text">
                    <v-icon class="mx-1">mdi-email</v-icon>
                    <v-icon class="mx-1">mdi-twitter</v-icon>
                    <v-icon class="mx-1" href="https://instagram.com"
                      >mdi-instagram</v-icon
                    >
                  </v-btn>
                  <a class="mx-3">@The Science Journal</a>
                </v-chip>
              </v-col>
            </v-container>
          </v-sheet>
        </v-row>
      </v-container>
    </v-footer>
  </template>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  components: {
    Logo,
  },
  data() {
    return {
      pages: [
        { title: "How we operate", href: "/about" },
        { title: "Articles", href: "/about" },
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

<style>
.logo-position {
  margin-top: 160px;
  margin-bottom: 130px;
}

.aboutus-position {
  margin-top: 80px;
  margin-left: 20px;
}

.form-position {
  margin-top: 80px;
}
</style>
