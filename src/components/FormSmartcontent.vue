<template>
  <v-form>
    <v-row ref="formSmartcontent" @submit.prevent="submitProducto">
      <v-col cols="12" md="6">
        <v-select
          v-model="producto.tipo"
          dense
          :items="tipos"
          :item-text="
            item =>
              item.nombre.charAt(0).toUpperCase() +
              item.nombre.slice(1, item.nombre.length)
          "
          item-value="id"
          label="Tipo de SmartContent"
          return-object
          outlined
          required
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p class="text-overline mb-0">Datos de la cobertura</p>
        <v-divider class="my-2"></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <Datepicker
          label="Fecha de cobertura"
          :dense="true"
          @fecha-seleccionada="updateFechaCobertura"
        ></Datepicker>
      </v-col>
      <v-col cols="12" md="6">
        <Timepicker
          label="Hora de cobertura"
          :dense="true"
          @hora-seleccionada="updateHoraCobertura"
        ></Timepicker>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-textarea
          v-model="producto.cobertura_direccion"
          rows="1"
          outlined
          auto-grow
          counter="250"
          label="Dirección de la cobertura"
          prepend-inner-icon="mdi-map-marker-outline"
        >
        </v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-textarea
          v-model="producto.cobertura_direccion_punto_referencia"
          rows="1"
          outlined
          auto-grow
          counter="250"
          label="Punto de referencia"
          persistent-hint
          hint="Agrega un punto de referencia a la dirección de la cobertura"
          prepend-inner-icon="mdi-map-marker-question-outline"
        >
        </v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-textarea
          v-model="producto.cobertura_briefing"
          rows="3"
          outlined
          auto-grow
          counter="250"
          persistent-hint
          hint="Describe generalidades o indicaciones del evento a cubrir."
          label="Briefing"
          prepend-inner-icon="mdi-comment-outline"
        >
        </v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p class="text-overline mb-0">Datos de la publicación</p>
        <v-divider class="my-2"></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <Datepicker
          label="Fecha de publicación"
          :dense="true"
          @fecha-seleccionada="updateFechaPublicacion"
        ></Datepicker>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-btn rounded color="primary" dark @click="validateFormValues">
          Agregar Banner
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import Datepicker from '@/components/Datepicker.vue';
import Timepicker from '@/components/Timepicker.vue';

export default {
  name: 'FormSmartcontent',
  components: {
    Datepicker,
    Timepicker
  },
  data() {
    return {
      tipos: [
        { id: 7, nombre: 'Fotoreportaje' },
        { id: 8, nombre: 'Cobertura' },
        { id: 9, nombre: 'Videoreportaje' }
      ],
      producto: {
        tipo: { nombre: '' },
        cobertura_fecha: [],
        cobertura_hora: '',
        cobertura_direccion: '',
        cobertura_direccion_punto_referencia: '',
        cobertura_briefing: '',
        publicacion_fecha: [],
        impresiones_cantidad: [],
        publicar_FB: true,
        publicar_TW: true,
        publicar_IG: false
      },
      rules: {
        required(value) {
          return !!value || 'Este campo es requerido';
        },
        onlyNumbers(value) {
          const matchNumbers = /^[0-9]+$/g;
          return (
            matchNumbers.test(value) ||
            'Sólo se admiten números enteros positivos'
          );
        },
        onlyFloatNumbers(value) {
          const matchNumbers = /^\d{1,}\.?(\d{1,2})?$/g;
          return (
            matchNumbers.test(value) ||
            'Sólo se admiten números con dos posiciones decimales'
          );
        }
      }
    };
  },
  methods: {
    validateFormValues() {
      console.log('hm');
    },
    updateFechaCobertura(nuevaFecha) {
      this.producto.cobertura_fecha = nuevaFecha;
    },
    updateHoraCobertura(nuevaHora, nuevaHoraAMPM) {
      console.log(nuevaHora, nuevaHoraAMPM);
      this.producto.cobertura_hora = nuevaHora;
    },
    updateFechaPublicacion(nuevaFecha) {
      this.producto.publicacion_fecha = nuevaFecha;
    }
  }
};
</script>

<style></style>
