<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Modelo C4

    .fullbg.bg--gray.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t6/t6_01.svg", alt="alt")

        .col-lg-8(data-aos="fade-left")
          p El modelo C4 es la técnica de notación gráfica utilizada para modelar la arquitectura de sistemas de #[em software].Se basa en la descomposición de la estructura del sistema en contenedores y componentes.

          .row.mb-4
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/rectangle_00.svg", alt="alt").img30
            .col
              p.mb-0 Del mismo modo, el modelo C4 hace relación a un conjunto ordenado de diagramas en arquitectura de #[em software] para relacionar el contexto, contenedores, los componentes y el código realizado. Además, las 4C, hacen referencia a contexto, contenedores, componentes y clases o código.

          .cajon.cjn--yellow.p-4(data-aos="zoom-in")
            p.mb-0 El consultor Simón Brown propuso el modelo C4, el cual permite visualizar y comunicar las arquitecturas de #[em software] de manera sencilla y efectiva, propone el poder hacer “zoom in/zoom out” para variar los detalles dependiendo de los objetivos y la aplicación que se programa. El modelo C4 es la manera más sencilla de hacer entender la arquitectura del #[em software] en sus diferentes niveles de abstracción, es decir se deben saber explicar bien en cada una de las fases del modelo C4. Es como si se aplicara un Zoom a Google Maps, para ir visualizando lo que se necesita investigar o conocer.        

    .row.justify-content-center.align-items-center
      .col-lg-7.order-2.order-lg-1(data-aos="fade-left")
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Diagrama de contexto del Sistema")          
            p.mb-4 Refleja la construcción del sistema de #[em software], permite tener una imagen genérica del sistema, su acoplamiento con los usuarios y la interacción con el sistema. El sistema que se modela se considera como “caja negra”, solo interesa las relaciones externas.  
            .row
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal1 = true")
                  span Ver imagen
                    i.fas.fa-search-plus.ms-2
                  .indicador--click(v-if="mostrarIndicador")

            ModalA(:abrir-modal.sync="modal1")             
              figure
                img(src="@/assets/curso/temas/t6/t6_03.png", alt="alt")

          .row(numero="2" titulo="El diagrama del contenedor")          
            p.mb-4 Este diagrama va ampliando el sistema de #[em software], mostrando los contenedores del programa, como las aplicaciones, el almacenamiento de los datos, los microservicios y el resto de componentes en el sistema de #[em software].

            .row
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal2 = true")
                  span Ver imagen
                    i.fas.fa-search-plus.ms-2
                  .indicador--click(v-if="mostrarIndicador")

            ModalA(:abrir-modal.sync="modal2")             
              figure
                img(src="@/assets/curso/temas/t6/t6_04.png", alt="alt")

          .row(numero="3" titulo="Diagrama de componentes")          
            p.mb-4 Este diagrama expande un contenedor individual mostrando los componentes que contiene. Cada uno de estos se asigna a abstracciones, como por ejemplo agrupaciones de códigos.

            .row
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal3 = true")
                  span Ver imagen
                    i.fas.fa-search-plus.ms-2
                  .indicador--click(v-if="mostrarIndicador")

            ModalA(:abrir-modal.sync="modal3")             
              figure
                img(src="@/assets/curso/temas/t6/t6_05.png", alt="alt")   

          .row(numero="4" titulo="El Código")          
            p.mb-4 Si se necesita se amplia un componente individual para mostrar su implementación. En este componente se debe mostrar los elementos de código, interfaces y clases utilizadas en la programación.    

            .row
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal4 = true")
                  span Ver imagen
                    i.fas.fa-search-plus.ms-2
                  .indicador--click(v-if="mostrarIndicador")

            ModalA(:abrir-modal.sync="modal4")             
              figure
                img(src="@/assets/curso/temas/t6/t6_06.png", alt="alt")

      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t6/t6_02.png", alt="alt")
          




</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
