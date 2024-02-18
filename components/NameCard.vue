<template>
  <v-card
    class="text-center my-3 mx-1"
    :class="{ 's-card': device === 's', 'l-card': device === 'l' }"
    elevation="3"
  >
    <div>
      <v-chip
        class="pa-5 mr-auto mx-3 my-5"
        style="background-color: black; color: white"
      >
        {{ title }} </v-chip
      ><v-divider></v-divider>
    </div>

    <img class="profile-pic mt-8 mb-2" :src="src" :alt="`${name} image`" />
    <v-card-title>{{ name }}</v-card-title>
    <v-divider
      width="150"
      class="mb-2 mt-n1 mx-auto border-opacity-100"
      thickness="3"
    ></v-divider>

    <div
      class="text-center text-wrap mx-10"
      :class="{ 's-intro-box': device === 's', 'l-intro-box': device === 'l' }"
    >
      <p class="text-justify mt-5">{{ statement }}</p>
    </div>

    <div class="my-8">
      <v-btn
        v-for="item in linkIcons"
        class="mx-2"
        :href="item[1]"
        :icon="item[0]"
      >
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    name: String,
    title: String,
    statement: String,
    links: Object,
    device: String,
    srcpath: String,
  },

  computed: {
    linkIcons() {
      let displayIcons = [];
      let item,
        icon = "";
      for (item of Object.entries(toRaw(this.links))) {
        if (item[1] != "") {
          if (item[0] === "linkedIn") {
            icon = "mdi-linkedin";
          }

          if (item[0] === "github") {
            icon = "mdi-github";
          }
          displayIcons.push([icon, item[1]]);
        }
      }
      return displayIcons;
    },

    src() {
      if (this.srcpath != "") {
        return this.srcpath;
      } else {
        return "/background/microscope.png";
      }
    },
  },
};
</script>

<style>
.profile-pic {
  border-radius: 50%;
  width: 150px;
  height: 150px;

  object-fit: cover;
}

.s-card {
  height: auto;
  width: 100%;
}

.l-card {
  height: 600px;
  width: 400px;
}

.s-intro-box {
  height: auto;
}

.l-intro-box {
  height: 140px;
}
</style>
