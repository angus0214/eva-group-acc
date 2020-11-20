<template>
  <v-row class="justify-center">
    <v-col cols="12" class="text-center text-h3">
      Pin Your Event
    </v-col>
    <v-col cols="9">
      <v-text-field label="Url ..." solo></v-text-field>
    </v-col>
    <v-col cols="4" class="d-flex justify-center">
      <v-btn elevation="2" large>Pin!</v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
