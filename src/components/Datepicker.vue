<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="fechas"
    transition="scale-transition"
    offset-y
    min-width="auto"
    @update:return-value="rangoFechasCambio"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="rangoFechasTexto"
        :label="label"
        :dense="dense"
        prepend-inner-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
        outlined
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="fechas"
      color="primary"
      :allowed-dates="fechasPermitidas"
      no-title
      scrollable
      range
    >
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false">
        Cancelar
      </v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(fechas)">
        OK
      </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Selecciona una fecha'
    },
    dense: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      fechas: [],
      menu: false
    };
  },
  computed: {
    rangoFechasTexto() {
      return this.fechas
        .map(value =>
          value
            .split('-')
            .reverse()
            .join('/')
        )
        .join(' - ');
    }
  },
  methods: {
    rangoFechasCambio: function() {
      // Reordenamos, desde menor fecha hasta mayor.
      this.fechas.sort((a, b) => new Date(a) > new Date(b));
      this.$emit('fecha-seleccionada', this.fechas);
    },
    fechasPermitidas: value =>
      new Date(value) >= new Date() ||
      value === new Date().toISOString().split('T')[0]
  }
};
</script>

<style></style>
