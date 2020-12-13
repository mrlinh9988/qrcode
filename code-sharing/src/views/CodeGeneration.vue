<template>
  <b-container class="mt-4">
    <h1 class="mb-4">Code Sharing Plattform</h1>
    <codemirror v-model="code" :options="cmOptions" />
    <b-button
      variant="info"
      class="mt-2"
      :disabled="created"
      @click="createCodeUrl"
    >Create Code</b-button>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      created: false,
      code: 'const a = 10',
    };
  },

  mounted() {
    const urlCode = this.$route.query.code;
    if (urlCode) {
      this.code = urlCode;
      this.created = true;
    }
  },

  methods: {
    createCodeUrl() {
      this.created = true;
      this.$router.push({ path: '', query: { code: this.code } });
    },
  },

  computed: {
    cmOptions() {
      return {
        tabSize: 2,
        mode: 'text/javascript',
        lineNumbers: true,
        readOnly: this.created ? 'nocursor' : false,
      };
    },
  },
};
</script>
