<template>
  <v-row justify="start">
    <v-col cols="12">
      <FormSolicitud />
    </v-col>
    <v-col cols="12">
      <SolicitudProductosList :tblItems="dataSolicitudProductos" />
    </v-col>
  </v-row>
</template>

<script>
import FormSolicitud from '../components/FormSolicitud.vue';
import SolicitudProductosList from '@/components/SolicitudProductosList.vue';

export default {
  name: 'NuevaSolicitudFormulario',
  components: { FormSolicitud, SolicitudProductosList },
  data() {
    return {
      dataSolicitudProductos: [
        {
          id_solicitud: 1,
          id_producto: 2,
          id_tipo: 1,
          tipo: 'banner',
          id_subtipo: 1,
          subtipo: 'Tradicional',
          fecha_creado: '12/01/2021'
        },
        {
          id_solicitud: 1,
          id_producto: 2,
          id_tipo: 5,
          tipo: 'bolsa de trabajo',
          id_subtipo: 2,
          subtipo: 'Premium',
          fecha_creado: '12/01/2021'
        }
      ]
    };
  }
};
</script>

<style></style>
