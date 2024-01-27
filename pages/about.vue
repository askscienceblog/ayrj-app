<template>
  <div style="position: relative; text-align: center; color: white">
    <v-sheet
      class="background"
      height="300"
      width="100%"
      style="filter: blur(4px); color: white"
    >
    </v-sheet>
    <p class="text-h3 font-weight-bold page-title">About AYRJ</p>
  </div>

  <v-container>
    <v-row>
      <v-col>
        <p class="text-h4 mt-16 font-weight-bold">{{ aboutUs.title }}</p>
      </v-col>
      <v-col>
        <p class="text-h6 text-wrap font-weight-bold mt-16">
          {{ aboutUs.subtitle }}
        </p>
        <p class="text-wrap my-8">
          {{ aboutUs.text_1 }}
        </p>
        <p class="text-wrap">
          {{ aboutUs.text_2 }}
        </p>
        <p class="text-h6 font-weight-bold my-16">Jamie & Team</p>
      </v-col>
    </v-row>
  </v-container>

  <v-sheet color="#eeeeee" width="100%" height="auto" class="py-16">
    <v-container>
      <v-row no-gutters>
        <v-col>
          <v-sheet
            class="mx-auto mt-2"
            min-width="200"
            max-width="200"
            color="#00000000"
          >
            <p class="text-h1">{{ noOfArticles }}</p>
            <v-spacer></v-spacer>
            <p class="text-h6 mx-n13 pa-3">Articles Published</p>
          </v-sheet>
        </v-col>

        <v-sheet
          color="#000000"
          height="300"
          width="1"
          class="mr-10 ml-n15 mt-n10"
        ></v-sheet>

        <v-col>
          <v-sheet
            class="mx-3 ml-10"
            min-width="200"
            max-width="200"
            color="#00000000"
          >
            <p class="text-h4 custom-bold">{{ goals[0].title }}</p>
            <p class="my-5">{{ goals[0].subtitle }}</p>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet
            class="mx-3"
            min-width="200"
            max-width="200"
            color="#00000000"
          >
            <p class="text-h4 custom-bold">{{ goals[1].title }}</p>
            <p class="my-5">{{ goals[1].subtitle }}</p>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet
            class="mx-3"
            min-width="200"
            max-width="200"
            color="#00000000"
          >
            <p class="text-h4 custom-bold">{{ goals[2].title }}</p>
            <v-sheet
              color="#00000000"
              class="ml-n5 mt-3"
              height="auto"
              width="180"
            >
              <v-chip
                variant="text"
                v-for="(value, index) in goals[2].subtitle"
              >
                <v-icon class="pa-4">mdi-play</v-icon>
                <p>{{ value }}</p>
              </v-chip>
            </v-sheet>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>

  <v-sheet>
    <v-container>
      <v-row>
        <p class="text-h4 mt-16 mb-5 custom-bold">
          Frequently Asked Questions (FAQ)
        </p>
      </v-row>

      <v-row>
        <v-expansion-panels class="mb-10">
          <v-expansion-panel v-for="faq in faqs">
            <v-expansion-panel-title expand-icon="" collapse-icon="">
              <v-icon class="mx-3">mdi-play</v-icon>
              <p class="font-weight-bold">{{ faq.question }}</p>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="pa-1">
              {{ faq.answer }}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  methods: {
    isOdd(index) {
      if (index % 2 === 0) {
        return false;
      } else {
        return true;
      }
    },
  },

  data() {
    return {
      noOfArticles: 3,
      aboutUs: {
        title: "Established in 2023!",
        subtitle:
          "ASEAN Young Researchers’ Journal aims to provide a platform for Young Researchers in the region to showcase their findings. We hope to provide a safe environment for holistic development and impactful interactions with like-minded peers. ",
        text_1:
          "We are a volunteer run project and am not related or affiliated with Ministry of Education, Singapore Science Centre or the Association of Southeast Asian Nations.",

        text_2: "We look forward to recieving your manuscripts.",
      },
      goals: [
        {
          title: "Mission",
          subtitle:
            "Provide a platform for Young Scientists to make meaningful contributions towards the development of science",
        },
        {
          title: "Vision",
          subtitle: "To become the leading journal for Young Scientists",
        },
        {
          title: "Values",
          subtitle: ["Integrity above all", "Never give up", "Quality of work"],
        },
      ],
      faqs: [
        {
          question: "How do you sustain this website?",
          answer:
            "This is a completely volunteer run project and we are self funded. We hope to make a meaningful impact within the scientific community. ",
        },
        {
          question: "How are the articles chosen?",
          answer:
            "Submissions are carefully reviewed by the editorial board based on quality, relevancy and novelty. We try to ensure the process is as accessible as possible and will notify you if any updates are required. ",
        },
        {
          question: "Who is on the editorial board?",
          answer:
            "Our editorial board currently consists of volunteering scientists. We hope to have a more permenant team in the near future. ",
        },
        {
          question: "Are you accepting volunteers?",
          answer:
            "Absolutely! We hope everyone can contribute in their own ways. Drop us an email (askscienceblog@gmail.com) on what you hope to assist us with and we will contact you. ",
        },
        {
          question: "How do I contact you?",
          answer: "Please email us at askscienceblog@gmail.com",
        },
      ],
    };
  },
};
</script>

<style scoped>
.page-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: white;
}

.background {
  width: auto;
  height: 200px;

  background-image: url("/public/imgs/background/pipette.jpeg");
  background-repeat: no-repeat;
  background-size: 100%;
  transition: background-size 4s ease;
  background-position: center center;
}
.featured-image {
  max-height: 500px;
  max-width: 500px;
}

.custom-bold {
  font-weight: 400;
}
</style>
