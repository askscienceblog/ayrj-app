<template>
  <div style="position: relative; text-align: center; color: white">
    <v-sheet
      class="background"
      :class="{
        'l-background-scale': device === 'l' ? true : false,
        's-background-scale': device === 's' ? true : false,
      }"
      height="300"
      width="100%"
    >
    </v-sheet>
    <v-sheet class="overlay" height="300" width="100%"> </v-sheet>
    <p class="text-h3 font-weight-bold page-title">About AYRJ</p>
  </div>

  <v-container>
    <v-row>
      <v-col>
        <p class="text-h4 mt-16 font-weight-bold">Established in 2023!</p>
      </v-col>
      <v-col>
        <p class="text-h6 text-wrap font-weight-bold mt-16">
          ASEAN Young Researchers’ Journal aims to provide a platform for Young
          Researchers in the region to showcase their findings. We hope to
          provide a safe environment for holistic development and impactful
          interactions with like-minded peers.
        </p>
        <p class="text-wrap my-8">
          We are a volunteer run project and am not related or affiliated with
          Ministry of Education, Singapore Science Centre or the Association of
          Southeast Asian Nations.
        </p>
        <p class="text-wrap">We look forward to recieving your manuscripts.</p>
        <p class="text-h6 font-weight-bold my-16">Jamie & Team</p>
      </v-col>
    </v-row>
  </v-container>

  <v-divider horizontal thickness="5" class="border-opacity-100"></v-divider>
  <div
    class="text-h2 text-center mx-auto"
    width="300"
    style="margin-block: 120px"
  >
    Our Team
  </div>
  <v-divider horizontal thickness="5" class="border-opacity-100"></v-divider>

  <v-card
    v-for="team in ourTeam"
    class="my-10 mx-16 text-center"
    variant="text"
  >
    <p class="text-h4 mt-10 font-weight-bold">{{ team.committee }}</p>
    <p class="mt-3 text-h6">{{ team.description }}</p>
    <div class="d-flex flex-wrap justify-center align-center my-10">
      <NameCard
        v-for="member in team.members"
        :name="member.name"
        :title="member.title"
        :description="member.intro"
      ></NameCard
      ><v-divider
        horizontal
        thickness="5"
        class="mt-16 border-opacity-100"
      ></v-divider>
    </div>
  </v-card>

  <v-sheet
    color="#eeeeeeee"
    width="100%"
    height="auto"
    class="py-16 d-flex text-center justify-center"
  >
    <v-sheet class="mt-2" min-width="200" max-width="200" color="#00000000">
      <p class="text-h1">{{ noOfArticles }}</p>
      <p class="text-h6 mx-n13 pa-3">Articles Published</p>
    </v-sheet>

    <v-divider
      vertical
      :thickness="4"
      class="border-opacity-100 mx-6"
    ></v-divider>
    <v-sheet
      class="mx-3 ml-10"
      min-width="200"
      max-width="200"
      color="#00000000"
    >
      <p class="text-h4 custom-bold">{{ goals[0].title }}</p>
      <p class="my-5">{{ goals[0].subtitle }}</p>
    </v-sheet>

    <v-sheet class="mx-3" min-width="200" max-width="200" color="#00000000">
      <p class="text-h4 custom-bold">{{ goals[1].title }}</p>
      <p class="my-5">{{ goals[1].subtitle }}</p>
    </v-sheet>

    <v-sheet class="mx-3" min-width="200" max-width="200" color="#00000000">
      <p class="text-h4 custom-bold">{{ goals[2].title }}</p>
      <v-sheet
        color="#00000000"
        class="mt-3 ml-2 text-left"
        height="auto"
        width="180"
      >
        <v-chip variant="text" v-for="(value, index) in goals[2].subtitle">
          <v-icon class="pa-4">mdi-play</v-icon>
          <p>{{ value }}</p>
        </v-chip>
      </v-sheet>
    </v-sheet>
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
import NameCard from "../components/NameCard.vue";

