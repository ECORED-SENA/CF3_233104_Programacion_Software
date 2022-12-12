<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Ciclo de vida del desarrollo del #[em software]

    .fullbg.bg--gray.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.col-md-6.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t5/t5_01.svg", alt="alt")

        .col-lg-8(data-aos="fade-left")
          p Actualmente, para el proceso de desarrollo del #[em software] se debe hacer énfasis en una serie de instrucciones obligatorias que deben garantizar la eficiencia, la seguridad, la fiabilidad, seguridad de los programas y responder satisfactoriamente a las necesidades de los usuarios.

          .row.mb-4
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/rectangle_00.svg", alt="alt").img30
            .col
              p.mb-0 De igual forma, el ciclo del desarrollo del #[em software], también conocido como #[em Systems Development Life Cycle, SDLC], contempla las fases necesarias para validar el desarrollo del #[em software], garantizando así el cumplimiento de los requisitos para aplicar los procedimientos de desarrollo, verificarlos y asegurar que los métodos desarrollados son los apropiados en la aplicación. 

          .cajon.cjn--yellow.p-4(data-aos="zoom-in")
            p.mb-0 La necesidad de establecer un ciclo del desarrollo del #[em software], radica en los altos costos económicos que se pueden generar cuando se detectan tarde en la fase de implementación. De esta manera, y utilizando las metodologías apropiadas, se pueden detectar a tiempo para que el equipo de desarrollo se logre centrar en la óptima calidad del #[em software], con el cumplimiento de los tiempos de entrega y los costes asociados. 

    .row.mb-5(data-aos="fade-right")
      .col-auto
        .cstmH3_mint
          h3.mb-0 ISO / IEC 12207 

    .fullbg.bg--gray.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t5/t5_02.png", alt="alt")
        .col-lg-8(data-aos="fade-left")
          .row
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/rectangle_00.svg", alt="alt").img30
            .col
              p.mb-0 Del mismo modo, existe la ISO/IEC 12207 – #[em Information Technology / Software Life Cycle aplicable] a PyMES de manera fácil y económica, con pocos recursos y en poco tiempo. Este modelo proporciona un marco de trabajo ligero de medida de la madurez y cumplimiento del proceso; y un modelo de proceso de referencia que se presenta en la siguiente imagen (Pino, 2002).

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-8
        .titulo-sexto.color-acento-botones          
          span ISO/IEC 12207

        figure
          img(src="@/assets/curso/temas/t5/t5_03.svg", alt="alt")

    .row.mb-5(data-aos="fade-right")
      .col-auto
        .cstmH3_mint
          h3.mb-0 Fases del ciclo de vida del desarrollo del #[em software]

    
    figure(data-aos="zoom-in")
      img(src="@/assets/curso/temas/t5/t5_04.png", alt="alt")
    .row.justify-content-center.top--negMargin(data-aos="fade").mb-5
      .col-lg-10
        .crd.bg--gray.shadow.brd--rad_01.p-4
          p.mb-0 Durante el proceso de desarrollo del #[em software] se deben implementar las fases en orden y obligatorias para dar calidad el #[em software], adelantándose a una entrega de programa con unos resultados finales esperados, ofreciendo a los usuarios finales la seguridad, eficiencia, estabilidad y fiabilidad de su uso.

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .titulo-sexto.color-acento-botones          
          span  Fases del ciclo de vida del desarrollo del #[em software]

        figure
          img(src="@/assets/curso/temas/t5/t5_05.svg", alt="alt")

    p(data-aos="fade-left").mb-4 Para la realización de un diagrama de diseño del ciclo de vida del desarrollo del #[em software], es importante reflejar los pasos anteriores en cuanto a las fases. 

    .row.justify-content-center.align-items-center
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t5/t5_06.png", alt="alt")
      .col-lg-8(data-aos="fade-left")
        p La descripción de las fases se podría tomar desde un caso de estudio, en la cual los personajes o entidades que participan son los actores. De igual forma, el caso de uso refleja la secuencia de las interacciones a desarrollar en el sistema y la respuesta que se tendrá en los actores. 

        .row.mb-4
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/recursos/rectangle_00.svg", alt="alt").img30
          .col
            p.mb-0 Así, se puede adecuar el caso de uso reflejando las fases que debe cumplir el ciclo y, por lo tanto, sería una gran ayuda para los proyectos de #[em software], puesto que va reflejando el paso a paso continuo y en estricto orden de cada una de las fases incluidas en el ciclo. 

        .cajon.cjn--yellow.p-4(data-aos="zoom-in")
          p.mb-0 Además, el relacionar cada una de las fases se podría realizar en cualquier diagrama o figura para lograr representarlo con la única condición, que sea obligatoria y en el orden consecutivo como se presentan cada una de las fases.

    




</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
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
