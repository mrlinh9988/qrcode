<template>
  <v-app>
    <v-container class="pt-10">
      <v-row align="center" justify="center">
        <v-col sm="6" offset-sm="2">
          <v-text-field v-model="website" label="Deine Website"></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-btn @click="generateQrCode" :disabled="isWebsite()">Generate QR-Code</v-btn>
        </v-col>
      </v-row>

      <v-layout v-if="generatedQrCodeUrl" justify-center>
        <img :src="generatedQrCodeUrl">
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      website: '',
      generatedQrCodeUrl: '',
    };
  },

  methods: {
    generateQrCode() {
      this.generatedQrCodeUrl = `http://api.qrserver.com/v1/create-qr-code/?data=${this.website}!&size=150x150`;
    },
    isWebsite() {
      /* eslint-disable-next-line */
      const regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/g;
      return this.website.match(regex) === null;
    },
  },
};
</script>
