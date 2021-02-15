<template>
  <v-form>
    <v-row ref="formEmailing" @submit.prevent="submitEmailing">
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
          label="Tipo de Emailing"
          return-object
          outlined
          required
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="producto.remitente"
          dense
          required
          label="Remitente"
          persistent-hint
          :rules="[rules.required]"
          prepend-inner-icon="mdi-email-send-outline"
          outlined
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="producto.url_destino"
          dense
          outlined
          label="URL redirección"
          prepend-inner-icon="mdi-web"
          persistent-hint
          hint="Llenar este campo si es necesario redirigir al destinatario a un sitio web."
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="producto.asunto"
          dense
          outlined
          label="Asunto"
          prepend-inner-icon="mdi-email-edit-outline"
          persistent-hint
          hint="Llenar este campo si es necesario redirigir al destinatario a un sitio web."
        />
      </v-col>
    </v-row>
    <v-row id="frmEmailing-fechas-publicacion">
      <v-col
        cols="12"
        md="6"
        v-for="(item, index) in producto.fechas_envio"
        :key="index"
      >
        <Datepicker
          label="Fecha de envío"
          :dense="true"
          @fecha-seleccionada="updateFechas($event, index)"
        ></Datepicker>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-btn
          color="secondary"
          dark
          small
          @click="producto.fechas_envio.push([])"
        >
          Nueva fecha de envío
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-6">
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
  name: 'FormEmailing',
  components: {
    Datepicker
  },
  data() {
    return {
      tipos: [
        { id: 5, nombre: 'Tradicional' },
        { id: 6, nombre: 'HTML' }
      ],
      producto: {
        tipo: { nombre: '' },
        remitente: '',
        asunto: '',
        url_destino: '',
        fechas_envio: [[]]
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
      console.log('validatin');
    },
    updateFechas(fechas, index) {
      // Actualizamos el array de fechas
      this.producto.fechas_envio[index] = fechas;
    }
  }
};
</script>

<style></style>
