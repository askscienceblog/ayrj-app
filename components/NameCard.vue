<template>
  <v-card height="400" width="350" class="text-center my-3 mx-1" elevation="3">
    <div>
      <v-chip
        class="pa-5 mr-auto mx-3 my-5"
        style="background-color: black; color: white"
      >
        {{ title }} </v-chip
      ><v-divider></v-divider>
    </div>

    <img class="profile-pic ma-8" src="/public/imgs/background/pipette.jpeg" />
    <v-card-title>{{ name }}</v-card-title>
    <v-card-subtitle>{{ statement }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: { name: String, title: String, statement: String },
};
</script>

<style>
.profile-pic {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
</style>
