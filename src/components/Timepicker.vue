<template>
  <v-menu
    ref="menu"
    v-model="menu2"
    :close-on-content-click="false"
    :nudge-right="40"
    :return-value.sync="hora"
    transition="scale-transition"
    offset-y
    @update:return-value="horaSeleccionadaCambio"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="horaTexto"
        :label="label"
        :dense="dense"
        prepend-inner-icon="mdi-clock-time-four-outline"
        readonly
        v-bind="attrs"
        v-on="on"
        outlined
      ></v-text-field>
    </template>
    <v-time-picker
      v-model="hora"
      color="primary"
      format="ampm"
      scrollable
      ampm-in-title
    >
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false">
        Cancelar
      </v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(hora)">
        OK
      </v-btn>
    </v-time-picker>
  </v-menu>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Selecciona una hora.'
    },
    dense: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hora: null,
      menu: false,
      menu2: false
    };
  },
  methods: {
    horaSeleccionadaCambio: function() {
      // Reordenamos, desde menor fecha hasta mayor.
      this.$emit('hora-seleccionada', this.hora, this.horaTexto);
    }
  },
  computed: {
    horaTexto() {
      // Check correct time format and split into components
      let time = this.hora;
      if (time) {
        time = time
          .toString()
          .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) {
          // If time format correct
          time = time.slice(1); // Remove full string match value
          time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
          time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join('');
      }

      return '';
    }
  }
};
</script>

<style></style>
