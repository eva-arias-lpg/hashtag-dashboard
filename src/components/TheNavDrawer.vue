<template>
  <v-navigation-drawer
    app
    overlay-color="#1DE9B6"
    v-model="drawer"
    :mini-variant.sync="mini"
    permanent
  >
    <!-- Logo + Brand name -->
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="@/assets/hashtag.svg"></v-img>
      </v-list-item-avatar>

      <v-list-item-title class="text-display font-weight-black"
        ># Hashtag #</v-list-item-title
      >

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>
    <!-- / Logo + Brand name -->

    <!-- User profile settings + logout btn -->

    <!-- / User profile settings + logout btn -->
    <v-divider></v-divider>

    <v-list-item class="px-2 pt-4">
      <v-btn
        small
        rounded
        fab
        block
        elevation="0"
        color="green accent-3"
        class="transition-swing text-left"
      >
        <v-icon :left="!mini">mdi-plus-circle-outline</v-icon>
        <div v-show="!mini">Nuevo pedido</div>
      </v-btn>
    </v-list-item>

    <!-- Navigation Items -->
    <v-list flat>
      <v-list-item
        exact
        color="green accent-4"
        v-for="item in items"
        :key="item.title"
        :to="{ name: item.location }"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <!-- / Navigation Items -->
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Inicio', icon: 'mdi-home-outline', location: 'home' },
        {
          title: 'Pedidos',
          icon: 'mdi-inbox-full-outline',
          location: 'requests'
        },
        {
          title: 'Ofertas',
          icon: 'mdi-folder-pound-outline',
          location: 'offers'
        },
        {
          title: 'Contactos',
          icon: 'mdi-contacts-outline',
          location: 'contacts'
        }
      ],
      mini: true
    };
  }
};
</script>

<style>
.text-display {
  text-transform: uppercase;
  letter-spacing: 0.0892857143em;
  font-size: 1.25rem;
}
</style>
