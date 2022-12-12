export default {
  global: {
    componenteFormativo:
      'Diagramas para la especificación y análisis de requisitos',
    descripcionCurso:
      'En este componente formativo se abordan los saberes de ingeniería de requisitos para el levantamiento de requerimientos que permiten tener una visión del comportamiento del <em>software</em> que se va a desarrollar. La descripción de funcionalidades se realiza con diagramas y elementos como casos de uso, historias de usuario que describen las interacciones del usuario con el <em>software</em>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/f1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/f2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/f3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/f4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Características Lenguaje Unificado de Modelado (UML)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Evolución del Lenguaje Unificado de Modelado UML',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Características generales de Lenguaje Unificado de Modelado UML',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Especificación y análisis de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Diagrama de casos de uso',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Componentes de los diagramas de casos de uso ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Relaciones de casos de uso',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Especificación de casos de uso',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Casos de uso reales (prototipos)',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Historias de usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Elementos de una historias de usuario',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Ejemplos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Plantillas de historias de usuario ',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Diagrama de actividades',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Elementos de un diagrama de actividades',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Ejemplo diagrama de actividades',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Ciclo de vida del desarrollo del <em>software</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Modelo C4',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ejemplos <em>Include, extends</em>',
      referencia:
        'Nicosiored. (2017, November 22). Diagrama de Casos de Uso II - 5 - Tutorial UML en español.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=DUjBnEvIm1M&list=PLM-p96nOrGcaw5dhv8wOA5tVVWEmXtA2F&index=5',
    },
    {
      tema: 'Diagrama de Actividades',
      referencia:
        'Nicosiored. (2018, January 31). Diagrama de Actividades - 15 - Tutorial UML en español.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=GoYdpOVhDRc&list=PLM-p96nOrGcaw5dhv8wOA5tVVWEmXtA2F&index=15',
    },
    {
      tema: 'Ciclo de vida del desarrollo del <em>software</em>',
      referencia:
        'Nicosiored. (2018, January 31). Diagrama de Actividades - 15 - Tutorial UML en español.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7Wsm07RmDpk&ab_channel=Eduterna',
    },
    {
      tema: 'Modelo C4',
      referencia:
        'hdeleon. net. (2020). Modelo de Arquitectura de <em>Software</em> C4 | Ejemplo práctico sencillo ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=2IJ29e0xTDc&ab_channel=hdeleon.net',
    },
  ],
  glosario: [
    {
      termino: 'Ágil',
      significado:
        'comprende un conjunto de tareas o acciones que se utilizan para producir y mantener productos, así como para lograr los objetivos del proceso. La actividad incluye los procedimientos, estándares, políticas y objetivos para crear y modificar un conjunto de productos de trabajo.',
    },
    {
      termino: 'Método',
      significado:
        'indica cómo construir técnicamente el <em>software</em>. Se incluyen técnicas de modelado y otras técnicas descriptivas.',
    },
    {
      termino: 'Metodología',
      significado: 'colección de métodos para resolver un tipo de problemas.',
    },
    {
      termino: 'Requerimiento',
      significado:
        'se refiere a la petición que se hace de algo que se solicita.',
    },
    {
      termino: 'Requisito',
      significado:
        'es la condición que debe cumplir algo, en general este cumple con lo que se requiere con el requerimiento.',
    },
    {
      termino: '<em>Stakeholders</em>',
      significado:
        'individuo u organización que comparte, reclama o le interesa un sistema o le compete una característica que satisface sus necesidades y expectativas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Booch, G., Rumbaugh, J., Jacobson, I., Molina, J.J.G., & Martínez, J.S. (2006).El lenguaje unificado de modelado: guía del usuario.Addison - Wesley.',
      link: '',
    },
    {
      referencia:
        'Booch, G. (1994). Object-oriented analysis and design. Redwood City.',
      link: '',
    },
    {
      referencia:
        'Ciclo de vida del desarrollo de <em>software</em>. (2021, October 24). Retrieved from ',
      link: 'https://ungoti.com/es/soluciones/desarrollo-de-software/sdlc',
    },
    {
      referencia:
        'Cohn, M. (2018). <em>User Stories and User Story Examples by Mike Cohn. [online] Mountain Goat Software.</em>',
      link: 'https://www.mountaingoatsoftware.com/agile/user-stories ',
    },
    {
      referencia:
        'Cohn, M. (2004). <em>User stories applied: For agile software development. Addison-Wesley Professional.</em>',
      link: '',
    },
    {
      referencia:
        '<em>DevOps software development and IT operations engineer working in... (2022, September 06). Retrieved from</em> ',
      link:
        'https://www.istockphoto.com/es/foto/ingeniero-de-desarrollo-de-software-y-operaciones-de-ti-de-devops-que-trabaja-en-un-gm1352203098-427695951',
    },
    {
      referencia:
        'Eduterna. (2020, June 24). SDLC-01. Ciclo de vida del Desarrollo de <em>Software. Youtube. Retrieved from</em>',
      link: 'https://www.youtube.com/watch?v=7Wsm07RmDpk&ab_channel=Eduterna',
    },
    {
      referencia:
        'ISO/IEC/IEEE 12207:2017(en), <em>Systems and software engineering — Software life cycle processes. (2022, September 06). Retrieved from</em>',
      link: 'https://www.iso.org/obp/ui/#iso:std:iso-iec-ieee:12207:ed-1:v1:en',
    },
    {
      referencia:
        'Larman, 2002 Larman, C. <em>“Applying UML and Patterns: An Introduction to Object-Oriented Analysis and Design and the Unified Process”. 2nd Ed. Prentice Hall, 2002</em> ',
      link: '',
    },
    {
      referencia:
        'Norris & Rigby. “Ingeniería de <em>software</em> explicada”, 1 edición Editorial Megabyte-Noriega editores, México,1994.',
      link: '',
    },
    {
      referencia:
        'Pino, F. J., García, F., Ruiz, F., & Piattini, M. (2006). Adaptación de las normas ISO/IEC 12207: 2002 e ISO/IEC 15504: 2003 para la evaluación de la madurez de procesos <em>software</em> en países en desarrollo. <em>IEEE Latin America Transactions</em>, 4(2), 17-24.',
      link: '',
    },
    {
      referencia:
        'Schmuller, J., & Garza Marín, A. D. (2000). Aprendiendo UML en 24 horas.Wake, W.C.  2003 <em>“Extreme Programming Explored” y “Refactoring Workbook”</em>',
      link: '',
    },
    {
      referencia:
        '<em>The C4 model for visualising software architecture. (2022, September 01). Retrieved from</em>',
      link: 'https://c4model.com',
    },
    {
      referencia:
        'Vivanco, J. (2021). El modelo C4 de documentación para la Arquitectura de <em>Software. Medium. Retrieved</em>',
      link:
        'https://medium.com/@javiervivanco/el-modelo-c4-de-documentaci%C3%B3n-para-la-arquitectura-de-software-424704528390',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zulema Yidney León Escobar',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Bogotá Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Luis Eyder Ortiz Collazos',
        cargo: 'Experto temático',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Javier Ricardo Luna Pineda',
        cargo: 'Diseñador instruccional',
        centro: 'La Empresa Y Los Servicios - Centro De La Industria',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jesus Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Magdi Khalifah',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
