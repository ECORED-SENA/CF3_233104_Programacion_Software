<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Diagrama de actividades

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-left")
        p Estos son diagramas de comportamiento que se utilizan para representar una sucesión de actividades, explican el flujo de operaciones desde el punto en que inician hasta el punto final definiendo una variedad de caminos de decisiones en el desarrollo de eventos que abarca una actividad. (Booch, G. (1994). Ellos permiten visualizar un caso de uso específico a un nivel más preciso, ilustrando el flujo de actividades definidas en un sistema.
        p A continuación, podrá conocer los beneficios del diagrama de actividades

        h4 beneficios

        ul.fa-ul
          li
            i.fa-li.fas.fa-check-circle.txt--mint
            | Permite explicar la lógica de un algoritmo.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--mint
            | Representa cada uno de los procesos realizados en los diseños de casos de uso en UML.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--mint
            | Permite instruir procesos entre el sistema y los usuarios en un flujo de trabajo o negocios.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--mint
            | Permite dar claridad optimizando y facilitando los casos de uso complejos.

      .col-lg-5.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_01.png", alt="alt")

    #t_4_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.1 Elementos de un diagrama de actividades

    p(data-aos="fade-left").mb-5 Un diagrama de actividades contiene fundamentalmente los siguientes elementos:

    TabsA.color-acento-botones(data-aos="zoom-in")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Actividad")
        h4 Actividad
        .row.justify-content-center
          .col-xl-7.mb-4.mb-xl-0
            p Una actividad es la descripción o el detalle de una sucesión de conductas parametrizadas, se simboliza como un flujo de acciones ordenadas. El modelado de este flujo se hace por medio de nodos de actividad que se conectan por medio de flujos de control. Las actividades generan jerarquías de peticiones llamando a diferentes actividades o como último recurso solventando operaciones propias.

            p.mb-0 La representación gráfica de las actividades se hace por medio de un rectángulo que tiene bordes redondeados y dentro del rectángulo especifica el nombre de la actividad.

          .col-xl-5.col-lg-8.col-10       
            .titulo-sexto.color-acento-botones          
              span Representación gráfica de una actividad
            figure
              img(src="@/assets/curso/temas/t4/t4_03.svg", alt="alt")

          .cajon.cjn--yellow.p-4.mt-4
            p.mb-3 Para nombrar las actividades se usan verbos del modelo de negocio como, por ejemplo: 
            p Buscar factura, realizar pago y renovar lista, etc.


      .tarjeta.color-acento-botones--borde.p-4(titulo="Flujo entre actividades")
        h4 Flujo entre actividades
        p Este permite realizar los enlaces entre objetos y nodos de una actividad, estos agregan flujos de objetos y flujos de control. Su representación gráfica se hace por medio de una flecha con punta abierta que representa como es el orden en la ejecución de las actividades, muchas veces se adiciona una descripción en la flecha para una mejor comprensión.

        .row.justify-content-center.mb-4
          .col-lg-10
            .titulo-sexto.color-acento-botones          
              span Representación gráfica de un flujo de actividades
            figure
              img(src="@/assets/curso/temas/t4/t4_02.svg", alt="alt")

        p.mb-0 Cuando los flujos de actividades utilizan condiciones para su acción se representan mediante un rombo y son llamados nodos de decisión.

      .tarjeta.color-acento-botones--borde.p-4(titulo="Nodo inicial ")
        h4 Nodo inicial 
        .row.justify-content-center
          .col-xl-6.mb-4.mb-xl-0
            p.mb-0 Como su nombre lo dice el nodo inicial se encarga de empezar un flujo, cuando se llama a una actividad, por cada diagrama existe un solo nodo inicial, el cual se representa con un círculo pequeño.
          .col-xl-6
            .titulo-sexto.color-acento-botones          
              span Representación gráfica de un nodo final
            figure
              img(src="@/assets/curso/temas/t4/t4_04.svg", alt="alt")

      .tarjeta.color-acento-botones--borde.p-4(titulo="Nodo final ")
        h4 Nodo final
        .row.justify-content-center
          .col-12.mb-4
            p También es un nodo de control final. Su función es detener todos los flujos de una actividad, en una actividad pueden existir más de un nodo final. Este se representa con un círculo sólido con un hueco dentro como se puede observar a continuación: 
          .col-lg-7.col-10.mb-4         
            .titulo-sexto.color-acento-botones          
              span Representación gráfica de un nodo final
            figure
              img(src="@/assets/curso/temas/t4/t4_05.svg", alt="alt")
          .col-12.mb-3
            p.mb-4 Como parte de su aprendizaje le invito a ver el video denominado: Diagrama de Actividades - 15 - Tutorial UML en español, que se encuentra en la sección de material complementario.

            .row.mb-4
              .col-auto
                a.anexo(href="https://www.youtube.com/watch?v=GoYdpOVhDRc&list=PLM-p96nOrGcaw5dhv8wOA5tVVWEmXtA2F&index=15" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Enlace web. Diagrama de Actividades - 15 - Tutorial UML en español.
          
            p.mb-0 Después de realizada la descripción de los elementos que componen un diagrama de actividades se presenta el siguiente ejemplo de un diagrama de clase sobre un proceso de registro e inicio de sesión.

    separador

    #t_4_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.2 Ejemplo diagrama de actividades

    figure(data-aos="zoom-in")
      img(src="@/assets/curso/temas/t4/t4_06.png", alt="alt")
    .row.justify-content-center.top--negMargin(data-aos="fade").mb-5
      .col-lg-10
        .crd.bg--gray.shadow.brd--rad_01.p-4
          p.mb-0 A continuación, se realiza un ejemplo de un diagrama de actividades que tiene las funcionalidades de iniciar sesión y registrar en un sistema, por lo que se le invita a revisar el siguiente recurso de aprendizaje.

    h3(data-aos="fade-right") Diagrama de actividades
    p(data-aos="fade-left").mb-5 Ejemplo de diagramas de actividades

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-9
        figure
          img(src="@/assets/curso/temas/t4/t4_07.svg", alt="alt")

    .cajon.cjn--yellow.p-4.mb-5(data-aos="zoom-in")
      p.mb-0 Como se muestra en el ejemplo anterior, el flujo inicia con la actividad autenticar usuario y pasa por un nodo de decisión que verifica si el usuario existe no o no, si el usuario existe pasa a un nodo de decisión donde valida el usuario y si no es correcto, muestra un mensaje de error, si es correcto da acceso a la aplicación y muestra el menú inicio.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t4/t4_08.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[strong En caso de no existir el usuario pasa a la actividad de registrar usuario y después ingresa datos, luego sigue a un nuevo nodo de decisión, donde valida datos y da acceso a la aplicación por lo que sigue el flujo de actividad mostrando la interfaz del menú del sistema y finalmente termina la actividad con un nodo final.]








    
          




</template>

<script>
export default {
  name: 'Tema4',
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
