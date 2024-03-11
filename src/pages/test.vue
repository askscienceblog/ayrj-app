<template>
  <ContentRendererMarkdown :value="parsedMarkdown" v-bind="$attrs" />
</template>

<script>
import markdownParser from "@nuxt/content/transformers/markdown";

export default {
  //   components: { ContentRendererMarkdown },
  data() {
    return {
      markdown:
        "Effectiveness of different mouthwash agents and herb extracts in inhibition of *Streptococcus mutans* biofilm",
    };
  },

  computed: {
    async parsedMarkdown() {
      const parsed = await markdownParser.parse("markdown", this.markdown);
      console.log(parsed);
      return parsed;
    },
  },
};
</script>
