export default {
  global: {
    Name:
      'Fundamentos y aplicación del paradigma de programación orientada a objetos',
    Description:
      'Este componente aborda los fundamentos del paradigma de Programación Orientada a Objetos (POO), desde los conceptos de clases, objetos, atributos y métodos hasta la aplicación de los principios de herencia, polimorfismo y encapsulamiento. Integra el modelado de sistemas mediante el lenguaje UML y el uso de herramientas CASE, promoviendo la codificación en Java, la reutilización de código y la validación de aplicaciones funcionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Tema 1',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de programación orientada a objetos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clases y objetos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Atributos y métodos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Principios de herencia y polimorfismo',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Constructores y ciclo de vida de los objetos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Clases abstractas, interfaces y principios SOLID',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tema 2',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Lenguaje de modelado unificado UML',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Diagramas de clases',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Relaciones entre clases: asociación, agregación, composición y herencia',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Herramientas CASE para el diseño de diagramas de clases',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Ejemplo integrador: sistema de gestión académica',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tema 3',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Encapsulamiento en programación orientada a objetos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Modificadores de acceso público, privado y protegido',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Getters, setters y el patrón de encapsulamiento completo',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Clases anidadas e internas en Java',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Tema 4',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Codificación de diagramas de clases',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Implementación de la herencia en objetos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Reutilización de código, interfaces y tipos de herencia',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Polimorfismo y sobreescritura de métodos',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Tema 5',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Controles de validación en aplicaciones Java',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Manejo de excepciones en Java',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Refactorización, pruebas y depuración del programa',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Buenas prácticas y patrones de diseño básicos',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Tema 6',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Reflexión sobre el diseño orientado a objetos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Extensiones propuestas del sistema',
            hash: 't_6_2',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: '<strong>Abstracción:</strong>',
      significado:
        'proceso de identificar las características esenciales de un objeto, ignorando los detalles irrelevantes.',
    },
    {
      termino: '<strong>Clase abstracta:</strong>',
      significado:
        'clase que no puede instanciarse directamente; define métodos abstractos que sus subclases deben implementar.',
    },
    {
      termino: '<strong>Clase:</strong>',
      significado:
        'plantilla que define los atributos y métodos de los objetos creados a partir de ella.',
    },
    {
      termino: '<strong>Diagrama de clases:</strong>',
      significado:
        'representación gráfica UML que muestra las clases, atributos, métodos y relaciones de un sistema.',
    },
    {
      termino: '<strong>Encapsulamiento:</strong>',
      significado:
        'principio que oculta los datos internos de una clase y los expone solo mediante una interfaz pública controlada.',
    },
    {
      termino: '<strong>Herencia:</strong>',
      significado:
        'mecanismo por el cual una subclase adquiere atributos y métodos de una superclase mediante la palabra clave extends.',
    },
    {
      termino: '<strong>Herramienta CASE:</strong>',
      significado:
        'aplicación que automatiza tareas de análisis, diseño y documentación en el proceso de desarrollo de <em>software</em>.',
    },
    {
      termino: '<strong>Instancia:</strong>',
      significado:
        'objeto concreto creado con new a partir de una clase; tiene su propio estado en memoria.',
    },
    {
      termino: '<strong>Interfaz (interface):</strong>',
      significado:
        'contrato de comportamiento en Java que las clases implementan con la palabra clave implements.',
    },
    {
      termino: '<strong>JUnit:</strong>',
      significado:
        'framework de pruebas unitarias estándar en el ecosistema Java; utiliza anotaciones como @Test y @Override.',
    },
    {
      termino: '<strong>Modificador de acceso:</strong>',
      significado:
        'palabra reservada (public, private, protected) que controla la visibilidad de atributos y métodos.',
    },
    {
      termino: '<strong>Objeto:</strong>',
      significado:
        'entidad con estado (atributos) y comportamiento (métodos) propios, creada como instancia de una clase.',
    },
    {
      termino: '<strong>Patrón de diseño:</strong>',
      significado:
        'solución reutilizable y documentada a un problema recurrente en el diseño de <em>software</em> orientado a objetos.',
    },
    {
      termino: '<strong>Polimorfismo:</strong>',
      significado:
        'propiedad que permite que objetos distintos respondan diferente al mismo mensaje según su tipo real.',
    },
    {
      termino: '<strong>UML:</strong>',
      significado:
        'Lenguaje de Modelado Unificado; estándar gráfico del OMG para visualizar y documentar sistemas de <em>software</em>.',
    },
    {
      termino: '<strong>@Override:</strong>',
      significado:
        'anotación Java que indica que un método sobreescribe al de la superclase; activa el polimorfismo dinámico.',
    },
  ],
  referencias: [
    {
      referencia: 'Bloch, J. (2018). Effective Java (3rd ed.). Addison-Wesley.',
      link: '',
    },
    {
      referencia:
        'Booch, G., Rumbaugh, J. & Jacobson, I. (2005). <em>The Unified Modeling Language User Guide</em> (2nd ed.). Addison-Wesley.',
      link: '',
    },
    {
      referencia:
        'Deitel, P. & Deitel, H. (2018). <em>Java How to Program, Early Objects</em> (11th ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Gamma, E., Helm, R., Johnson, R. & Vlissides, J. (1994). <em>Design Patterns: Elements of Reusable Object-Oriented Software</em>. Addison-Wesley.',
      link: '',
    },
    {
      referencia:
        'Horstmann, C. S. (2019). <em>Core Java</em>, <em>Vol. 1: Fundamentals</em> (11th ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Martin, R. C. (2008). Clean Code: A Handbook of Agile Software Craftsmanship. Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Object Management Group. (2017). <em>Unified Modeling Language Specification</em>, Version 2.5.1. OMG.',
      link: '',
    },
    {
      referencia:
        'Pressman, R. S. & Maxim, B. R. (2020). <em>Ingeniería de software: un enfoque práctico</em> (9ª ed.). McGraw-Hill.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
