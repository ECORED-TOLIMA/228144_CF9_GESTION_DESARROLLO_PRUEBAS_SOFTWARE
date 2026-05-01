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
            iframe(width="560" height="315" src="https://www.youtube.com/watch?v=bXgLHKaXXaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


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

      //-Elemento con bloques de còdigo
      .row.justify-content-center.mt-4
        .col-lg-9.bg-code1
          .row
            .col-lg-12.text-white
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


    .row.justify-content-center.mt-5
      p.text-center Igualmente, la siguiente tabla presenta los tipos de atributos y métodos más comunes en Java, junto con su descripción y el modificador que los declara:

      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 2.
              span Comparativo entre paradigmas de programación.

            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #FFEBBE")
                  tr
                    th(style="width: 240px;") Tipo
                    th(style="width: 260px;") Declaración Java
                    th Descripción
                tbody
                  tr(style="background-color: #F6F6F6")
                    td.text-start Atributo de instancia.
                    td.text-start private tipo nombre;
                    td.text-start Único para cada objeto. Almacena el estado individual.
                  tr
                    td.text-start Atributo de clase.
                    td.text-start static tipo nombre;
                    td.text-start Compartido por todos los objetos de la clase.
                  tr(style="background-color: #F6F6F6")
                    td.text-start Atributo constante.
                    td.text-start static final tipo NOMBRE;
                    td.text-start Valor fijo que no puede modificarse tras la inicialización.
                  tr
                    td.text-start Método de instancia.
                    td.text-start public tipo metodo()
                    td.text-start Opera sobre los datos del objeto que lo invoca.
                  tr(style="background-color: #F6F6F6")
                    td.text-start Método estático.
                    td.text-start public static tipo metodo()
                    td.text-start Puede invocarse sin crear un objeto; opera sobre datos de clase.
                  tr
                    td.text-start Getter.
                    td.text-start public tipo getNombre()
                    td.text-start Retorna el valor de un atributo privado.
                  tr(style="background-color: #F6F6F6")
                    td.text-start Setter.
                    td.text-start public void setNombre(tipo v)
                    td.text-start Asigna un valor al atributo privado, con posible validación.


    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Principios de herencia y polimorfismo

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/24.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg.mt-2
                p La herencia y el polimorfismo son dos de los cuatro pilares fundamentales del paradigma orientado a objetos y constituyen los mecanismos que aportan mayor flexibilidad y capacidad de extensión al diseño de sistemas.

                .cajon.color1.p-4.mt-2
                  p La herencia permite que una subclase (o clase derivada) adquiera los atributos y métodos de una superclase (o clase base). En Java, la herencia se declara con la palabra clave extends. Una subclase puede añadir nuevos atributos y métodos, o redefinir los métodos heredados para adaptar su comportamiento. Java solo permite herencia simple entre clases (una clase solo puede extender una clase), lo que evita las ambigüedades propias de la herencia múltiple.

                p.mt-3 Basado en lo anterior, se presente un ejemplo del uso de la herencia y el polimorfismo, evidenciando cómo una subclase hereda y redefine métodos de una superclase:

      .row.justify-content-center.mt-4
        .col-lg-9.bg-code2
          .row
            .col-lg-12.text-white              
              p.mb-0.bloque-codigo // Superclase
              p.mt-0.mb-0.bloque-codigo public class Animal {
              p.margin-text-left.bloque-codigo protected String nombre;
              
              p.margin-text-left.mt-3.mb-0.bloque-codigo public Animal(String nombre) {
              p.margin-text-2.bloque-codigo this.nombre = nombre;
              p.margin-text-left.bloque-codigo }

              p.margin-text-left.mt-3.mb-0.bloque-codigo public void hacerSonido() {
              p.margin-text-2.bloque-codigo System.out.println(nombre + " hace un sonido genérico.");
              p.margin-text-left.bloque-codigo }
              p.mt-0.bloque-codigo }

              p.mb-0.text-secondary // Subclase que hereda de Animal
              p.mt-0.mb-0.bloque-codigo public class Perro extends Animal {
              
              p.margin-text-left.mt-3.mb-0.bloque-codigo public Perro(String nombre) {
              p.margin-text-2.bloque-codigo super(nombre);  // Invoca el constructor de la superclase
              p.margin-text-left.bloque-codigo }

              p.margin-text-left.mt-3.mb-0.bloque-codigo @Override
              p.margin-text-left.mt-1.bloque-codigo public void hacerSonido() {
              p.margin-text-2.bloque-codigo System.out.println(nombre + " dice: ¡Guau!");
              p.margin-text-left.bloque-codigo }
              p.mt-0.bloque-codigo }

              p.mb-0.text-secondary // Polimorfismo en acción:
              p.mt-0.mb-0.bloque-codigo Animal a = new Perro("Rex");
              p.mt-0.mb-0.bloque-codigo a.hacerSonido();  // Imprime: Rex dice: ¡Guau!
        
    .row.justify-content-center.mt-4
      .col-lg-9
        .row.align-items-center.bg-4
          .col-lg-12.p-3
            .row.align-items-start
              .col-lg-1.mb-lg-0.d-flex.d-none.d-lg-block
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema1/25.svg', style='width: 120px').m-auto
              
              .col
                p El polimorfismo permite que una referencia de la superclase apunte a un objeto de cualquiera de sus subclases. En tiempo de ejecución, Java determina automáticamente qué versión del método invocar según el tipo real del objeto, gracias al mecanismo de enlace dinámico. La anotación @Override indica explícitamente que un método sobreescribe uno de la superclase y Java verificará en tiempo de compilación que la firma sea correcta.       

    separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Constructores y ciclo de vida de los objetos
    
    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/26.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En Java, el constructor es un método especial con el mismo nombre de la clase y sin tipo de retorno. Se ejecuta automáticamente cuando se crea un objeto con el operador new. Su función principal es inicializar los atributos del objeto con valores adecuados. Si no se define ningún constructor, Java proporciona automáticamente un constructor por defecto sin parámetros que inicializa los atributos a sus valores por defecto (0, false, null).
    
    p.mt-4 Java permite definir múltiples constructores en una misma clase, siempre que difieran en el número o tipo de parámetros (sobrecarga de constructores). Esto proporciona flexibilidad al crear objetos en distintos contextos. Es así como el siguiente ejemplo muestra el uso de constructores en Java, ilustrando la inicialización de objetos, la sobrecarga de constructores y su papel en el ciclo de vida de los objetos:

      .row.justify-content-center.mt-4
        .col-lg-9.bg-code3
          .row
            .col-lg-12.text-white              
              p.mb-0.bloque-codigo public class Rectangulo {
              p.margin-text-left.bloque-codigo private double ancho;
              p.margin-text-left.bloque-codigo private double alto;
              
              p.margin-text-left.mt-3.mb-0 // Constructor por defecto
              p.margin-text-left.bloque-codigo public Rectangulo() {
              p.margin-text-2.bloque-codigo this.ancho = 0;
              p.margin-text-2.bloque-codigo this.alto  = 0;
              p.margin-text-left.mt-0 }

              p.margin-text-left.mt-3.mb-0 // Constructor parametrizado
              p.margin-text-left.bloque-codigo public Rectangulo(double ancho, double alto) {
              p.margin-text-2.bloque-codigo this.ancho = ancho;
              p.margin-text-2.bloque-codigo this.alto  = alto;
              p.margin-text-left.mt-0 }

              p.margin-text-left.mt-3.mb-0 // Constructor de copia (patrón manual en Java)
              p.margin-text-left.bloque-codigo public Rectangulo(Rectangulo r) {
              p.margin-text-2.bloque-codigo this.ancho = r.ancho;
              p.margin-text-2.bloque-codigo this.alto  = r.alto;
              p.margin-text-left.mt-0 }

              p.margin-text-left.mt-3.mb-0 public double calcularArea()      { return ancho * alto; }
              p.margin-text-left.bloque-codigo public double calcularPerimetro() { return 2 * (ancho + alto); }

              p.margin-text-left.mt-3.mb-0 @Override
              p.margin-text-left.bloque-codigo public String toString() {
              p.margin-text-2.bloque-codigo return "Rectángulo[" + ancho + "x" + alto + "] Area=" + calcularArea();
              p.margin-text-left.mt-0 }

              p.mt-0 }

              p.mb-0.bloque-codigo // Uso:
              p.mb-0.bloque-codigo Rectangulo r1 = new Rectangulo();           // Constructor por defecto
              p.mb-0.bloque-codigo Rectangulo r2 = new Rectangulo(5.0, 3.0);   // Constructor parametrizado
              p.mb-0.bloque-codigo Rectangulo r3 = new Rectangulo(r2);          // Constructor de copia
              p.mb-0.bloque-codigo System.out.println(r2);  // Rectángulo[5.0x3.0] Area=15.0

    .row.justify-content-center.mt-4
      .col-lg-9
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p En Java, a diferencia de C++, no existen destructores explícitos. La gestión de memoria es automática a través del Garbage Collector (GC), que detecta y libera los objetos sin referencias activas. Cuando es necesario liberar recursos específicos (archivos, conexiones de red), se utiliza el bloque try-with-resources introducido en Java 7, que cierra automáticamente los recursos al finalizar el bloque.

    separador
    #t_1_6.titulo-segundo.color-acento-contenido
      h2 1.6 Clases abstractas, interfaces y principios SOLID
    
    p En Java, una clase abstracta se declara con la palabra clave abstract y puede contener dos tipos de métodos:

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0.mb-5
        .tarjeta-img-izq.p-4.bg-4
          .tarjeta-img-izq__icon
            img(src='@/assets/curso/tema1/27.svg')
          .tarjeta-img-izq__text
            h4 Abstractos
            p Se declaran sin cuerpo y definen comportamientos que la clase base no implementa directamente, estableciendo un contrato que las subclases deben cumplir mediante su propia implementación.

      .col-lg-6
        .tarjeta-img-izq.p-4.bg-4
          .tarjeta-img-izq__icon
            img(src='@/assets/curso/tema1/28.svg')
          .tarjeta-img-izq__text
            h4 Concretos
            p Cuentan con una implementación definida y permiten a la clase abstracta ofrecer funcionalidad común, que puede ser utilizada directamente por las subclases o redefinida para adaptar su comportamiento a necesidades específicas.

    .row.bg-07.p-md-5.mt-0
      .row.align-items-center.justify-content-center.p-4
        .col-lg-10

          .row.align-items-center.justify-content-center
            .col-lg-12(data-aos="fade-down")
              .row.d-flex.align-items-center(data-aos="fade-right")
                .col-lg-5.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex
                    img(src='@/assets/curso/tema1/29.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                .col-lg
                  p No puede instanciarse directamente; su propósito es definir una estructura común y un contrato para las subclases que la extienden.
                  p Por su parte, una interfaz (interface) es un contrato de comportamiento más estricto: todos sus métodos son implícitamente abstractos (antes de Java 8) y públicos. Una clase puede implementar múltiples interfaces con la palabra clave implements, lo que simula la herencia múltiple de comportamiento sin las ambigüedades asociadas. Igualmente, se ejemplifica el uso de una clase abstracta, combinando métodos abstractos y concretos, y evidencia el polimorfismo al tratar distintas formas mediante una referencia común:

    .row.justify-content-center
      .col-lg-9.bg-code4
        .row
          .col-lg-12.text-white              
            p.mb-0.bloque-codigo // Clase abstracta
            p.mb-0.bloque-codigo public abstract class Forma {
            p.margin-text-left.bloque-codigo public abstract double calcularArea();
            p.margin-text-left.bloque-codigo public abstract double calcularPerimetro();

            
            p.margin-text-left.mt-3.mb-0 // Método concreto compartido por todas las subclases
            p.margin-text-left.bloque-codigo public void mostrarDatos() {
            p.margin-text-2.bloque-codigo System.out.println("Área: " + calcularArea() +
            p.margin-text-3.bloque-codigo  " | Perímetro: " + calcularPerimetro());
            p.margin-text-left.bloque-codigo }
            p.mt-0 }

            p.mb-0.bloque-codigo public class Circulo extends Forma {
            p.margin-text-left.bloque-codigo private double radio;
            p.margin-text-left public Circulo(double radio) { this.radio = radio; }

            p.margin-text-left.bloque-codigo @Override public double calcularArea()      { return Math.PI * radio * radio; }
            p.margin-text-left.bloque-codigo @Override public double calcularPerimetro() { return 2 * Math.PI * radio; }
            
            p.mt-0 }

            p.mb-0.bloque-codigo // Uso polimórfico:
            p.mb-0.bloque-codigo List&lt;Forma&gt; formas = new ArrayList<>();
            p.mb-0.bloque-codigo formas.add(new Circulo(5.0));
            p.mb-0.bloque-codigo formas.add(new Rectangulo(4.0, 6.0));
            p.mb-0.bloque-codigo for (Forma f : formas) f.mostrarDatos();

    p.mt-4 Para finalizar, los principios SOLID, formulados por Martin (2008), constituyen un conjunto de cinco directrices del diseño orientado a objetos que guían la construcción de software mantenible, escalable y bien estructurado. Su aplicación es especialmente relevante en proyectos Java de mediana y gran escala, y se describen a continuación:


    .row.justify-content-center.mt-4
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema1/30.png', alt='', style="width: 100%").m-auto
      .col-lg-8
        LineaTiempoD.color-primario.linea-bold
          .row(numero="S" titulo="Responsabilidad Única (SRP)")
            p Cada clase debe tener una única razón para cambiar; es decir, debe encargarse de una sola responsabilidad bien definida.
    
          .row(numero="O" titulo="Abierto/Cerrado (OCP)")
            p Las clases deben estar abiertas para la extensión (se puede añadir comportamiento nuevo) pero cerradas para la modificación (sin alterar el código existente).
    
          .row(numero="L" titulo="Sustitución de Liskov (LSP)")
            p Los objetos de una subclase deben poder sustituir a los de la superclase sin alterar el correcto funcionamiento del programa.

          .row(numero="I" titulo="Segregación de Interfaces (ISP)")
            p Es preferible tener varias interfaces específicas y pequeñas que una única interfaz general y extensa.

          .row(numero="D" titulo="Inversión de Dependencias (DIP)")
            p Los módulos de alto nivel no deben depender de módulos de bajo nivel; ambos deben depender de abstracciones (clases abstractas o interfaces).
    

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
