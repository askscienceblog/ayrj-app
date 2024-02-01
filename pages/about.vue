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

  <div class="mx-auto pb-4" style="max-width: 1000px">
    <p class="text-h4 mt-16 font-weight-bold text-center">
      Established in 2023!
    </p>

    <p class="text-h6 text-wrap text-center font-weight-bold mt-16">
      ASEAN Young Researchers’ Journal aims to provide a platform for Young
      Researchers in the region to showcase their findings. We hope to provide a
      safe environment for holistic development and impactful interactions with
      like-minded peers.
    </p>
    <p class="text-wrap my-8 text-center">
      We are a volunteer run project and am not related or affiliated with
      Ministry of Education, Singapore Science Centre or the Association of
      Southeast Asian Nations.
    </p>
    <p class="text-wrap text-center">
      We look forward to recieving your manuscripts.
    </p>
    <p class="text-h6 text-center font-weight-bold my-16">- Jamie & Team</p>
  </div>

  <v-divider horizontal class="border-opacity-100" thickness="3"></v-divider>
  <div
    class="text-h3 text-center mx-auto"
    width="300"
    style="margin-block: 80px"
  >
    Our Team
  </div>
  <v-divider horizontal class="border-opacity-100" thickness="3"></v-divider>

  <v-card
    v-for="team in ourTeam"
    class="my-10 mx-16 text-center"
    variant="text"
  >
    <p
      class="text-h5 mt-10 mb-5 mx-auto"
      style="
        width: fit-content;
        padding-inline: 50px;
        padding-block: 20px;
        border: solid;
      "
    >
      {{ team.committee }}
    </p>
    <p class="mt-3 text-h6">{{ team.description }}</p>
    <div class="d-flex flex-wrap justify-center align-center my-10">
      <NameCard
        v-for="member in team.members"
        :name="member.name"
        :title="member.title"
        :statement="member.intro"
        :links="member.links"
        :device="device"
        :srcpath="member.pic"
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

    ourTeam() {
      let team = [
        {
          committee: "Journal Board",
          description:
            "The Journal Board is the main decision making body of AYRJ and oversees all committees.",
          email: null,
          members: this.ourMembers.filter((member) => {
            if (toRaw(member).committees.includes("Board")) {
              return true;
            }
          }),
        },
        {
          committee: "Editorial Board",
          description:
            "The Editorial Board is in charge of the processing, appraisal and approval of all received research papers.",
          email: "",
          members: this.ourMembers.filter((member) => {
            if (toRaw(member).committees.includes("Editorial")) {
              return true;
            }
          }),
        },
        {
          committee: "Science Communications",
          description:
            "The Science Communications Committee is in charge of publicity and design to grow our community of researchers.",
          email: "",
          members: this.ourMembers.filter((member) => {
            if (toRaw(member).committees.includes("Comms")) {
              return true;
            }
          }),
        },
        {
          committee: "Admin",
          description:
            "The Administrative Committee is in charge of managing paper work and external relations with partnering organisations.",
          email: "",
          members: this.ourMembers.filter((member) => {
            if (toRaw(member).committees.includes("Admin")) {
              return true;
            }
          }),
        },
      ];
      return team;
    },
  },

  methods: {},

  data() {
    return {
      noOfArticles: 3,

      ourMembers: [
        {
          name: "Jamie Wen",
          title: "Founder | Chief Editor",
          committees: ["Board", "Editorial"],
          pic: "",
          email: "",
          intro:
            "It has been my dream to make research more equitable. AYRJ is a tangible initiative that empowers young researchers to showcase their findings. Come join us to push the boundaries of research!",
          links: {
            linkedIn: "https://www.linkedin.com/in/jamie-wen-1a8a4b258/",
            github: "",
          },
        },
        {
          name: "Dr. Low Jian Hui",
          title: "Senior Editorial Board",
          committees: ["Board", "Editorial"],
          pic: "",
          email: "",
          intro: "Researcher",
          links: {
            linkedIn: "",
            github: "",
          },
        },
        {
          name: "Jeremy Tan",
          title: "Administrative Director",
          committees: ["Board", "Admin"],
          pic: "",
          email: "",
          intro:
            '"You aren\'t afraid of failing, you are just afraid of what people think of you if you fail" ~Someone. ',
          links: {
            linkedIn: "https://www.linkedin.com/in/jeremy-tan-554875262",
            github: "",
          },
        },
        {
          name: "Nicole",
          title: "Communications Director",
          committees: ["Board", "Comms"],
          pic: "",
          email: "",
          intro:
            "Everyone should have the opportunity to engage with science without barriers! I look forward to connecting with passionate youth scientists and working with AYRJ to make research more accessible.",
          links: {
            linkedIn: "https://www.linkedin.com/in/nicole-ho-557253202/",
            github: "",
          },
        },
        {
          name: "Harry Cheong",
          title: "Frontend Developer",
          committees: ["Board"],
          pic: "",
          email: "",
          intro:
            "I love putting fluffy balls within lines, software development and cool ideas.",
          links: {
            linkedIn: "https://www.linkedin.com/in/harry-cheong-72bbb5212/",
            github: "https://github.com/Harry-cheong",
          },
        },
        {
          name: "Wang Chen",
          title: "Backend Developer | Editorial Board",
          committees: ["Board", "Editorial"],
          pic: "",
          email: "",
          intro:
            "AYRJ is the platform I wish I had as a student. Now, I am glad to do what I can to help other young researchers with their first publications.",
          links: {
            linkedIn: "",
            github: "https://github.com/WANGCHEN722",
          },
        },
        {
          name: "Daisy",
          title: "Editorial Board",
          committees: ["Editorial"],
          pic: "",
          email: "",
          intro:
            "AYRJ would serve as a great platform to expose young scientists and students to the world of research. “It says Oooooo.” -Peter Griffin.",
          links: {
            linkedIn: "",
            github: "",
          },
        },
        {
          name: "Ze Dong",
          title: "Editorial Board",
          committees: ["Editorial"],
          pic: "",
          email: "",
          intro:
            "Hi, I'm Ze Dong, part of AYRJ's editorial board. I believe that AYRJ can help encourage youths to take part in valuable research experiences!",
          links: {
            linkedIn: "https://www.linkedin.com/in/ze-dong-saw-9b3936242",
            github: "https://github.com/sawzedong",
          },
        },
        {
          name: "Valerie",
          title: "Social Media Manager",
          committees: ["Comms"],
          pic: "",
          email: "",
          intro:
            "\“Science knows no country, because knowledge belongs to humanity\” — Louis Pasteur. Join our AYRJ family by sharing your research findings with young scientists across the ASEAN region!",
          links: {
            linkedIn: "http://linkedin.com/in/valerie-chan-wy",
            github: "",
          },
        },
        {
          name: "Erm Min",
          title: "Social Media Manager",
          committees: ["Comms"],
          pic: "",
          email: "",
          intro:
            "An enthusiastic and passionate science student with a keen interest in research who looks forward in bringing scientific works of students together",
          links: {
            linkedIn: "https://www.linkedin.com/in/tan-ern-min-b0a63b2b1",
            github: "",
          },
        },
        {
          name: "Ru Ting",
          title: "Publicity Manager",
          committees: ["Comms"],
          pic: "",
          email: "",
          intro:
            "I hope that I can contribute meaningfully to AYRJ although I am not very good at science haha",
          links: {
            linkedIn: "https://www.linkedin.com/in/ru-ting-ho-0025b02b1/",
            github: "",
          },
        },
        {
          name: "Li Xuan",
          title: "Publicity Manager",
          committees: ["Comms"],
          pic: "",
          email: "",
          intro: "eucalyptus, eu kaluptos, kaluptein",
          links: {
            linkedIn: "https://www.linkedin.com/in/lew-li-xuan-b2363a2b1",
            github: "",
          },
        },
        {
          name: "Kai Zhe",
          title: "Administrative Associate",
          committees: ["Admin"],
          pic: "",
          email: "",
          intro:
            "I believe in the power of open communication and collaboration in advancing science. AYRJ enables this by providing a platform for student researchers to share their work with each other.",
          links: {
            linkedIn: "http://linkedin.com/in/kai-zhe-t-093683243",
            github: "",
          },
        },
        {
          name: "Linus",
          title: "Administrative Associate",
          committees: ["Admin"],
          pic: "",
          email: "",
          intro:
            "Always intrigued by the wonders of science, always curious, always hungry",
          links: {
            linkedIn: "",
            github: "",
          },
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
