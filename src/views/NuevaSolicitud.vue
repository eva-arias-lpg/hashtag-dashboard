<template>
  <div class="mx-10">
    <h1 class="mt-5 mb-10">Crear nueva solicitud</h1>
    <router-view> </router-view>
  </div>
</template>
<script>
export default {
  name: 'nuevaSolicitud',
  data() {
    return {
      // Opciones de pedidos
      requestTypes: [
        {
          title: 'Banner',
          desc:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam omnis cum ratione adipisci exercitationem iure facilis expedita. Vitae temporibus et beatae possimus laudantium quod, amet nam molestiae ipsam sapiente dolore.',
          img: 'card_banner_v2.svg'
        },
        {
          title: 'Emailing',
          desc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sit necessitatibus molestias suscipit officia. Cum tenetur, dolorum quia culpa hic perspiciatis. Magnam fugiat dicta autem necessitatibus numquam saepe ullam repellendus.',
          img: 'card_emailing.svg'
        },
        {
          title: 'Bolsa de Trabajo',
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
    normalizeTitle(title) {
      return title.replace(/ /g, '-').toLowerCase();
    }
  }
};
</script>
