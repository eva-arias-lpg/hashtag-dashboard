<template>
  <v-form>
    <v-row ref="formBanner" @submit.prevent="submitBanner">
      <v-col cols="12" md="6">
        <v-select
          v-model="banner.tipo"
          dense
          :items="tipos"
          :item-text="
            item =>
              item.nombre.charAt(0).toUpperCase() +
              item.nombre.slice(1, item.nombre.length)
          "
          item-value="id"
          label="Tipo de Banner"
          return-object
          outlined
          required
        />
        <!-- item.nombre.charAt(0).toUpperCase() +
              item.nombre.slice(1, item.nombre.length) -->
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          type="number"
          v-model="banner.impresiones_cantidad"
          dense
          required
          label="Cantidad de impresiones"
          persistent-hint
          :rules="[rules.required, rules.onlyNumbers]"
          prepend-inner-icon="mdi-eye"
          outlined
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="banner.url_destino"
          :rules="[rules.required]"
          dense
          required
          outlined
          label="URL redirección"
          prepend-inner-icon="mdi-web"
          persistent-hint
          hint="Dirección del sitio web al que se redirigirá al hacer click en el banner."
        />
      </v-col>
      <v-col cols="12" md="6">
        <Datepicker
          label="Fechas de publicación"
          :dense="true"
          @fecha-seleccionada="updateBannerFechas"
        ></Datepicker>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <v-checkbox v-model="banner.publicar_LPG" label="Publicar en LPG">
        </v-checkbox>
      </v-col>
      <v-col cols="12" md="4">
        <v-checkbox
          v-model="banner.publicar_EE"
          label="Publicar en El Economista"
        >
        </v-checkbox>
      </v-col>
      <v-col cols="12" md="4">
        <v-checkbox v-model="banner.publicar_EG" label="Publicar en El Gráfico">
        </v-checkbox>
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

export default {
  name: 'FormBanner',
  components: {
    Datepicker
  },
  data() {
    return {
      tipos: [
        { id: 1, nombre: 'tradicional' },
        { id: 2, nombre: 'rich media' },
        { id: 3, nombre: 'rich media video' },
        { id: 4, nombre: 'prueba' }
      ],
      banner: {
        tipo: { nombre: '' },
        url_destino: '',
        publicar_LPG: true,
        publicar_EE: false,
        publicar_EG: false,
        impresiones_cantidad: 0,
        fechas_publicacion: [],
        publicar_desde: '',
        publicar_hasta: ''
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
      console.log(
        'Aqui debemos de validar y si todo esta en orden, emitimos un evento.'
      );
    },
    updateBannerFechas(fechas) {
      console.log('evento', fechas);
      this.banner.publicar_desde = fechas[0];
      this.banner.publicar_hasta = fechas[1];
    }
  }
};
</script>

<style></style>
