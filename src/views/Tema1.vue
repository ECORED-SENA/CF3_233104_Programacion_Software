<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Características Lenguaje Unificado de Modelado (UML) 

    .fullbg.bg--gray.mb-5
      .row.justify-content-center.align-items-center.py-4
        .col-lg-3.col-md-6.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t1/t1_01.png", alt="alt")
        .col-lg-9(data-aos="fade-left")
          p Con el nacimiento de la Programación Orientada a Objetos (POO) se establecieron una variedad de lenguajes, métodos, simbologías usadas para detallar el desarrollo de los diferentes sistemas. Indudablemente esta situación generó un desconcierto en los programadores de #[em software]; tratando de darle solución a este inconveniente aparece el Lenguaje de Modelado Unificado (#[em Unified Modeling Language –UML])

          .row
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/rectangle_00.svg", alt="alt").img30
            .col
              p.mb-0 El lenguaje de Modelado Unificado UML proporciona un grupo de herramientas que facilitan realizar el modelado (análisis y diseño) de los sistemas que son orientados a objetos. Indicando una serie de normas técnicas que representan de manera gráfica el camino y la estructura de un sistema determinado a los programadores, analistas, desarrolladores, diseñadores etc.

    .bloque-texto-g.cstm_right.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in")    
      .bloque-texto-g__texto.p-4
        p “El UML (Lenguaje Unificado de Modelado) es una de las herramientas más emocionantes en el mundo actual del desarrollo de sistemas. Esto se debe a que permite a los creadores de sistemas generar diseños que capturen sus ideas en una forma convencional y fácil de comprender para comunicarlas a otras personas”. <br><br>Schmuller,2000, p.24.
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t1/t1_02.png')})`}"
      )
   

    p(data-aos="fade-left").mb-5 A continuación, se menciona la evolución del Lenguaje Unificado de Modelado (UML)

    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.1 Evolución del Lenguaje Unificado de Modelado UML

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-6.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_03.svg", alt="alt")
      .col-lg-9(data-aos="fade-left")
        .bloque-texto-c.bg--gray.p-4.mb-4
          i.fas.fa-quote-right
          p.ms-5.mb-2 El UML tiene su inicio a finales de los años 80, Inicialmente basado en el método Booch, desarrollado por el diseñador de #[em Software] Grady Booch, en el año de 1994 el científico de la computación James Rumbaugh le implementó el modelado de objetos, en 1995 se adicionaron a estas otros principios y otras metodologías, unas de estás adicionadas por Ivar Jacobson.
          p.text-end #[strong Booch (2006)]

        .row(data-aos="fade-left")
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/recursos/rectangle_00.svg", alt="alt").img30
          .col
            p.mb-0 La primera versión oficial UML 1. Se lanzó en el año de 1997 con la unión y liderato de Booch, Rumbaugh y Jacobson, la cual ofrece una metodología que contiene varios estándares, #[strong donde su principal objetivo es que todos los diagramas tengan coherencia]. En el año 2005 se divulgó la versión de UML 2.0 cuyo contenido estaba orientado principalmente a la visión Orientada a Objetos, de ahí en adelante se realizan nuevas versiones basadas en UML 2.0.

    p(data-aos="fade-left").mb-5 A continuación, se muestra un recurso de aprendizaje con la evolución mencionada.

    .bg--gray.brd--rad_02.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row
          figure
            img(src="@/assets/curso/temas/t1/t1_04.png", alt="alt")
        .row
          figure
            img(src="@/assets/curso/temas/t1/t1_05.png", alt="alt")

    .row.justify-content-center
      .col-lg-3.col-md-8.col-10.mb-4.mb-lg-0(data-aos="flip-left")
        .crd.crd--avatarV.clr--01
          .crd--avatarV--img
            figure
              img(src="@/assets/curso/temas/t1/t1_06.png", alt="alt").img180.m-auto
          .crd--avatarV--body
            p.text-white.mb-0 #[strong Grady Booch], ingeniero de sistema e investigador, antes del 95.

      .col-lg-3.col-md-8.col-10.mb-4.mb-lg-0(data-aos="flip-left")
        .crd.crd--avatarV.clr--02
          .crd--avatarV--img
            figure
              img(src="@/assets/curso/temas/t1/t1_07.png", alt="alt").img180.m-auto
          .crd--avatarV--body
            p.mb-0 #[strong Jim Rumbaugh (OMT)], antes del 95.

      .col-lg-3.col-md-8.col-10(data-aos="flip-left")
        .crd.crd--avatarV.clr--01
          .crd--avatarV--img
            figure
              img(src="@/assets/curso/temas/t1/t1_08.png", alt="alt").img180.m-auto
          .crd--avatarV--body
            p.text-white.mb-0 #[strong Ivar Jacobson], UML 0.8 y 0.91 1996

    separador

    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.2 Características generales del Lenguaje Unificado de Modelado (UML) 

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t1/t1_09.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Como se mencionó anteriormente UML es un lenguaje capaz de brindar unas reglas que facilitan la comunicación de un sistema por medio de representaciones gráficas de este, indicando como hacer la creación y la lectura de los modelos. Aunque hay una gran variedad de características del UML según ( Booch, 2006)  se pueden resumir en las que se nombran a continuación, por lo que le invito a revisar el siguiente recurso de aprendizaje:

    h3(data-aos="fade-right").mb-5 Lenguaje Unificado de Modelado (UML)

    .row.justify-content-center.mb-5(data-aos="zoom-in")  
      .col-lg-10
        figure
          img(src="@/assets/curso/temas/t1/t1_10.svg", alt="alt")

    p(data-aos="fade-left").mb-5 En la siguiente figura se muestran las características básicas del UML, las cuales se mencionaron anteriormente.

    .row.justify-content-center.mb-5(data-aos="zoom-in")  
      .col-lg-6
        .titulo-sexto.color-acento-botones          
          span Características del UML
        figure
          img(src="@/assets/curso/temas/t1/t1_11.svg", alt="alt")

    .cajon.cjn--yellow.p-4(data-aos="zoom-in")
      p.mb-0 Las características del UML se aplican en las fases de Desarrollo de #[em software], la primera fase es la de análisis y especificación de requisitos que se detalla a continuación.    
    


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
