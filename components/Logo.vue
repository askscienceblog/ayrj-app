<template>
  <v-sheet
    min-width="500"
    class="pr-3"
    :width="width"
    height="auto"
    color="#00000000"
  >
    <v-container fluid>
      <v-row>
        <v-col>
          <NuxtImg
            class="icon-image text-right my-auto"
            src="../public/imgs/logo.png"
          ></NuxtImg>
        </v-col>
        <v-col>
          <v-sheet
            class="ml-n9 my-3 text-wrap"
            color="#00000000"
            min-width="180"
          >
            <a class="font-weight-black">ASEAN Young Researchers' Journal</a>
            <v-spacer></v-spacer>
            <a class="text-subtitle-2">For students, by students</a>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container></v-sheet
  >
</template>

<script>
export default {
  props: {
    width: String,
  },
};
</script>
