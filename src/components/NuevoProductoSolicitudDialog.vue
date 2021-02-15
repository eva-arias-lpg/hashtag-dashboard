<template>
  <v-dialog v-model="show" max-width="1000px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        block
        large
        rounded
        elevation="1"
        color="primary"
        ><v-icon left dark>mdi-plus</v-icon>
        Agregar producto
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        Nuevo producto
      </v-card-title>
      <v-card-subtitle>
        Sigue los siguientes pasos para agregar un producto a la solicitud
      </v-card-subtitle>
      <v-card-text>
        <v-stepper v-model="step" vertical>
          <v-stepper-step :complete="step > 1" step="1">
            Elige el tipo de producto
          </v-stepper-step>
          <v-stepper-content step="1">
            <v-container fluid>
              <v-row justify="center" dense>
                <v-col cols="12">
                  <p class="text-body-1">
                    Primero, selecciona el tipo de producto que deseas agregar a
                    la solicitud
                  </p>
                </v-col>
                <v-col cols="12">
                  <v-select
                    v-model="frmDataProducto.tipo"
                    :items="productosTipos"
                    :item-text="
                      item =>
                        item.nombre.charAt(0).toUpperCase() +
                        item.nombre.slice(1, item.nombre.length)
                    "
                    item-value="id"
                    label="Selecciona"
                    return-object
                    outlined
                  />
                </v-col>
                <v-col cols="12">
                  <v-btn
                    rounded
                    color="primary"
                    dark
                    @click="continueStepper(step)"
                  >
                    Continuar
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-stepper-content>
          <v-stepper-step :complete="step > 2" step="2">
            Completa los campos requeridos para el producto
          </v-stepper-step>
          <v-stepper-content step="2">
            <div class="mx-2">
              <v-row dense>
                <v-col cols="12">
                  <p class="text-button black--text">
                    Datos del {{ capitalize(frmDataProducto.tipo.nombre) }}
                  </p>
                </v-col>
                <v-col cols="12">
                  <component :is="frmDataProducto.tipo.nombre"></component>
                  <!-- <FormBanner
                    v-if="frmDataProducto.tipo.nombre === 'banner'"
                  ></FormBanner>
                  <FormBanner
                    v-if="frmDataProducto.tipo.nombre === 'banner'"
                  ></FormBanner> -->
                </v-col>
                <!-- <v-col cols="12">
                  <v-btn
                    rounded
                    color="primary"
                    dark
                    @click="continueStepper(step)"
                  >
                    Continuar
                  </v-btn>
                </v-col> -->
              </v-row>
            </div>
          </v-stepper-content>
        </v-stepper>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'NuevoProductoSolicitudDialog',
  components: {
    banner: () => import('@/components/FormBanner.vue'),
    emailing: () => import('@/components/FormEmailing.vue'),
    smartcontent: () => import('@/components/FormSmartcontent.vue')
  },
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      step: 1,
      productosTipos: [
        { id: 1, nombre: 'banner' },
        { id: 2, nombre: 'smartcontent' },
        { id: 3, nombre: 'socialcontent' },
        { id: 4, nombre: 'emailing' }
      ],
      frmDataProducto: {
        tipo: { nombre: '' }
      }
    };
  },
  computed: {
    show: {
      get() {
        return this.showDialog;
      },
      set(newValue) {
        return newValue;
      }
    }
  },
  methods: {
    continueStepper(step) {
      if (this.checkStepConditions(step)) this.step++;
      else console.log('CUMPLI LA CONDICION');
    },
    checkStepConditions(paso) {
      // Vamos a verificar que se cumplan las condiciones antes de seguir al siguiente paso
      if (paso === 1) {
        const productoSeleccionado = this.frmDataProducto.tipo.nombre;

        // Si productoSeleccionado es una valor "falsy" (vacio o nulo) no pasa la validez.
        const productoSeleccionadoEsValido = this.productosTipos.find(
          tipo => tipo.nombre === productoSeleccionado
        );

        return productoSeleccionado && productoSeleccionadoEsValido;
      }
    },
    capitalize(texto) {
      return texto
        .split(' ') // Obtenemos las palabras
        .reduce(
          // Y cada palabra la escribimos con mayúscula
          (p, c) => p + c.charAt(0).toUpperCase() + c.slice(1, c.length) + ' ',
          ''
        )
        .trim();
    }
  }
};
</script>

<style></style>
