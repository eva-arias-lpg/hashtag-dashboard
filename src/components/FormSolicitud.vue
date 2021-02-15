<template>
  <v-sheet elevation="3" rounded="lg" outlined class="px-6 pt-4">
    <h2>Datos de la solicitud</h2>
    <v-divider class="mt-2"></v-divider>
    <v-form ref="formDatosSolicitud" @submit.prevent="submit">
      <v-container fluid class="mt-4">
        <v-row justify="start">
          <v-col cols="12" md="3">
            <v-text-field
              v-model="formDatosSolicitud.odi"
              required
              label="Número de ODI"
              hint="Número entre 6 y 9 dígitos."
              persistent-hint
              :rules="[rules.required, rules.ruleODI]"
              prepend-inner-icon="mdi-pound"
              outlined
            />
          </v-col>
          <v-col cols="12" md="5">
            <v-text-field
              v-model="formDatosSolicitud.empresa"
              required
              label="Nombre de la Empresa"
              prepend-inner-icon="mdi-briefcase-outline"
              :rules="[rules.required]"
              outlined
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              type="number"
              v-model="formDatosSolicitud.inversion"
              required
              label="Inversión"
              prepend-inner-icon="mdi-currency-usd"
              :rules="[rules.required, rules.onlyFloatNumbers]"
              outlined
            />
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="formDatosSolicitud.indicaciones"
              rows="3"
              outlined
              auto-grow
              counter="250"
              persistent-hint
              prepend-inner-icon="mdi-comment-outline"
              hint="Puedes dejar indicaciones o comentarios adicionales sobre la solicitud para el Team Hashtag"
            >
              <template v-slot:label>
                <div>Indicaciones <small>(opcional)</small></div>
              </template>
            </v-textarea>
          </v-col>
          <v-col cols="12">
            <v-file-input
              outlined
              persistent-hint
              prepend-icon=""
              prepend-inner-icon="mdi-paperclip"
              multiple
              counter
              hint="Agrega archivos de referencia que complementen las indicaciones."
            >
              <template v-slot:label>
                <div>Archivos adjuntos <small>(opcional)</small></div>
              </template>
            </v-file-input>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  name: 'FormSolicitud',
  data() {
    return {
      formDatosSolicitud: {
        odi: '',
        empresa: '',
        indicaciones: '',
        inversion: '12.50'
      },
      rules: {
        required(value) {
          return !!value || 'Este campo es requerido';
        },
        ruleODI(value) {
          const matchNumbers = /^[0-9]{6,9}$/g;
          return (
            matchNumbers.test(value) ||
            '¡Debe de ser un número de 6 a 9 dígitos!'
          );
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
    // addNewProduct: type => { productos.push(type) }
  }
};
</script>

<style></style>
