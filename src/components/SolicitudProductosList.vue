<template>
  <v-sheet elevation="3" rounded="lg" outlined class="px-6 pt-4">
    <v-row justify="space-between">
      <v-col cols="12" md="8">
        <h2>Productos solicitados</h2>
        <p class="text-subtitle-1">
          Estos son los productos asociados a la solicitud
        </p>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <NuevoProductoSolicitudDialog :showDialog="showDialogNuevoProducto" />
      </v-col>
    </v-row>
    <v-divider class="mt-2" />
    <v-row justify="start">
      <v-col cols="12" align="center">
        <template v-if="tblItems.length <= 0">
          <v-img
            src="@/assets/img/empty_clipboard.svg"
            contain
            :aspect-ratio="16 / 9"
            max-width="500"
            class="my-4"
          ></v-img>
          <p
            class="py-4 text-subtitle-1 font-weight-bold green--text text--accent-3"
          >
            Esta solicitud no tiene productos asociados...<br />Aún.
          </p>
        </template>
        <v-data-table
          v-else
          :headers="tblHeaders"
          :items="tblItems"
          :footer-props="{
            'items-per-page-options': [5, 10, 15],
            options: { itemsPerPage: 5 }
          }"
        >
          <!-- Estilo para la columna "Tipo" -->
          <template v-slot:item.id_tipo="{ item }">
            <v-chip :color="getColor(item.id_tipo)" dark class="text-button">
              {{ item.tipo.toUpperCase() }}
            </v-chip>
          </template>
        </v-data-table>
      </v-col>
      <!-- <template v-if="productos.length <= 0">
      </template> -->
    </v-row>
  </v-sheet>
</template>

<script>
import NuevoProductoSolicitudDialog from '@/components/NuevoProductoSolicitudDialog.vue';

export default {
  name: 'SolicitudProductosList',
  components: {
    NuevoProductoSolicitudDialog
  },
  props: {
    tblItems: {
      type: Array,
      required: false,
      default: () => {
        return [];
      }
    }
  },
  data: () => {
    return {
      showDialogNuevoProducto: false,
      frmStepNuevoProducto: 0,
      tblHeaders: [
        {
          text: 'Tipo',
          value: 'id_tipo'
        },
        {
          text: 'Subtipo',
          value: 'subtipo'
        },
        {
          text: 'Creado',
          value: 'fecha_creado'
        }
      ]
    };
  },
  methods: {
    getColor: name => {
      switch (name) {
        // case 'banner':
        case 1:
          return 'deep-purple';
        // case 'emailing':
        case 2:
          return 'blue';
        // case 'sma*¡*rtcontent':
        case 3:
          return 'light-blue';
        // case 'socialcontent':
        case 4:
          return 'cyan';
        // case 'bolsa de trabajo':
        case 5:
          return 'teal';
        default:
          return 'blue-grey';
      }
    }
  }
};
</script>

<style></style>
