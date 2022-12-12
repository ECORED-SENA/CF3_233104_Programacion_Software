<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Especificación y análisis de requisitos

    p(data-aos="fade-left") La función más importante de la Especificación de Requisitos es servir de intermediario para que los clientes, los analistas de requisitos, desarrolladores y los usuarios puedan comunicarse. En esta es fundamental recolectar tanto los requerimientos de usuario y del cliente como los del #[em software] a desarrollar para lograr la satisfacción del cliente, por eso es importante el uso de técnicas que permitan representar de una manera visual e intuitiva estos requerimientos.

    .row.justify-content-center.align-items-center
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t2/t2_01.png", alt="alt")
      .col-lg-8(data-aos="fade-left")
        .row.mb-4
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/recursos/rectangle_00.svg", alt="alt").img30
          .col
            p.mb-0 Cuando se realiza la recolección de requerimientos de un cliente, UML por medio de sus casos de uso permite el modelado de estos requerimientos. Los stackholders (actores externos) que están interesados en el producto son incluidos en el modelado con las funcionalidades requeridas (casos de uso) estos a su vez son modelados incluyendo relaciones y asociaciones jerárquicamente divididas entre ellos.

        .cajon.cjn--yellow.p-4(data-aos="zoom-in")
          p.mb-0 Quienes especifican los requerimientos de un cliente son los casos de uso y sus actores, qué es la expectativa que cada uno tiene del sistema, sin tener en cuenta la funcionalidad que se realizará. Los análisis de requisitos se realizan para diferentes procesos no necesariamente para desarrollos de #[em software]. Entre los diagramas más relevantes (y más utilizados) que se encuentran en UML están los diagramas de casos de uso, por lo que a continuación se realiza una definición más detallada de ellos.

    separador

    #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.1 Diagrama de casos de uso

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/t2_02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los casos de uso permiten la descripción de cada una de las funciones de las aplicaciones a desarrollar desde el punto de vista del usuario. Su utilización radica en expresar las funcionalidades que el producto de #[em software] debe efectuar y poder definir las personas que serán las encargadas de ejecutar estas funcionalidades. Es una técnica que consiste en hacer un diagrama con su respectiva notación. El caso de uso representa el comportamiento del #[em software] en la interacción con el usuario, para que este alcance un objetivo, por lo que, un caso de uso se compone de esos elementos que hacen parte de su notación.

    separador

    #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.2 Componentes de los diagramas de casos de uso

    .fullbg.bg--blueGradient.mb-5
      figure(data-aos="zoom-in")
        img(src="@/assets/curso/temas/t2/t2_03.png", alt="alt")
      .row.justify-content-center.top--negMargin(data-aos="fade").mb-5
        .col-lg-10
          .crd.bg--gray.shadow.brd--rad_01.p-4
            p.mb-0 La notación de un diagrama de caso de uso se compone principalmente de 3 elementos que ayudan a representar simbólicamente las funcionalidades, personas involucradas y relación entre estas y los cuales son: los actores, las relaciones y los casos de uso. A continuación, se describe cada uno de ellos: 

      .row.justify-content-center.mb-5
        .col-lg-3.col-md-8.col-10.mb-4.mb-lg-0(data-aos="flip-left")
          .bg--gray.p4.brd--rad_02.p-4
            figure.mb-4
              img(src="@/assets/curso/temas/t2/t2_04.svg", alt="alt").img90.m-auto
            h4.text-center Actor

        .col-lg-3.col-md-8.col-10.mb-4.mb-lg-0(data-aos="flip-left")
          .bg--gray.p4.brd--rad_02.p-4
            figure.mb-4
              img(src="@/assets/curso/temas/t2/t2_05.svg", alt="alt").img90.m-auto
            h4.text-center Relación

        .col-lg-3.col-md-8.col-10(data-aos="flip-left")
          .bg--gray.p4.brd--rad_02.p-4
            figure.mb-4
              img(src="@/assets/curso/temas/t2/t2_06.svg", alt="alt").img90.m-auto
            h4.text-center Caso de uso

    .row.mb-5(data-aos="fade-right")
      .col-auto
        .cstmH3
          h3.mb-0 Actor

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-8
        p(data-aos="fade-left") Especifica un rol que ejecutará un usuario, representa a una persona o grupo de personas que interactúan con un #[em software], se representa mediante un hombre de palo “stick man” con el nombre del actor (obligatorio). El uso de los actores se realiza para mostrar la clase de usuario que participará en el sistema el cuál será el encargado de realizar una función, por lo que los nombres de los actores normalmente inician con Mayúscula.

        p(data-aos="fade-left").mb-4 Existen varios tipos de actores según (Larman, 2002), los cuales se describen en la siguiente figura:

        .row.justify-content-center
          .col-lg-4.col-md-6.col-md-8.col-10.mb-4.mb-lg-0(data-aos="flip-left")
            .crd.bg--gray.brd--rad_02.shadow.p-3
              .numb_02(data-nb="01")
              figure.my-4
                img(src="@/assets/curso/temas/t2/t2_08.svg", alt="alt").img90.m-auto     
              h5.text-center Principales          
              p.text-center Son aquellos que se especifican para localizar cada uno de los objetivos de un usuario que son dirigidos por los casos de uso.

          .col-lg-4.col-md-6.col-md-8.col-10.mb-4.mb-lg-0(data-aos="flip-left")
            .crd.bg--gray.brd--rad_02.shadow.p-3
              .numb_02(data-nb="02")
              figure.my-4
                img(src="@/assets/curso/temas/t2/t2_09.svg", alt="alt").img90.m-auto     
              h5.text-center De apoyo          
              p.text-center Son los que brindan un servicio al sistema como un sistema informático, se definen para dar claridad a las interfaces externas.

          .col-lg-4.col-md-6.col-md-8.col-10.mb-4.mb-lg-0(data-aos="flip-left")
            .crd.bg--gray.brd--rad_02.shadow.p-3
              .numb_02(data-nb="03")
              figure.my-4
                img(src="@/assets/curso/temas/t2/t2_10.svg", alt="alt").img90.m-auto     
              h5.text-center Los pasivos          
              p.text-center Son aquellos que se interesan en el funcionamiento del caso de uso, pero no es un actor principal.

      .col-xl-4.d-none.d-xl-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t2/t2_07.png", alt="alt")

    p(data-aos="fade-left").mb-5 En la figura que se muestra a continuación, se observa cómo se representa de manera gráfica un actor en un UML, al cual también se le adiciona el nombre del actor correspondiente para dar mayor claridad en el proceso.

    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .bg--paleBlue.p-4 
          .titulo-sexto.color-acento-botones          
            span Representación gráfica de un actor en UML
          figure
            img(src="@/assets/curso/temas/t2/t2_11.svg", alt="alt").img65.m-auto
        
      .col-lg-8(data-aos="fade-left")
        .row.mb-4
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/recursos/rectangle_00.svg", alt="alt").img30
          .col
            p.mb-0 Además, se debe tener en cuenta que no necesariamente los actores son personas, pese a que estos estén personificados por formas humanas en el diagrama de casos de uso. Por lo anterior, los sistemas externos también son actores, que pueden requerir alguna información del sistema real o tener alguna interacción con él como una base de datos, por ejemplo.
        
        .cajon.cjn--yellow.p-4(data-aos="zoom-in")
          p.mb-0 Al momento de determinar los casos de uso se hace necesario identificar el actor. Este es el nombre que se le da al usuario cuando desempeña ese papel, por lo que ellos llevan a cabo los casos de uso. Teniendo en cuenta lo anterior cada uno de ellos tiene la posibilidad de hacer diferentes casos de uso y viceversa. Para identificar un actor solo es necesario visualizar los roles que interactúan en el sistema.

    .fullbg.bg--gray.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
          h4 Ejemplo 1
          p.mb-4 Para explicar cada uno de los elementos de un caso de uso se plantea el siguiente ejemplo de un requerimiento:
          .cajon.cjn--yellow.p-4.mb-4
            p.mb-0 “Una empresa solicita tener un sistema que permita hacer el proceso de generación de factura de venta a un comerciante, la cuál debe ser enviada por medio de un sistema externo que se encargará del proceso de la factura”.

          p.mb-0 #[strong Los actores identificados en los requerimientos del ejemplo 1 son: comerciante y sistema externo, los cuales se muestran en la figura a continuación.]

        .col-lg-6.col-10(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t2/t2_12.svg", alt="alt")

    
    .hr_line  

    .row.mb-5(data-aos="fade-right")
      .col-auto
        .cstmH3
          h3.mb-0 Relación

    p(data-aos="fade-left") Un actor interactúa con un caso de uso y está representado por una relación su símbolo es una línea o una flecha, la cual se muestra en la figura que se observa a continuación:

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="zoom-in")
        .titulo-sexto.color-acento-botones          
          span Representación gráfica de una relación de caso de uso en UML
        .bg--paleBlue.p-4         
          figure
            img(src="@/assets/curso/temas/t2/t2_13.svg", alt="alt")

      .col-lg-6(data-aos="fade-left")
        p A continuación, se describen diferentes tipos de relaciones según los actores mencionados anteriormente:

        ul.fa-ul
          li
            i.fa-li.fas.fa-check-circle.txt--mint
            | La relación entre un actor y un caso de uso se llama relación de comunicación, esta se distingue por los actores pasivos o activos.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--mint
            | El actor activo inicial o dispara la ejecución del caso de uso y la línea o flecha apunta al caso de uso.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--mint
            | El actor pasivo no inicia el caso de uso y la flecha apunta al actor.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--mint
            | El tipo de comunicación o la relación entre los casos de uso y los actores forman la asociación directa con el caso de uso. 
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--mint
            | La manera de expresar es que el actor ejecuta el caso de uso.  
          .hr_line

    p(data-aos="fade-left").mb-5 Continuando con el ejemplo 1 se identifican las siguientes relaciones de comunicación: 

    .row.justify-content-center.mb-5
      .col-lg-3.col-md-4.col-10.mb-4.mb-md-0(data-aos="flip-left")
        .bg--Blue.hg--100  
          figure
            img(src="@/assets/curso/temas/t2/t2_14.png", alt="alt")
          .p-4
            p.text-white.mb-0 Entre el comerciante y la generación de la factura.

      .col-lg-3.col-md-4.col-10(data-aos="flip-left")
        .bg--Blue.hg--100.mb-4.mb-md-0
          figure
            img(src="@/assets/curso/temas/t2/t2_15.png", alt="alt")
          .p-4
            p.text-white.mb-0 Entre el comerciante y el envío de la factura.

      .col-lg-3.col-md-4.col-10(data-aos="flip-left")
        .bg--Blue.hg--100 
          figure
            img(src="@/assets/curso/temas/t2/t2_16.png", alt="alt")
          .p-4
            p.text-white.mb-0 Entre la factura y el sistema externo.

    .hr_line.mb-5  

    .row.mb-5(data-aos="fade-right")
      .col-auto
        .cstmH3
          h3.mb-0 Caso de uso

    .row.justify-content-center.mb-5
      .col-xl-7.mb-4.mb-xl-0
        p(data-aos="fade-left") Los casos de uso se identifican a través de los verbos o acciones que el actor realiza o realizará, estas pueden describir, graficar y nombrar de la siguiente manera:

        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0(data-aos="flip-left")
            .crd.crd--avatarH.clr--01
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/recursos/avatar_01.svg", alt="alt").img75
                .col
                  p.v-align.mb-0 Se representa mediante un óvalo e indica una función que el sistema debe proveer.    
                  
          .col-lg-6.mb-4.mb-lg-0
            .crd.crd--avatarH.clr--02(data-aos="flip-left")
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/recursos/avatar_02.svg", alt="alt").img75
                .col
                  p.v-align.mb-0 El caso de uso debe ser de fácil lectura e interpretación tanto para los desarrolladores como para el cliente para el nombre se sugiere usar un verbo infinitivo con un complemento.

      .col-xl-5(data-aos="zoom-in")
        .titulo-sexto.color-acento-botones          
          span Representación gráfica de una relación de caso de uso en UML
        .bg--paleBlue.p-4         
          figure
            img(src="@/assets/curso/temas/t2/t2_17.svg", alt="alt")

    .fullbg.bg--gray.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t2/t2_18.svg", alt="alt")

        .col-lg-8(data-aos="fade-left")
          .cajon.cjn--yellow.p-4.mb-5
            p.mb-0 Los casos de uso que se identifican para el ejemplo 1 son: generar factura y enviar factura, los cuales se ven representados gráficamente en la siguiente figura.

          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-botones          
                span Representación gráfica de una relación de caso de uso en UML               
              figure
                img(src="@/assets/curso/temas/t2/t2_19.svg", alt="alt")

    p(data-aos="fade-left").mb-5 A continuación, se presenta un ejemplo de la representación gráfica del diagrama de caso de uso con los actores, relaciones y caso de uso del problema del Ejemplo 1 propuesto anteriormente.

    .row.justify-content-center.mb-5
      .col-lg-10.mb-5
        h4(data-aos="fade-right") problema

        .cajon.cjn--yellow.p-4(data-aos="zoom-in")
          p.mb-0  “Una empresa solicita tener un sistema que permita hacer el proceso de generación de factura de venta a un comerciante la cuál debe ser enviada por medio de un sistema externo que se encargará el proceso de la factura”.

      .col-lg-10(data-aos="zoom-in")
        .titulo-sexto.color-acento-botones          
          span Ejemplos diagrama de caso de uso venta            
        figure
          img(src="@/assets/curso/temas/t2/t2_20.svg", alt="alt")

    p(data-aos="fade-left").mb-5 Por otro lado, los pasos para realizar el diseño del diagrama de casos de uso que se muestra en la figura anterior del sistema de venta se pueden ver en el siguiente recurso de aprendizaje:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        figure
          img(src="@/assets/curso/temas/t2/t2_21.svg", alt="alt")

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/t2_02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Además de la relación simple de comunicación que se muestra con anterioridad, existen más relaciones en los casos de uso que especifican más detalladamente las acciones entre estos y que se mencionan a continuación.

    separador

    #t_2_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.3 Relaciones de casos de uso

    
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-4.col-md-6.col-8.mb-4.mb-xl-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t2/t2_22.png", alt="alt")
      .col-xl-8(data-aos="fade-left")
        .row.mb-4
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/recursos/rectangle_00.svg", alt="alt").img30
          .col
            p.mb-0 En el proceso de desarrollo pueden definirse diferentes casos de uso y por lo que estos no son independientes, ya que se pueden establecer relaciones que dependan uno del otro entre los casos de uso.

        p(data-aos="fade-left") Las principales relaciones consideradas por UML son:

        .row.justify-content-center.mb-4
          .col-lg-4.mb-4.mb-lg-0(data-aos="flip-left")
            .crd.crd--avatarH.clr--01
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/recursos/avatar_01.svg", alt="alt").img75
                .col.gx-0
                  p.v-align.mb-0 Extensión<br>(#[em extend])  
                  
          .col-lg-4.mb-4.mb-lg-0
            .crd.crd--avatarH.clr--02(data-aos="flip-left")
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/recursos/avatar_02.svg", alt="alt").img75
                .col.gx-0
                  p.v-align.mb-0 Generalización<br>(#[em generalization]) 

          .col-lg-4.mb-4.mb-lg-0(data-aos="flip-left")
            .crd.crd--avatarH.clr--01
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/recursos/avatar_01.svg", alt="alt").img75
                .col.gx-0
                  p.v-align.mb-0 Inclusión <br>(#[em include])

        
        .cajon.cjn--yellow.p-4.mb-5(data-aos="zoom-in")
          p.mb-0 Los tres tipos de relaciones que son soportados por el estándar UML se encuentran explicados en la siguiente tabla, por lo que se invita a revisar el contenido:

    .titulo-sexto.color-acento-botones(data-aos="fade-right")
      h5 Tabla 1.
      span Relaciones de casos de Uso

    .tabla-a.cstm_table_02.mb-5(data-aos="zoom-in")
      table
        thead
          tr
            th Relaci&oacute;n
            th Descripci&oacute;n
            th Notaci&oacute;n
        tbody
          tr
            td Inclusión (#[em include o use])
            td Se usa para extraer comportamientos comunes un caso de uso, puede incluir otro.
            td 
              img(src="@/assets/curso/temas/t2/t2_23.svg", alt="alt").img115.m-auto               
              
          tr.cellGray
            td Extensión (#[em Extend])
            td Se utiliza para extender a otro caso de uso,  es útil para nuevos requerimientos del sistema.
            td
              img(src="@/assets/curso/temas/t2/t2_24.svg", alt="alt").img115.m-auto  
          tr
            td Generalización
            td Relación entre un caso de uso general y uno específico que hereda propiedades del caso de uso base.
            td
              img(src="@/assets/curso/temas/t2/t2_25.svg", alt="alt").img115.m-auto 

    .cajon.cjn--yellow.p-4.mb-5(data-aos="zoom-in")
      p.mb-0 Tomando el ejemplo anterior Ejemplo 1, y con el propósito de perfeccionar el diagrama de casos de uso se pueden agregar unos nuevos casos de uso donde se visualicen las relaciones mencionadas anteriormente, la primera de ellas es la relación extends: 

    .bg--gray.p-5.mb-5
      .row.justify-content-center
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
          h3 &#60;&#60; #[em extends] &#62;&#62; 
          p.mb-0 Se define esta relación cuando se cuenta con un caso de uso que es muy parecido a otro, pero que sin embargo realiza mucho más. Por ejemplo, en el caso anterior se puede ampliar el caso de uso envía factura por envía factura por correo electrónico. Ambos casos establecen la misma acción, la diferencia es que el caso de uso además de enviar la factura al sistema externo, también envía un correo electrónico con la factura y se representaría de la siguiente manera:

        .col-lg-7(data-aos="zoom-in")
          .titulo-sexto.color-acento-botones            
            span Ejemplos diagrama de caso de uso venta con relación extends
          figure
            img(src="@/assets/curso/temas/t2/t2_26.svg", alt="alt")

    .cajon.cjn--yellow.p-4.mb-5(data-aos="zoom-in")
      p.mb-0 La relación se lee de la siguiente manera: el caso de uso enviar factura por correo extiende del caso de uso enviar factura. Otro factor importante que se debe tener en cuenta es el siguiente: 

    .bg--gray.p-5.mb-5
      .row.justify-content-center
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
          h3 &#60;&#60; #[em uses o include] &#62;&#62; 
          p.mb-0 Este define la relación cuando una parte del comportamiento o acción es equivalente en más de un caso de uso y no se requiere duplicar la representación de su actuación. Por otro lado, para el Ejemplo 1, en el caso anterior se amplía con el siguiente requerimiento funcional: antes de que el usuario envié la factura puede realizar una búsqueda de facturas para seleccionarla y enviarla haciendo necesario incluir la relación &#60;&#60;include&#62;&#62;. Por lo que se vería así:

        .col-lg-7(data-aos="zoom-in")
          .titulo-sexto.color-acento-botones            
            span Ejemplos diagrama de caso de uso venta con relación include
          figure
            img(src="@/assets/curso/temas/t2/t2_27.svg", alt="alt")

    
    .tarjeta.bg--cta.p-3.mb-5(data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/recursos/cta_00.svg").img75
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.text-white.mb-1 Casos de Uso II - 5 - Tutorial UML
              p.text-white.mb-0 Para profundizar en relaciones de caso de uso puede visitar el enlace que se encuentra en la sección de material complementario con el siguiente nombre: diagrama de Casos de Uso II - 5 - Tutorial UML en español.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=DUjBnEvIm1M&list=PLM-p96nOrGcaw5dhv8wOA5tVVWEmXtA2F&index=5" target="_blank")
                span ver
                i.fas.fa-link     

    separador

    #t_2_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.4 Especificación de casos de uso

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-left")
        p Cuando se habla de especificación de casos de uso se hace referencia al proceso de descripción textual de cada uno de estos detallando los flujos y eventos que interactúan con el sistema y los actores que participan en él. Usualmente el analista, que es la persona encargada del diseño de los casos de uso a medida es quien va identificando los requerimientos y los va documentando.

        p En adición la especificación de Casos de Uso busca:

        ul.fa-ul
          li
            i.fa-li.fas.fa-check-circle.txt--mint
            | #[strong Realizar la descripción de la interacción de un actor con el sistema.]
          .hr_line 
          li
            i.fa-li.fas.fa-check-circle.txt--mint
            | #[strong Narrar el rol desempeñado por los actores en la interacción con el sistema y sus flujos.]
          .hr_line 
          li
            i.fa-li.fas.fa-check-circle.txt--mint
            | #[strong Describir los casos de uso.]
          

      .col-lg-4.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t2/t2_28.png", alt="alt")

    p(data-aos="fade-left").mb-5 A continuación, se describe una plantilla donde se indican las partes y las indicaciones básicas para la documentación de casos de uso.

    .titulo-sexto.color-acento-botones(data-aos="fade-right")
      h5 Tabla 2.
      span Plantilla de Casos de Uso

    .tabla-a.cstm_table_02.mb-4(data-aos="zoom-in")
      .blueHeader
        h4.text-white.text-center.mb-0 DESCRIPCIÓN DE UNA ESPECIFICACIÓN DE CASO DE USO
      table       
        tr
          td(width="20%") #[strong Nombre del caso de uso]
          td Indica el nombre del caso de uso. Normalmente, el nombre expresa el resultado objetivo y observable del caso de uso, como por ejemplo “Imprimir factura” en el caso de un de un sistema de ventas.
        tr(width="80%").crd--gray
          td #[strong Autor]
          td Persona que diseña el caso de uso.
        tr(width="20%")
          td #[strong Fecha]
          td Aquí se diligencia la fecha en la que se realizó el caso de uso.
        tr(width="80%").crd--gray
          td #[strong Descripción ]
          td Se realiza una corta descripción del caso de uso.
        tr(width="20%")
          td #[strong Actores ]
          td Describe los nombres del actor o actores del caso de uso.
        tr(width="80%").crd--gray
          td #[strong Precondiciones ]
          td Son aquellas condiciones que deben existir para que se cumpla el caso de uso.
        tr(width="20%")
          td #[strong Flujo normal ]
          td Son los pasos normales de ejecución del caso de uso.
        tr(width="80%").crd--gray
          td #[strong Flujo alternativo ]
          td Flujos alternativos de ejecución de casos de uso.
        tr(width="20%")
          td #[strong PosCondiciones ]
          td Son aquellas condiciones que se cumplen cuando finaliza un caso de uso.

      figcaption Nota. https://bit.ly/3k66Sf3

    p(data-aos="fade-left").mb-4 A continuación, se muestra un ejemplo de especificación de casos de uso para el caso de uso “Crear Foro” utilizando la plantilla propuesta posteriormente.

    .titulo-sexto.color-acento-botones(data-aos="fade-right")
      h5 Tabla 3.
      span Ejemplo especificación de caso de uso foro

    .tabla-a.cstm_table_02.mb-4(data-aos="zoom-in")
      .blueHeader
        h4.text-white.text-center.mb-0 DESCRIPCIÓN DE UNA ESPECIFICACIÓN DE CASO DE USO
      table       
        tr
          td(width="20%") #[strong Nombre del caso de uso]
          td Crear foro
        tr(width="80%").crd--gray
          td #[strong Autor]
          td Mario Vera Cruz
        tr(width="20%")
          td #[strong Fecha]
          td 20/09/2021
        tr(width="80%").crd--gray
          td #[strong Descripción ]
          td Crea un nuevo mensaje
        tr(width="20%")
          td #[strong Actores ]
          td Alumno/Docente
        tr(width="80%").crd--gray
          td #[strong Precondiciones ]
          td Al iniciar el usuario debe estar autenticado en el sistema.
        tr(width="20%")
          td #[strong Flujo normal ]
          td 1. El actor da clic en la opción nuevo mensaje.<br>2. Se muestra un área de texto para escribir el mensaje.<br>3. El actor introduce el mensaje.<br>4. El sistema verifica datos y los almacena.<br>5. El profesor acepta y publica.
        tr(width="80%").crd--gray
          td #[strong Flujo alternativo ]
          td 4ª.  Se hace una comprobación de los datos si no son correctos muestra mensaje de corrección.<br>4b. El profesor rechaza el mensaje de modo que no es publicado sino devuelto.
        tr(width="20%")
          td #[strong PosCondiciones ]
          td Se publica y almacena el mensaje satisfactoriamente.

    separador

    #t_2_5.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.5  Casos de usos reales (prototipos)

    .fullbg.bg--gray.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t2/t2_29.svg", alt="alt")
        .col-lg-8(data-aos="fade-left")
          p Su objetivo principal es detallar el proceso de un sistema de información que se describe por medio de un caso de uso incluyendo la interacción de objetos, así como definir las transacciones de las interfaces y clases de los diferentes procedimientos secundarios de diseño. De este modo, cuando se reconozcan las clases que participan internamente de un caso de uso, es fundamental que los entornos que se recolectan del análisis se completen, incorporando las correspondientes clases de diseño sin dejar a un lado las restricciones del ambiente tecnológico.

          .row.mb-4
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/rectangle_00.svg", alt="alt").img30
            .col
              p.mb-0 Los casos de uso reales representan el diseño preciso del caso de uso desde una tecnología específica. Así pues, si se trata de un diseño gráfico para el usuario, se incluirá el diseño de ventanas de este y una descripción de la interacción con los objetos de la interfaz. En resumen, los casos de uso reales brindan diseños de pantalla y explicación de la interacción entre los objetos de esta.

          .cajon.cjn--yellow.p-4(data-aos="zoom-in")
            p.mb-0 Para aclarar las definiciones anteriores se emplea un ejemplo de un sistema de Ventas que encontrará posteriormente, donde se realiza el diseño del caso de uso real y se hace la descripción de interacción entre los artefactos del diseño, A continuación, se presenta una tabla con los datos de un ejemplo para un Sistema de Venta:

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Tabla 4.
          span Sistema de ventas

        .tabla-a.cstm_table_02.mb-4(data-aos="zoom-in")
          .blueHeader
            h4.text-white.text-center.mb-0 Sistema de ventas
          table       
            tr
              td(width="30%") #[strong Caso de uso adquirir productos]
              td Adquirir productos
            tr(width="70%").crd--gray
              td #[strong Actores]
              td Cliente (quien inicia el proceso), Cajero.
            tr
              td(width="30%") #[strong Tipo]
              td Primario, real.            
            tr(width="70%").crd--gray
              td #[strong Descripción]
              td En el almacén de ropa el cliente se dirige a la caja registradora con los productos a comprar.<br><br>El empleado- cajero hace el registro de los productos que el cliente compra y recibe el dinero en efectivo.<br><br>Al finalizar el proceso, el cliente se retira con los artículos comprados.

    p(data-aos="fade-left").mb-5 Para profundizar su aprendizaje le invito a ver el tema: Diseño del Caso de Uso a continuación:

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .titulo-sexto.color-acento-botones          
          span Ejemplos caso de uso reales prototipos

        figure
          img(src="@/assets/curso/temas/t2/t2_30.svg", alt="alt")
          figcaption Nota. https://docer.com.ar/doc/8nn115

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        p(data-aos="fade-left") A continuación, se hace la descripción de las interacciones entre objetos en el diseño:

        ul.fa-ul(data-aos="fade-left")
          li
            i.fa-li.fas.fa-check-circle.txt--mint
            | El inicio de este caso de uso se da cuando el cliente se acerca a la caja registradora con los artículos que desea llevar.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--mint
            | Para cada producto el cajero debe ingresar el código del producto en A de la ventana-1, si el usuario tiene más de un producto es opcional registrar la cantidad en E, una vez finalice el registro de todos los productos se presiona H.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--mint
            | El Sistema almacena los productos registrados. La visualización de la descripción y el precio del producto se muestra en B y en F de la Ventana-1.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--mint
            | Para finalizar el cajero presiona el botón I para dar por finalizada la venta. 
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--mint
            | Luego el Sistema hace el cálculo y muestra en C el total de la venta.           

      .col-lg-5.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t2/t2_31.svg", alt="alt")

    .cajon.cjn--yellow.p-4(data-aos="zoom-in")
      p.mb-0 Como se mencionó anteriormente, otra de las técnicas muy utilizadas para descripción de funcionalidades desde la visión del usuario son las historias de usuario las cuales se detallan a continuación. 




            

    

    









    
          

</template>

<script>
export default {
  name: 'Tema2',
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
