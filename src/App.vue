<template>
  <v-app>
    <NavigationDrawer />

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>@evalienigena</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import NavigationDrawer from './components/TheNavDrawer';

export default {
  name: 'App',
  components: {
    NavigationDrawer
  },

  data: () => ({
    //
  })
};
</script>
