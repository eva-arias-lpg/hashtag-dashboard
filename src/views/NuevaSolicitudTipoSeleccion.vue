<template>
  <v-row justify="start">
    <v-col v-for="type in requestTypes" :key="type.title" md="3">
      <v-card elevation="5" outlined>
        <v-img
          :src="require('../assets/img/' + type.img)"
          :aspect-ratio="16 / 9"
          contain
        >
          <!-- class="white--text align-end"
            gradient="0deg, rgba(0,0,0,0.6699813714548319) 0%, rgba(255,255,255,0) 30%" -->
          <!-- <template v-slot:default>
            </template> -->
        </v-img>
        <v-card-title class="font-weight-bold">{{ type.title }}</v-card-title>

        <v-card-text
          style="height: 150px; max-height: 200px"
          class="overflow-y-auto"
        >
          {{ type.desc }}
        </v-card-text>

        <v-card-actions class="mt-4">
          <!-- TODO:  -->
          <v-btn
            depressed
            block
            color="#00e676"
            class="font-weight-bold"
            :to="{
              name: 'nuevaSolicitudFormulario',
              params: {
                tipo: `${transformTitle(
                  type.hasOwnProperty('name') ? type.name : type.title
                )}`
              }
            }"
          >
            Solicitar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'nuevaSolicitudTipoSeleccion',
  data() {
    return {
      // Opciones de pedidos
      requestTypes: [
        {
          title: 'Paquete de Productos',
          name: 'Paquete',
          desc:
            'Seleccionando esta opción puedes agrupar en una sola solicitud más de un producto.',
          img: 'card_package.svg'
        },
        {
          title: 'Banner',
          desc:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam omnis cum ratione adipisci exercitationem iure facilis expedita. Vitae temporibus et beatae possimus laudantium quod, amet nam molestiae ipsam sapiente dolore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam omnis cum ratione adipisci exercitationem iure facilis expedita. Vitae temporibus et beatae possimus laudantium quod, amet nam molestiae ipsam sapiente dolore.',
          img: 'card_banner_v2.svg'
        },
        {
          title: 'Emailing',
          desc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sit necessitatibus molestias suscipit officia. Cum tenetur, dolorum quia culpa hic perspiciatis. Magnam fugiat dicta autem necessitatibus numquam saepe ullam repellendus.',
          img: 'card_emailing.svg'
        },
        {
          title: 'Bolsa De Trabajo',
          desc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quam eius ipsum ipsam! Temporibus, voluptatum ut nihil debitis vitae a impedit alias earum officiis! Eveniet ducimus ea aut consequatur omnis.',
          img: 'card_bolsatrabajo.svg'
        },
        {
          title: 'SmartContent',
          desc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate error officiis soluta sint rem quidem labore eum magni aliquid ratione, autem voluptatum consequatur iure, nostrum vel, sed molestiae nam?',
          img: 'card_smartcontent.svg'
        }
      ]
    };
  },
  methods: {
    transformTitle(title) {
      return title.replace(/ /g, '').toLowerCase();
    }
  }
};
</script>
