<template>
  <v-sheet
    width="80%"
    class="py-8 px-16 mx-auto text-left mt-16"
    color="#d3d3d3"
    height="auto"
  >
    <a class="py-3 text-h4 blue font-weight-medium">{{ articleSection }}</a>
  </v-sheet>
  <v-sheet width="80%" class="mx-auto mb-16">
    <v-card class="py-16" v-for="project in projects">
      <v-card-title class="text-h4 text-wrap mx-10">{{
        project.title
      }}</v-card-title>
      <v-card-subtitle class="mx-10"> </v-card-subtitle>
      <v-card-text class="mx-10">
        {{ project.abstract }}
        <v-spacer></v-spacer>
        <v-btn
          variant="text"
          density="compact"
          class="ml-n4 my-4"
          :to="`/articles/${project.id}`"
        >
          <a class="blue">Read More</a>
          <v-icon class="ml-1">mdi-arrow-right</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  props: {
    projects: Object,
    articleSection: String,
  },
};
</script>

<style>
.blue {
  color: #0c4160;
}
</style>