export default {
  components: { NameCard },
  computed: {
    device() {
      return useAttrs().device;
    },
  },

  methods: {},

  data() {
    return {
      noOfArticles: 3,

      ourTeam: [
        {
          committee: "Journal Board",
          description:
            "The Journal Board is the main decision making body of AYRJ and oversees all committees.",
          email: null,
          members: [
            {
              name: "Jamie Wen",
              title: "Founder | Chief Editor",
              pic: "",
              email: "",
              intro: "",
            },
            {
              name: "Jian Hui",
              title: "Senior Editorial Board",
              pic: "",
              email: "",
              intro: "",
            },
            {
              name: "Jeremy Tan",
              title: "Administrative Director",
              pic: "",
              email: "",
              intro: "",
            },
            {
              name: "Nicole",
              title: "Communications Director",
              pic: "",
              email: "",
              intro: "",
            },
            {
              name: "Harry Cheong",
              title: "Lead Frontend Developer",
              pic: "",
              email: "",
              intro: "",
            },
            {
              name: "Wang Chen",
              title: "Lead Backend Developer",
              pic: "",
              email: "",
              intro: "",
            },
          ],
        },
        {
          committee: "Editorial Board",
          description:
            "The Editorial Board is in charge of the processing, appraisal and approval of all received research papers.",
          email: "",
          members: [
            {
              name: "Jian Hui",
              title: "Senior Editorial Board",
              pic: "",
              email: "",
              intro: "",
            },
            {
              name: "Wang Chen",
              title: "Editorial Board",
              pic: "",
              email: "",
              intro: "",
            },
            {
              name: "Daisy",
              title: "Editorial Board",
              pic: "",
              email: "",
              intro: "",
            },
            {
              name: "Ze Dong",
              title: "Editorial Board",
              pic: "",
              email: "",
              intro: "",
            },
          ],
        },
        {
          committee: "Admin",
          description:
            "The Administrative Committee is in charge of managing paper work and external relations with partnering organisations.",
          email: "",
          members: [
            {
              name: "Jeremy Tan",
              title: "Administrative Director",
              pic: "",
              email: "",
              intro: "",
            },
            {
              name: "Kai Zhe",
              title: "Administrative Associate",
              pic: "",
              email: "",
              intro: "",
            },
            {
              name: "Linus",
              title: "Administrative Associate",
              pic: "",
              email: "",
              intro: "",
            },
          ],
        },
        {
          committee: "Science Communications",
          description:
            "The Science Communications Committee is in charge of publicity and design to grow our community of researchers.",
          email: "",
          members: [
            {
              name: "Nicole",
              title: "Science Communication Director",
              pic: "",
              email: "",
              intro: "",
            },
            {
              name: "Valerie",
              title: "Social Media Manager",
              pic: "",
              email: "",
              intro: "",
            },
            {
              name: "Erm Min",
              title: "Social Media Manager",
              pic: "",
              email: "",
              intro: "",
            },
            {
              name: "Ru Ting",
              title: "Publicity Manager",
              pic: "",
              email: "",
              intro: "",
            },
            {
              name: "Li Xuan",
              title: "Publicity Manager",
              pic: "",
              email: "",
              intro: "",
            },
          ],
        },
      ],
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
  z-index: 1;

  color: white;
}

.background {
  width: auto;
  height: 200px;
  z-index: 0;

  background-image: url("/public/imgs/background/pipette.jpeg");
  background-repeat: no-repeat;
  transition: background-size 4s ease;
  background-position: center center;
}

.l-background-scale {
  background-size: 100%;
}

.s-background-scale {
  background-size: auto 100%;
}
.overlay {
  position: absolute;
  top: 0%;
  z-index: 0;

  background-color: black;
  opacity: 0.5;
}
.featured-image {
  max-height: 500px;
  max-width: 500px;
}

.custom-bold {
  font-weight: 400;
}
</style>
