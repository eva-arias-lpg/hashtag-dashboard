<template>
  <v-row>
    <v-col>
      <!-- User Greetings  -->
      <h1>Hola, {{ user.name }}</h1>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'inicio',
  data() {
    return {
      user: {
        name: 'Eva Maria Arias'
      }
    };
  },
  computed: {},
  components: {}
};
</script>
