<template>
  <v-container v-show="pageExists" fluid>
    <v-row class="text-center">
      <p class="font-weight-bold text-h3 pa-16 pb-5 mx-auto">
        {{ title }}
      </p>
    </v-row>
    <v-row>
      <div class="mx-auto">
        <p
          v-for="category in categories"
          style="
            display: inline-block;
            color: #3366cc;
            text-decoration: underline;
          "
          class="text-h6 mx-1"
        >
          {{ category }}
        </p>
      </div>
    </v-row>
    <v-row>
      <p class="text-subtitle-1 mx-auto mb-5">{{ authors.join(", ") }}</p>
    </v-row>

    <v-row>
      <v-btn class="mx-auto mb-12 mt-3" color="black">
        Download full article
        <v-icon class="ml-2">mdi-download</v-icon>
      </v-btn>
    </v-row>
    <v-row>
      <v-card width="1200" class="mx-auto my-10" variant="text">
        <p class="text-h5 my-2">Abstract</p>
        <v-divider horizontal></v-divider>
        <p class="text-wrap mt-3">{{ abstract }}</p>
      </v-card>
    </v-row>
    <v-row>
      <v-card width="1200" class="mx-auto my-10" variant="text">
        <p class="text-h5 my-2">Bibliography</p>
        <v-divider horizontal></v-divider>
        <div v-for="src in biblio">
          <p class="my-4">{{ src.id + ".   " + src.name }}</p>
        </div>
      </v-card>
    </v-row>
  </v-container>

  <div v-show="!pageExists">
    <NotFound></NotFound>
  </div>
</template>

<script>
import NotFound from "/components/NotFound.vue";
export default {
  data() {
    return {
      // Dummy Data
      title:
        "The Environmental, Social And Economic Impact Of Alternate Meat Products",
      authors: [
        "Ze Dong Saw",
        "Kai Zhe Tan",
        "Kyson Kyi Sheng Chua",
        "Jamie Wen",
      ],
      categories: ["Biology", "Food"],
      abstract:
        "Conventional agriculture requires large amounts of energy and resources to produce meat, and is one of the leading contributors to climate change. Hence, it is important to look into alternative meat products, which include cell based and plant based meats. This study took into account the multiple factors that contribute to social and environmental sustainability. It was found that cell based meats may be the best alternative meat option. ",
      biblio: [
        {
          name: "Organisation for Economic Co-operation and Development. (2022). Meat consumption [Dataset]. Organisation for Economic Co-operation and Development. https://data.oecd.org/agroutput/meat-consumption.htm",
          id: 1,
        },
        {
          name: "The Humane League. (2020, December 1). Factory Farming: What It Is and Why It’s a Problem. https://thehumaneleague.org/article/what-is-factory-farming",
          id: 2,
        },
        {
          name: "[3] FAIRR Initiative. (2020, November 9). Intensive/Factory Farming - Investor information. FAIRR. https://www.fairr.org/article/intensive-factory-farming/",
          id: 3,
        },
      ],
    };
  },

  components: { NotFound },

  beforeMount() {
    if (this.$route.params.id === "1") {
      this.pageExists = true;
    } else {
      this.pageExists = false;
    }
  },
};
</script>
