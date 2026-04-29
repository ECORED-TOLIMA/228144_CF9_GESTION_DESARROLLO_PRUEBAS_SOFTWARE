<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de la programación orientada a objetos

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/1.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg.mt-2
                p La programación orientada a objetos (POO) es un paradigma de desarrollo de software que organiza el código en torno a objetos, entidades que agrupan estado (atributos) y comportamiento (métodos). Este enfoque, ampliamente documentado por Horstmann (2019), permite modelar los sistemas de forma similar a como se percibe el mundo real, facilitando el diseño, la construcción y el mantenimiento de soluciones complejas.

                .cajon.color2.p-4.mt-2
                  p A diferencia de la programación estructurada, que organiza el código en funciones y procedimientos independientes, la POO encapsula los datos y las operaciones que los manipulan en unidades coherentes denominadas objetos. Esta organización reduce el acoplamiento entre componentes, mejora la reutilización del código y facilita el trabajo en equipo en proyectos de gran escala.
 
                p.mt-3 Los conceptos fundamentales que definen el paradigma orientado a objetos son:

    .row.align-items-center.justify-content-center.mt-4
      .col-lg-12
        SlyderF(columnas="col-lg-6 col-xl-4")
          //-Primer Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/2.png', alt='', style='width: 100px').m-auto
            p.text-center.mb-0 
              b Paradigma
            p.text-center Enfoque conceptual que define la forma de estructurar y organizar el código de un sistema de software.
          
          //-Segundo Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/3.png', alt='', style='width: 100px').m-auto
            p.text-center.mb-0 
              b Objeto
            p.text-center Entidad que representa un elemento del mundo real o conceptual, con estado (atributos) y comportamiento (métodos) propios.
            
          //-Tercer Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/4.png', alt='', style='width: 100px').m-auto
            p.text-center.mb-0 
              b Clase
            p.text-center Plantilla o molde que define la estructura y el comportamiento de los objetos creados a partir de ella. No ocupa memoria por sí misma.
            
          //-Cuarto Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/5.png', alt='', style='width: 100px').m-auto
            p.text-center.mb-0 
              b Encapsulamiento
            p.text-center Mecanismo que oculta los detalles internos de un objeto y expone únicamente la interfaz necesaria para interactuar con él.
            
          //-Quinto Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/6.png', alt='', style='width: 100px').m-auto
            p.text-center.mb-0 
              b Herencia
            p.text-center Capacidad de una clase de adquirir atributos y métodos de otra clase, favoreciendo la reutilización y la jerarquización del código.
            
          //-Sexto Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/7.png', alt='', style='width: 100px').m-auto
            p.text-center.mb-0 
              b Polimorfismo
            p.text-center Propiedad que permite a objetos de distintas clases responder de manera diferente a un mismo mensaje o llamada de método.
            
          //-Séptimo Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/8.png', alt='', style='width: 100px').m-auto
            p.text-center.mb-0 
              b Abstracción
            p.text-center Proceso de identificar las características esenciales de un objeto, ignorando los detalles irrelevantes para el problema en cuestión.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Concepto de programación orientada a objetos

    p A continuación, se presenta una línea de tiempo que permite comprender la evolución de la programación orientada a objetos, desde sus orígenes hasta su consolidación como paradigma central del desarrollo de software:

    .row.justify-content-center 
      .tarjeta.tarjeta--gris.p-4.bg-05
        LineaTiempoC.color-acento-contenido(text-small)
          //-Primer pestaña-----------------
          .row(titulo="1960")
            .col-md-6
              figure
                img(src='@/assets/curso/tema1/9.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p #[b Década de 1960 – Orígenes]
              p En el Instituto de Computación de Oslo, Ole-Johan Dahl y Kristen Nygaard desarrollan Simula, introduciendo los conceptos de clases, objetos y herencia para gestionar la complejidad del #[i software].
              

          //-Segunda pestaña
          .row(titulo="1970")

            .col-md-6
              figure
                img(src='@/assets/curso/tema1/10.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p #[b Década de 1970 – Consolidación]
              p En Xerox PARC, Alan Kay impulsa Smalltalk, que consolida la POO como un paradigma técnico y conceptual centrado en la interacción entre objetos.
          
          //-Tercera pestaña
          .row(titulo="1980 y 1990")

            .col-md-6
              figure
                img(src='@/assets/curso/tema1/11.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p #[b Décadas de 1980 y 1990 – Expansión]
              p La programación orientada a objetos se difunde ampliamente en la academia y la industria, integrándose en nuevos lenguajes y metodologías de desarrollo.
          
          //-Cuarta pestaña
          .row(titulo="1995")

            .col-md-6
              figure
                img(src='@/assets/curso/tema1/12.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p #[b 1995 – Popularización]
              p Sun Microsystems lanza Java, que fortalece la adopción de la POO gracias a la portabilidad ofrecida por la JVM y el principio Write Once, Run Anywhere.

          //-Quinta pestaña
          .row(titulo="Actualidad")

            .col-md-6
              figure
                img(src='@/assets/curso/tema1/13.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p #[b Actualidad – Uso generalizado]
              p La POO se consolida como uno de los paradigmas más utilizados en el desarrollo de aplicaciones modernas, sistemas empresariales y #[i software] multiplataforma.


    p.mt-4 Igualmente, la POO se fundamenta en cuatro pilares ampliamente reconocidos en la literatura especializada:

    .row.justify-content-center.mb-5.mt-3
      // Tarjeta 1--------------------------
      .col-md.tarjeta.conectada.bg-1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/14.svg', alt='Texto que describa la imagen', style='width: 70px').m-auto
          
        h2.text-center Abstracción
        p.text-center Representar entidades del dominio mediante clases, destacando solo las propiedades relevantes para el sistema que se está construyendo y descartando los detalles superfluos.
        
      //-Tarjeta 2--------------------------------
      .col-md.tarjeta.conectada.bg-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/15.svg', alt='Texto que describa la imagen', style='width: 70px').m-auto
          
        h2.text-center Encapsulamiento
        p.text-center Agrupar datos y métodos en una misma unidad (clase) y restringir el acceso directo a los datos internos, exponiendo únicamente una interfaz controlada.
      
      //-Tarjeta 3 ---------------------------------------------------
      .col-md.tarjeta.conectada.bg-1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/16.svg', alt='Texto que describa la imagen', style='width: 70px').m-auto
          
        h2.text-center Herencia
        p.text-center Crear nuevas clases basadas en clases existentes, heredando su estructura y añadiendo o modificando comportamientos, lo que evita la duplicación de código.
        
      //-Tarjeta 4 ---------------------------------------------------
      .col-md.tarjeta.conectada.bg-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/17.svg', alt='Texto que describa la imagen', style='width: 70px').m-auto
          
        h2.text-center Polimorfismo
        p.text-center Un mismo nombre de método puede tener comportamientos distintos según el tipo concreto del objeto que lo invoque, determinado en tiempo de ejecución.
        

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            p La siguiente tabla compara la programación orientada a objetos con otros paradigmas de programación, destacando las características que hacen de Java el lenguaje de elección para este componente formativo:
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 1.
              span Comparativo entre paradigmas de programación.

            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #FFEBBE")
                  tr
                    th Característica
                    th Programación estructurada
                    th POO (Java)
                    th Programación funcional
                tbody
                  tr(style="background-color: #F6F6F6")
                    td.text-start Unidad básica.
                    td.text-start Proceso actual.
                    td.text-start Objeto (instancia de clase).
                    td.text-start Función pura.
                  tr
                    td.text-start Organización del código.
                    td.text-start Módulos y funciones.
                    td.text-start Clases y jerarquías.
                    td.text-start Composición de funciones.
                  tr(style="background-color: #F6F6F6")
                    td.text-start Estado del programa.
                    td.text-start Variables globales o locales.
                    td.text-start Atributos encapsulados en objetos.
                    td.text-start Sin estado mutable (inmutabilidad).
                  tr
                    td.text-start Reutilización.
                    td.text-start Librerías de funciones.
                    td.text-start Herencia y composición.
                    td.text-start Funciones de orden superior.
                  tr(style="background-color: #F6F6F6")
                    td.text-start Lenguajes representativos.
                    td.text-start C, Pascal, FORTRAN.
                    td.text-start Java, Python, C#, Kotlin
                    td.text-start Haskell, Scala, F#.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Clases y objetos

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/18.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg.mt-2
                .cajon.color1.p-4.mt-2
                  p En esta temática se abordan los conceptos de clases y objetos como base de la programación orientada a objetos. Comprender esta relación permite identificar cómo se modelan entidades del mundo real dentro de un programa y cómo estas interactúan entre sí a través de sus atributos y comportamientos. Estos conceptos son esenciales para estructurar correctamente el código y facilitar su reutilización y mantenimiento.

                p.mt-3 Para profundizar en su definición, notación UML y su implementación práctica en Java, acceda al siguiente video, donde se explican y ejemplifican estos elementos de manera clara y aplicada:

    .row.justify-content-center.align-items-center.mt-4           
      .col-lg-12
        figure(data-aos="fade-down")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    p.text-center.mt-4 Los siguientes son conceptos clave relacionados con clases y objetos en Java:

    .row.justify-content-center.mb-5.mt-4.tarjeta--container
      // Tarjeta 1--------------------------
      .col-md.tarjeta.bg-1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/19.svg', alt='Texto que describa la imagen', style='width: 70px').m-auto
          
        h3.text-center Instancia
        p Objeto concreto creado en memoria mediante el operador new. Cada instancia tiene su propio estado independiente.
        
      //-Tarjeta 2--------------------------------
      .col-md.tarjeta.bg-7.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/20.svg', alt='Texto que describa la imagen', style='width: 70px').m-auto
          
        h3.text-center Constructor
        p Método especial con el mismo nombre de la clase que se ejecuta automáticamente al crear un objeto, encargado de inicializar sus atributos.

      //-Tarjeta 3 ---------------------------------------------------
      .col-md.tarjeta.bg-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/21.svg', alt='Texto que describa la imagen', style='width: 70px').m-auto
          
        h3.text-center Referencia
        p En Java, los objetos se manejan mediante variables de referencia que apuntan a la ubicación en memoria heap del objeto.

      //-Tarjeta 4 ---------------------------------------------------
      .col-md.border-radius-r.bg-12.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/22.svg', alt='Texto que describa la imagen', style='width: 70px').m-auto
          
        h3.text-center Recolector de basura
        p Mecanismo automático de Java que libera la memoria ocupada por objetos que ya no tienen referencias activas.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Atributos y métodos

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.mt-2
                p Los atributos y los métodos constituyen los dos componentes esenciales de cualquier clase. Los atributos representan el estado del objeto (qué es), mientras que los métodos representan su comportamiento (qué hace). Esta dualidad es fundamental en el diseño orientado a objetos: cada objeto agrupa sus datos y las operaciones que los manipulan en una unidad coherente.

                .cajon.color2.p-4.mt-2
                  p Los atributos son variables de instancia que pertenecen a la clase y almacenan las características de cada objeto. Cada objeto creado a partir de la clase tiene su propia copia de los atributos con valores independientes. Por convención en Java, los atributos se declaran con acceso private para garantizar el encapsulamiento.


              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/23.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")

      p.mt-4 Los métodos son funciones o procedimientos definidos dentro de la clase que describen el comportamiento de los objetos. Pueden acceder y modificar los atributos del objeto, recibir parámetros y retornar valores. El siguiente ejemplo ilustra la definición de una clase con ambos componentes:

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center.bg-09.bg-r8
          .col-lg-12.p-5.text-white
            .py-5
              p.mt-5.mb-0 public class Persona {
              p.margin-text-left.mt-0.mb-0 // Atributos (estado del objeto)
              p.margin-text-left.bloque-codigo private String nombre;
              p.margin-text-left.mt-0 private int edad;
              
              p.margin-text-left.mb-0 // Constructor
              p.margin-text-left.bloque-codigo public Persona(String nombre, int edad) {
              p.margin-text-2.bloque-codigo this.nombre = nombre;
              p.margin-text-2.bloque-codigo this.edad   = edad;
              p.margin-text-left }

              p.margin-text-left.mb-0 // Métodos (comportamiento del objeto)
              p.margin-text-left.bloque-codigo public void saludar() {
              p.margin-text-2.bloque-codigo System.out.println("Hola, soy " + nombre + " y tengo " + edad + " años.");
              p.margin-text-left }  
              
              p.margin-text-left.mb-0 public boolean esMayorDeEdad() {
              p.margin-text-2.bloque-codigo return edad >= 18;
              p.margin-text-left.mb-0 }  

              p.mt-0 }

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
