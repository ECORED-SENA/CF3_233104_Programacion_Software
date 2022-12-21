<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Historias de usuario 

    .fullbg.bg--gray.p-4.mb-5
      .row.justify-content-center
        .col-xl-7
          p(data-aos="fade-left").mb-4 Las historias de Usuario son una forma sencilla de representar los requisitos de un sistema de información, son creadas en una o dos oraciones y sobre todo escritas en un lenguaje muy común y legible para el usuario. Son llamadas #[em User Stories], convirtiéndose en un estándar muy utilizado en el momento de la definición de requisitos. Estas surgen en XP (1999) y se exaltan concluyentemente con Mike Cohn (en #[em “User Stories Applied: For Agile Software Development”], 2004) que establece el patrón para definirlas, siendo su simplicidad la razón de su popularidad, las cuales se muestran a continuación.

          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-8.col-10.mb-4.mb-lg-0(data-aos="flip-left")
              .bg--white.brd--rad_02.shadow.p-3
                figure.mb-4
                  img(src="@/assets/curso/temas/t3/t3_02.svg", alt="alt").img75.m-auto
                h4.text-center.mb-1  Cómo
                p.text-center (Rol del usuario)

            .col-lg-4.col-md-8.col-10.mb-4.mb-lg-0(data-aos="flip-left")
              .bg--white.brd--rad_02.shadow.p-3
                figure.mb-4
                  img(src="@/assets/curso/temas/t3/t3_03.svg", alt="alt").img75.m-auto
                h4.text-center.mb-1  Quiero
                p.text-center (Objetivo)

            .col-lg-4.col-md-8.col-10.mb-4.mb-lg-0(data-aos="flip-left")
              .bg--white.brd--rad_02.shadow.p-3
                figure.mb-4
                  img(src="@/assets/curso/temas/t3/t3_04.svg", alt="alt").img75.m-auto
                h4.text-center.mb-1 Para poder
                p.text-center (Beneficio)

        .col-xl-5.d-none.d-xl-flex(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t3/t3_01.svg", alt="alt")

    p(data-aos="fade-left").mb-5 Como se muestra en la figura anterior las historias de usuario están compuestos de 3 elementos que se describen a continuación.

    #t_3_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.1 Elementos de una historia de Usuario

    p(data-aos="fade-left").mb-5 Una historia de usuario está compuesta por tres elementos los cuales son esenciales en el proceso:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-8
        .titulo-sexto.color-acento-botones          
          span Elementos de una Historia de Usuario

        figure
          img(src="@/assets/curso/temas/t3/t3_05.svg", alt="alt")

    p(data-aos="fade-left").mb-5 A continuación, se hace la descripción de los elementos de una historia de usuario según Cohn, M. (2018):

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
      .row.justify-content-center.ps-5(titulo="Tarjeta (Card)")
        p Es una frase que sintetiza una necesidad dada en una conversación entre el usuario y el dueño del producto, escrita en una tarjeta, es comúnmente usada en el formato rol-objetivo- beneficio, como se mostro anteriormente, lo más importante es que son escritas teniendo en cuenta la visión el usuario.

        .col-lg-6 
          p Su estructura es:  

          .row.justify-content-center
            .col-lg-10.mb-4          
              .crd.crd--avatarH.clr--01
                .row
                  .col-auto
                    figure
                      img(src="@/assets/curso/recursos/avatar_01.svg", alt="alt").img75
                  .col.gx-0
                    p.v-align.mb-0 Como [tipo de usuario] -> quién     

            .col-lg-10.mb-4           
              .crd.crd--avatarH.clr--02
                .row
                  .col-auto
                    figure
                      img(src="@/assets/curso/recursos/avatar_02.svg", alt="alt").img75
                  .col.gx-0
                    p.v-align.mb-0 Quiero [necesidad] -> qué    

            .col-lg-10.mb-4            
              .crd.crd--avatarH.clr--01
                .row
                  .col-auto
                    figure
                      img(src="@/assets/curso/recursos/avatar_01.svg", alt="alt").img75
                  .col.gx-0
                    p.v-align.mb-0 Para [beneficio esperado] -> para qué
      
        .col-lg-6
          p.mb-4 Para ver como se mostraría esta información en la tarjeta se tiene el siguiente requerimiento:

          figure
            img(src="@/assets/curso/temas/t3/t3_06.png", alt="alt")

        .row.justify-content-center
          .col-lg-12
            .hr_line
            .bg--cta.brd--rad_01.p-4
              .row.justify-content-center.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/t3/t3_07.svg", alt="alt").img90
                .col-lg
                  p.text-white Como se puede observar en el ejemplo con esta simple estructura compuesta por tres líneas:
                  ul.fa-ul
                    li
                      i.fa-li.fas.fa-layer-group.txt--orange
                      | #[span.text-white Se sabe quién (permite identificar los roles de valor).]
                    li
                      i.fa-li.fas.fa-layer-group.txt--orange
                      | #[span.text-white El que (permite identificar el problema que se resuelve).]
                    li
                      i.fa-li.fas.fa-layer-group.txt--orange
                      | #[span.text-white Para qué (lo que se espera lograr con la construcción de la historia de usuario).]  


      .row.justify-content-center.ps-5(titulo="Conversación") 
        .col-lg-6.mb-4.mb-lg-0
          p Es el proceso en el que se comunica las personas que requieren las necesidades (dueño del producto) con las personas que saben cómo solucionarlas (desarrolladores) esto se hace de la siguiente forma: 

          .cajon.cjn--yellow.p-4.mb-4
            p.mb-0 Por medio de preguntas, utilizando recursos como: gráficas, prototipos, etc.

          p.mb-0 Lo anterior busca tener claridad y concretar el contenido de las historias de usuario.          
      
        .col-lg-6
          figure
            img(src="@/assets/curso/temas/t3/t3_08.png", alt="alt")

        .row.justify-content-center.mt-4
          .col-lg-12
            .hr_line

            p.mb-4 Siguiendo con el ejemplo de “Compra una Boleta de cine”: se realizarán las siguientes preguntas:

            .bg--cta.brd--rad_01.p-4
              .row.justify-content-center.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/t3/t3_07.svg", alt="alt").img90
                .col-lg                  
                  ul.fa-ul
                    li
                      i.fa-li.fas.fa-layer-group.txt--orange
                      | #[span.text-white ¿Existe un máximo de boletas para la venta?.]
                    li
                      i.fa-li.fas.fa-layer-group.txt--orange
                      | #[span.text-white Si, solo 3 por cada usuario cuando estén en promoción.]
                    li
                      i.fa-li.fas.fa-layer-group.txt--orange
                      | #[span.text-white ¿Qué medios existen para realizar el pago de las boletas?.]   
                    li
                      i.fa-li.fas.fa-layer-group.txt--orange
                      | #[span.text-white Efectivo y Tarjeta.]  

                  p.text-white #[strong Como se mencionó anteriormente la conversación se hace con el fin de entender el problema que se quiere resolver.]  

      .row.justify-content-center.ps-5(titulo="Confirmación") 
        .col-xl-6.mb-4.mb-xl-0
          p Es la verificación del acuerdo con relación a lo que se quiere construir, permite validar si se terminó o no, o si se cumplió con lo esperado. Esta confirmación recibe el nombre de criterios de aceptación. Las funciones que cumplen los criterios de aceptación es tener claro el contexto donde se efectúa la historia de usuario y conocer fácilmente, si una historia realmente está terminada.

          p Continuando con el ejemplo “Compra una Boleta de cine” los criterios de aceptación que se pueden establecer son:

          .bg--Blue.py-2 
            p.text-center.text-white.mb-0 #[strong Criterios Aceptación]
          .bg--gray.p-3.mb-0
            ul.fa-ul.mb-0
              li
                i.fa-li.fas.fa-layer-group.txt--orange
                | Cuando se termine la boleta se debe mostrar un mensaje informando que ya no hay disponibilidad para la venta.
              li
                i.fa-li.fas.fa-layer-group.txt--orange
                | El sistema debe validar la edad para la venta de la boleta según clasificación de la película.
              li
                i.fa-li.fas.fa-layer-group.txt--orange
                | El sistema debe mostrar el valor de devolución después del pago en efectivo, en el caso de que sobre si no mostrar cero.       
      
        .col-xl-6.col-md-10.col-8
          figure
            img(src="@/assets/curso/temas/t3/t3_09.png", alt="alt")

    p(data-aos="fade-left").mb-5 Cuando se realizan historias de usuario es muy importante cumplir con las siguientes reglas:

    .row.justify-content-center.align-items-center.mb-4
      .col-xl-5.col-8.order-2.order-xl-1(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t3/t3_10.svg", alt="alt")

      .col-xl-7.order-1.order-xl-2.mb-4.mb-xl-0
        .row.justify-content-center.mb-4
          .col-lg-4.col-md-8.col-10.mb-4.mb-lg-0(data-aos="flip-left")
            .crd.crd--avatarV.clr--00
              .crd--avatarV--img
                figure
                  img(src="@/assets/curso/temas/t3/t3_11.svg", alt="alt").img90.m-auto
              .crd--avatarV--body
                p.text-center.mb-0 Ser concisa

          .col-lg-4.col-md-8.col-10.mb-4.mb-lg-0(data-aos="flip-left")
            .crd.crd--avatarV.clr--00
              .crd--avatarV--img
                figure
                  img(src="@/assets/curso/temas/t3/t3_12.svg", alt="alt").img90.m-auto
              .crd--avatarV--body
                p.text-center.mb-0 Concreta

          .col-lg-4.col-md-8.col-10.mb-4.mb-lg-0(data-aos="flip-left")
            .crd.crd--avatarV.clr--00
              .crd--avatarV--img
                figure
                  img(src="@/assets/curso/temas/t3/t3_11.svg", alt="alt").img90.m-auto
              .crd--avatarV--body
                p.text-center.mb-0 Realizar criterios de aceptación claros y específicos.

        .cajon.cjn--yellow.p-4.mb-4(data-aos="zoom-in")
          p.mb-0  Así como son necesarias estas reglas, también es fundamental una buena redacción de las historias de usuario, por esto se presenta a continuación un método que facilita afianzar la calidad en la escritura de una historia de usuario: el método “#[em Invest]”.

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .bg--cta.p-4.brd--rad_01
          .row.justify-content-start
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/t3/t3_13.svg", alt="alt").img65.m-auto
            .col-lg
              p.text-white Una buena guía para redactar Historias de Usuario con calidad es seguir el acrónimo #[em INVEST], como se muestra a continuación:
              .row.justify-content-end.align-items-center
                .col-auto
                  p.text-white.mb-0 #[strong Bill Wake 2003]
                .col-auto
                  .squareOrange

    .titulo-sexto.color-acento-botones(data-aos="fade-left")        
      span Método #[em Invest]

    .row.justify-content-center.align-items-center.mb-5    
      .col-lg-2.col-md-4.col-6.mb-4.mb-lg-0(data-aos="flip-left")
        .row.justify-content-center
          .col-auto
            .circle.orange
              .circleContent   
                figure.mb-0         
                  img(src="@/assets/curso/temas/t3/t3_14.svg", alt="alt").img65.m-auto
                p.text-center.mb-0 Independiente

      .col-lg-2.col-md-4.col-6.mb-4.mb-lg-0(data-aos="flip-left")
        .row.justify-content-center
          .col-auto
            .circle.mint
              .circleContent
                figure.mb-0
                  img(src="@/assets/curso/temas/t3/t3_15.svg", alt="alt").img65.m-auto
                p.text-center.mb-0 Negociable

      .col-lg-2.col-md-4.col-6.mb-4.mb-lg-0(data-aos="flip-left")
        .row.justify-content-center
          .col-auto
            .circle.orange
              .circleContent
                figure.mb-0
                  img(src="@/assets/curso/temas/t3/t3_16.svg", alt="alt").img65.m-auto
                p.text-center.mb-0 Valiosa
  
      .col-lg-2.col-md-4.col-6.mb-4.mb-lg-0(data-aos="flip-left")
        .row.justify-content-center
          .col-auto
            .circle.mint
              .circleContent
                figure.mb-0
                  img(src="@/assets/curso/temas/t3/t3_17.svg", alt="alt").img65.m-auto
                p.text-center.mb-0 Estimable

      .col-lg-2.col-md-4.col-6.mb-4.mb-lg-0(data-aos="flip-left")
        .row.justify-content-center
          .col-auto
            .circle.orange
              .circleContent
                figure.mb-0
                  img(src="@/assets/curso/temas/t3/t3_18.svg", alt="alt").img65.m-auto
                p.text-center.mb-0 #[em Small]<br>(pequeña)

      .col-lg-2.col-md-4.col-6.mb-4.mb-lg-0(data-aos="flip-left")
        .row.justify-content-center
          .col-auto
            .circle.mint
              .circleContent
                figure.mb-0
                  img(src="@/assets/curso/temas/t3/t3_19.svg", alt="alt").img65.m-auto
                p.text-center.mb-0 Testeable<br>(comprobable)

    p(data-aos="fade-left").mb-5 Para profundizar en el tema se hace la descripción del método #[em Invest], por lo que se le invita a revisar el siguiente recurso de aprendizaje:

    h3(data-aos="fade-right") Método #[em Invest]
    p(data-aos="fade-left") A continuación se hace una descripción de cada uno de los elementos que intervienen en este método.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-left")
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Independiente")          
            p.mb-0 Las historias de usuario deben ser lo más independientes posible.

          .row(numero="2" titulo="Negociable")          
            p.mb-0 Las historias de usuario deben ser negociables siempre en acuerdo con el cliente.

          .row(numero="3" titulo="Valiosa")          
            p.mb-0 Es fundamental que la historia de usuario sea valiosa para el cliente por esta razón es importarte que el cliente escriba el mismo la historia.

          .row(numero="4" titulo="Estimable")          
            p.mb-0 La estimación de la historia de usuario debe ser precisa para ayudar al cliente. La realización está a cargo del equipo de trabajo y se relaciona con el tamaño de la misma.

          .row(numero="5" titulo="<em>Small</em> (pequeña)")          
            p.mb-0 Es fundamental el tamaño de la historia de usuario para disminuir y facilitar la estimación de la misma, es ideal definirla en semanas cortas o días.

          .row(numero="6" titulo="<em>Testeable</em> (comprobable)")          
            p.mb-0 La historia de usuario debe ser probada para darla por terminada.

      .col-lg-5.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t3/t3_20.svg", alt="alt")

    .cajon.cjn--yellow.p-4.mb-4(data-aos="zoom-in")
      p.mb-0 Utilizando este método se logra asegurar que una historia de usuario no sea dependiente de otra y así poder proporcionar que su planificación y desarrollo no incluya muchos datos técnicos que restrinjan los convenios entre los clientes y los desarrolladores. 

    separador

    #t_3_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.2 Ejemplos 

    p.mb-5(data-aos="fade-left") A continuación, se muestran algunos ejemplos prácticos de historias de usuario aplicando el método #[em Invest]:

    .titulo-quinto.color-acento-contenido.mb-4
      h3.text-center Historia de usuario: “Crear Usuario”

    .row.justify-content-center.mb-5
      .col-xl-6.col-lg-9.mb-4(data-aos="zoom-in")
        .crd_hover_txt.clr_mint
          .crd_hover_txt--img.mb-0         
            img(src="@/assets/curso/temas/t3/t3_21.png")
          .crd_hover_txt--font
            h4 Primer opción
            p.mb-0 #[strong Como:] cliente de un Supermercado.
            p.mb-0 #[strong Quiero:] hacer compras por medio de una aplicación #[em web].
            p #[strong Para:] no moverme de casa.

            p Como se muestra en la primera opción de historia de usuario, se identifica el que quiere hacer, pero no el cómo lo va a realizar, no hay ningún detalle del ingreso a las compras en línea que seguramente se aclara en una siguiente reunión.
            p.mb-0 Esta historia de usuario cumple con las características del método #[em Invest] por lo que es sencilla, clara y satisface una necesidad, es específica lo cual lleva a tener una fácil estimación definiendo el tiempo de desarrollo.


      .col-xl-6.col-lg-9.mb-4(data-aos="zoom-in")
        .crd_hover_txt.clr_blue
          .crd_hover_txt--img.mb-0         
            img(src="@/assets/curso/temas/t3/t3_22.png")
          .crd_hover_txt--font
            h4 Segunda opción
            p.mb-0 #[strong Como:] cliente de un Supermercado.
            p.mb-0 #[strong Quiero:] acceder al registro por medio de un formulario que me permita escribir mi correo electrónico y asignar una contraseña.
            p #[strong Para:] tener seguridad.

            p Si se observa esta historia de usuario se puede notar que hay demasiadas especificaciones en la estructura Quiero, además que no hay claridad en el beneficio.

            p Un ejemplo más de historias de usuario que no cumplen con las cualidades de Independiente, Estimable y pequeña es el siguiente: 

            p #[strong Historia de usuario: “Crear Aplicación #[em Web]”]

            p.mb-0 #[strong Como:] cliente de un supermercado.
            p.mb-0 #[strong Quiero:] ingresar a una página #[em web].
            p #[strong Para:] hacer compras en línea.

    .fullbg02.bg--blueGradient.mb-5
      figure(data-aos="zoom-in")
        img(src="@/assets/curso/temas/t3/t3_23.png", alt="alt")
      .row.justify-content-center.top--negMargin(data-aos="fade").mb-4
        .col-lg-10
          .crd.bg--gray.shadow.brd--rad_01.p-4
            p.mb-0 Esta historia no es independiente ya que describe una historia de usuario muy grande la cual es denominada como Épicas, ya que de ella pueden salir muchas historias de usuario como:

      .row.justify-content-center
        .col-lg-3.col-md-6.col-8.mb-4.mb-lg-0(data-aos="flip-left")
          .bg--white.p-4.brd--rad_01.shadow.hg--100
            figure.mb-2
              img(src="@/assets/curso/temas/t3/t3_24.svg", alt="alt").img90.m-auto
            p.text-center.mb-0 Hacer un registro.

        .col-lg-3.col-md-6.col-8.mb-4.mb-lg-0(data-aos="flip-left")
          .bg--white.p-4.brd--rad_01.shadow.hg--100
            figure.mb-2
              img(src="@/assets/curso/temas/t3/t3_25.svg", alt="alt").img90.m-auto
            p.text-center.mb-0 Un ingreso.

        .col-lg-3.col-md-6.col-8.mb-4.mb-lg-0(data-aos="flip-left")
          .bg--white.p-4.brd--rad_01.shadow.hg--100
            figure.mb-2
              img(src="@/assets/curso/temas/t3/t3_26.svg", alt="alt").img90.m-auto
            p.text-center.mb-0 Seleccionar productos.

        .col-lg-3.col-md-6.col-8.mb-4.mb-lg-0(data-aos="flip-left")
          .bg--white.p-4.brd--rad_01.shadow.hg--100
            figure.mb-2
              img(src="@/assets/curso/temas/t3/t3_27.svg", alt="alt").img90.m-auto
            p.text-center.mb-0 Pagar, etc.

    .tarjeta.bg--cta.p-3.mb-5(data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/recursos/cta_00.svg").img75
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.text-white.mb-1 Plantillas-Historias
              p.text-white.mb-0 Para visualizar una historia del usuario Épica se le invita a ver el siguiente recurso de aprendizaje denominado: "Plantillas-Historias".
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Plantillas_Historias.xlsx')" target="_blank")
                span ver
                i.fas.fa-link 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t3/t3_30.png", alt="alt")
      .col-lg-8(data-aos="fade-left")
        .row.mb-4
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/recursos/rectangle_00.svg", alt="alt").img30
          .col
            p.mb-0 Por lo anterior, no se cumpliría tampoco con la característica de estimación porque no se sabría cuándo se terminaría la historia. Como se puede notar en la descripción de los anteriores ejemplos el método #[em Invest] nos ofrece reglas para que la redacción de las historias de usuario sea óptimas y así lograr cumplir al cliente con lo que realmente necesita.

        .cajon.cjn--yellow.p-4.mb-4
          p.mb-0 Para realizar una buena gestión de proyectos, usualmente en las metodologías ágiles se usan una serie de herramientas para crear las historias de usuario como:

        .row.justify-content-center
          .col-lg-10
            figure
              img(src="@/assets/curso/temas/t3/t3_28.png", alt="alt")

    p(data-aos="fade-left") A continuación, se muestra un ejemplo de uso de una plantilla que mantiene la misma estructura sencilla de las historias de Usuario.

    separador

    #t_3_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.3 Plantillas de historias de usuario 

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t3/t3_29.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las plantillas de historias de usuario pueden ser adaptadas según las necesidades requeridas sin perder la flexibilidad y sencillez que ofrece una HU, los equipos de desarrollo trabajan conjuntamente utilizando herramientas en línea para compartir y trabajar en las plantillas. A continuación, se puede visualizar un ejemplo del uso de una plantilla de Excel descargada de la web con un ejemplo de gestión de productos.

    .titulo-sexto.color-acento-botones(data-aos="fade-right")         
      span Ejemplo plantilla historia de usuario

    .tabla-a.cstm_table_02.mb-5(data-aos="zoom-in")
      table
        thead
          tr
            th ID de la historia
            th Rol
            th Funcionalidad
            th Razón/Resultado
            th Criterio de aceptación
        tbody
          tr
            td.text-center Id.01
            td.text-center Como cliente
            td Quiero ver una lista de categorías de productos.
            td Para poder realizar búsquedas de productos por categorías.
            td Despliegue de listado de categorías a seleccionar con productos asociados.
          tr
            td.text-center Id.01
            td.text-center Como cliente
            td Quiero ver una lista de precios. 
            td Para poder elegir el producto más barato.
            td Despliegue una lista ordenada de productos por precio de menor a mayor.
      figcaption Nota. https://asesorias.com/empresas/wp-content/uploads/2020/05/Hisotorias-de-usuario-scrum-ej-1-1180x281.png

    
    .cajon.cjn--yellow.p-4.mb-4(data-aos="zoom-in")
      p.mb-0 Ya se han descrito dos de las tres técnicas más utilizadas para la descripción de requerimientos que son los casos de uso y las historias de usuario, a continuación, se hace la descripción de la tercera técnica:  los diagramas de actividades.


    








</template>

<script>
export default {
  name: 'Tema3',
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
