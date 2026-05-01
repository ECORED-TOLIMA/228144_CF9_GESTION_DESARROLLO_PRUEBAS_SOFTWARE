<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Modelado de sistemas mediante UML
    
    figure
      img(src='@/assets/curso/tema2/1.png', alt='', style="width: 1226px").m-auto
    
    p.mt-4 El modelado de sistemas es una etapa fundamental en el ciclo de vida del desarrollo de software. Antes de escribir código, es necesario diseñar y documentar la estructura del sistema para detectar problemas de diseño, comunicar la arquitectura al equipo y servir de guía durante la implementación. El Lenguaje de Modelado Unificado (UML) es el estándar internacional más utilizado para este propósito.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Lenguaje de modelado unificado UML
    
    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/2.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p El Lenguaje de Modelado Unificado (UML, por sus siglas en inglés Unified Modeling Language) fue desarrollado por Grady Booch, Ivar Jacobson y James Rumbaugh, conocidos como los "Tres Amigos", y adoptado como estándar por el Object Management Group (OMG) en 1997. La versión actual, UML 2.5.1, fue publicada en 2017 y es la referencia oficial del estándar (OMG, 2017).

                .cajon.color2.p-4
                  p UML no es un lenguaje de programación, sino una herramienta de modelado que permite visualizar, especificar, construir y documentar los artefactos de un sistema de software. Es independiente del lenguaje de programación utilizado, por lo que los mismos diagramas UML pueden guiar la implementación tanto en Java como en Python, C# u otro lenguaje orientado a objetos.
                
                p.mt-4 UML ofrece 14 tipos de diagramas agrupados en dos grandes categorías:
    

    .row.justify-content-center.mt-5
      // Tarjeta 1
      .col-12.col-md-6.col-lg-5.mb-4
        .tarjeta-diagrama
          .tarjeta-diagrama__header
            img(src="@/assets/curso/tema2/3.png", alt="")

          .tarjeta-diagrama__body
            h4 Diagramas estructurales
            p Representan la estructura estática del sistema. Incluyen el diagrama de clases, de objetos, de componentes, de despliegue, de paquetes y de estructura compuesta.
      
      // Tarjeta 2
      .col-12.col-md-6.col-lg-5.mb-4
        .tarjeta-diagrama
          .tarjeta-diagrama__header
            img(src="@/assets/curso/tema2/4.png", alt="")

          .tarjeta-diagrama__body
            h4 Diagramas de comportamiento
            p Representan la dinámica del sistema. Incluyen el diagrama de casos de uso, de secuencia, de colaboración, de actividad, de estados y de temporización.

    p.mt-4 Para el diseño orientado a objetos, el diagrama de clases es el más relevante, ya que establece la estructura del sistema que será implementada directamente en código Java. Las ventajas del uso de UML documentadas por Booch et al. (2005) incluyen la independencia del lenguaje, la facilidad de comunicación entre el equipo y la capacidad de detectar errores de diseño antes de la fase de codificación.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Diagramas de clases
    
    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.mt-4
                .cajon.color1.p-4
                  p El diagrama de clases es el diagrama estructural más importante en UML para el diseño orientado a objetos. Representa gráficamente las clases que conforman un sistema, sus atributos, métodos y las relaciones entre ellas. Es el punto de partida para la implementación en código y el artefacto de diseño más utilizado en proyectos Java.

                p.mt-4 LCada clase se representa mediante un rectángulo dividido en tres secciones: el nombre de la clase (en la sección superior), los atributos con su tipo (en la sección central) y los métodos con sus parámetros y tipo de retorno (en la sección inferior). La notación de visibilidad se indica mediante los siguientes símbolos:

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/5.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              
    //-tarjeta numerada
    .row.mt-4 
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center
            b + (público)
          p.text-center Accesible desde cualquier clase del sistema; equivale a public en Java.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center
            b - (privado)
          p.text-center Solo accesible dentro de la propia clase; equivale a private en Java.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center
            b # (protegido)
          p.text-center Accesible desde la clase y sus subclases; equivale a protected en Java.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2 4
          p.text-center #[b ~ (paquete)]
          p.text-center Accesible desde las clases del mismo paquete; equivale al acceso por defecto (sin modificador) en Java.


    p.mt-4 La siguiente figura muestra nuevamente el diagrama UML de la clase Estudiante como referencia para identificar las secciones y la notación de visibilidad:
    
    .row.justify-content-center
      .col-10
        .titulo-sexto.bg-14.mb-3.mt-4
          h5 Figura 1.
          span Diagrama UML de la clase Estudiante mostrando visibilidad de atributos y métodos.
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema2/6.png',
            alt='Figura 1 que presenta el mismo diagrama UML de la clase Estudiante, retomado con un enfoque distinto, orientado a identificar la notación de visibilidad y acceso. Se destacan los atributos privados, marcados con –, y los métodos públicos, señalados con +, como parte de la interfaz externa de la clase.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema2/7.png',
            alt=''
          )
        
        .row.align-items-start.mt-4.bg-4.p-3
          .col-lg-1.mb-lg-0.d-flex.d-none.d-lg-block
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema2/8.svg', style='width: 120px').m-auto          
          .col
            p En el diagrama se puede notar que los atributos: codigo, nombre y promedio están marcados con el símbolo - (privado), lo que indica que solo pueden ser accedidos desde dentro de la clase. Los métodos públicos (marcados con +) constituyen la interfaz de la clase accesible desde el exterior.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Relaciones entre clases: asociación, agregación, composición y herencia

    p Las relaciones entre clases definen cómo se conectan y comunican los elementos del sistema. Cada tipo de relación expresa un nivel diferente de dependencia y acoplamiento entre las clases. La correcta elección del tipo de relación es fundamental para un diseño orientado a objetos robusto y mantenible.

    p La siguiente figura ilustra los cuatro tipos de relaciones más importantes en los diagramas de clases UML, mostrando la notación gráfica de cada una:

    .row.justify-content-center
      .col-10
        .titulo-sexto.bg-14.mb-3.mt-4
          h5 Figura 2.
          span Tipos de relaciones en diagramas de clases UML: composición y agregación.
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema2/9.png',
            alt='Figura 2 que ilustra los tipos de relaciones en diagramas de clases UML: composición y agregación. El ejemplo muestra la relación de composición entre Pedido y DetallePedido, donde los detalles dependen del ciclo de vida del pedido, y la relación de agregación entre Departamento y Empleado, en la que los empleados pueden existir independientemente del departamento al que estén asociados.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema2/10.png',
            alt=''
          )
        
        .row.align-items-start.mt-4.bg-4.p-3
          .col-lg-1.mb-lg-0.d-flex.d-none.d-lg-block
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema2/11.svg', style='width: 120px').m-auto          
          .col
            p En la figura se pueden observar dos tipos de relaciones: la composición (rombo relleno negro) entre Pedido y DetallePedido, donde el DetallePedido no puede existir sin su Pedido; y la agregación (rombo vacío) entre Departamento y Empleado, donde los empleados pueden existir independientemente del departamento.


    .titulo-tres.mt-5: h3 Asociación

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/12.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p La asociación es la relación más general entre dos clases. Indica que los objetos de una clase conocen o utilizan objetos de otra, sin que ninguna dependa existencialmente de la otra. En Java se implementa mediante un atributo que contiene una referencia a la otra clase. La multiplicidad (1..1, 0..*, 1..*) indica cuántos objetos participan en cada extremo de la relación. A continuación, su ejemplificación:
                
                .bg-code5.mt-4
                  .row
                    .col-lg-12.text-white               
                      p.mb-0.bloque-codigo public class Profesor {
                      
                      p.margin-text-left.bloque-codigo private String nombre;
                      p.margin-text-left private Curso curso;  // Asociación con Curso

                      p.margin-text-left.mt-4.bloque-codigo public void asignarCurso(Curso c) { this.curso = c; }
                      p.margin-text-left.bloque-codigo public Curso getCurso()
                        span.margin-text-2 { return curso; }          
                      | }

    .titulo-tres.mt-5: h3 Agregación

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")

              .col-lg
                p La asociación es la relación más general entre dos clases. Indica que los objetos de una clase conocen o utilizan objetos de otra, sin que ninguna dependa existencialmente de la otra. En Java se implementa mediante un atributo que contiene una referencia a la otra clase. La multiplicidad (1..1, 0..*, 1..*) indica cuántos objetos participan en cada extremo de la relación. A continuación, su ejemplificación:
                
                .bg-code5.mt-4
                  .row
                    .col-lg-12.text-white               
                      p.mb-0.bloque-codigo public class Departamento {
                      
                      p.margin-text-left.bloque-codigo private String nombre;
                      p.margin-text-left private List&lt;Empleado&gt; empleados = new ArrayList&lt;&gt;();

                      
                      p.margin-text-left.mt-4.bloque-codigo // El Empleado existe fuera del Departamento (agregación débil)
                      p.margin-text-left.bloque-codigo public void agregarEmpleado(Empleado e) { empleados.add(e); }
                      p.margin-text-left.bloque-codigo public void retirarEmpleado(Empleado e) { empleados.remove(e); }
                      
                      | }
              
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/13.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              
              
    .titulo-tres.mt-5: h3 Composición

    .row.justify-content-center
      p La composición es una relación "todo-parte" fuerte. El objeto parte no puede existir sin el todo; su ciclo de vida está ligado al del objeto contenedor. En Java se implementa creando los objetos parte directamente dentro del constructor o los métodos del todo. Representada de esta manera:
      .col-lg-9.bg-code4
        .row
          .col-lg-12.text-white 
            p.mb-0.bloque-codigo constructor o los métodos del todo. Representada de esta manera:
            p.mb-0.bloque-codigo public class Pedido {
            
            p.margin-text-left.bloque-codigo private String numero;
            p.margin-text-left private List&lt;DetallePedido&gt; detalles = new ArrayList&lt;&gt;();

            p.margin-text-left public Pedido(String numero) { this.numero = numero; }
            
            p.margin-text-left.mt-4.mb-0.bloque-codigo // El DetallePedido se crea dentro del Pedido (composición)
            p.margin-text-left.bloque-codigo public void agregarProducto(String nombre, int cant, double precio) {
            p.margin-text-2.bloque-codigo detalles.add(new DetallePedido(nombre, cant, precio));

            p.margin-text-left }
            
            p.margin-text-left.bloque-codigo public double calcularTotal() {
            p.margin-text-2.bloque-codigo return detalles.stream().mapToDouble(d -> d.getSubtotal()).sum();
            p.margin-text-left.bloque-codigo }
            
            p.mt-0.bloque-codigo }

    .titulo-tres.mt-5: h3 Herencia (generalización)

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/14.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                .cajon.color1.p-4
                  p La relación de herencia o generalización representa la relación "es un" entre clases. La subclase hereda todos los atributos y métodos no privados de la superclase y puede añadir o redefinir comportamientos. En UML se representa con una flecha de triángulo vacío apuntando desde la subclase hacia la superclase.

                p.mt-4 La siguiente figura muestra la jerarquía de herencia del sistema académico, donde Persona es la clase abstracta base y Estudiante y Docente son sus subclases concretas:

    .row.justify-content-center
      .col-10
        .titulo-sexto.bg-14.mb-3.mt-4
          h5 Figura 3.
          span Jerarquía de herencia: Persona (abstracta) con subclases Estudiante y Docente.
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema2/15.png',
            alt='Figura 3. Jerarquía de herencia del sistema académico, donde la clase abstracta Persona define los atributos y métodos comunes, y las subclases Estudiante y Docente los especializan. La relación se representa con una flecha de triángulo vacío, que indica herencia (“es un”) y permite la reutilización de código.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema2/16.png',
            alt=''
          )
        
    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p La figura muestra que las clases Estudiante y Docente heredan de la clase abstracta Persona (indicada con el nombre en cursiva en UML). Ambas subclases tienen sus propios atributos y métodos adicionales, y sobreescriben el método toString() de la clase base.

        p.mt-4 La siguiente tabla resume los cuatro tipos de relaciones UML con su notación, la dependencia de vida entre los objetos involucrados y la forma de implementación en Java:

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 3.
              span Tipos de relaciones UML y su implementación en Java.

            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #FFEBBE")
                  tr
                    th Tipo de relación
                    th Símbolo UML
                    th Dependencia de vida
                    th Implementación Java
                tbody
                  tr(style="background-color: #F6F6F6")
                    td.text-start Asociación.
                    td.text-start Línea sólida con flecha.
                    td.text-start No (independientes).
                    td.text-start Atributo referencia.
                  tr
                    td.text-start Agregación.
                    td.text-start Rombo vacío (blanco).
                    td.text-start No (partes independientes).
                    td.text-start Atributo / setter externo.
                  tr(style="background-color: #F6F6F6")
                    td.text-start Composición.
                    td.text-start Rombo relleno (negro).
                    td.text-start Sí (partes dependen del todo).
                    td.text-start new interno al todo.
                  tr
                    td.text-start Herencia.
                    td.text-start Flecha triangular vacía.
                    td.text-start Sí (jerarquía de tipos).
                    td.text-start extends / implements.

    separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Herramientas CASE para el diseño de diagramas de clases

    p Las herramientas CASE (Computer-Aided Software Engineering) son aplicaciones de software que automatizan y asisten las tareas de análisis, diseño y documentación en el proceso de desarrollo de sistemas. En el contexto de Java y UML, estas herramientas permiten crear diagramas de clases de forma visual, generar código esqueleto Java a partir del diagrama (ingeniería directa) y crear diagramas UML a partir de código Java existente (ingeniería inversa).

    p Las herramientas CASE más utilizadas en proyectos Java son:

    .row.justify-content-center.mt-4
      .col-lg-8
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="StarUML")
            p Herramienta multiplataforma de código abierto que soporta UML 2.x. Genera código esqueleto Java e importa/exporta en formato XMI. Es la opción más recomendada para entornos académicos por su accesibilidad y funcionalidades.
    
          .row(numero="2" titulo="Visual Paradigm")
            p Plataforma profesional con integración directa a IntelliJ IDEA y Eclipse. Ofrece ingeniería inversa del código Java a UML y soporte para metodologías ágiles.
    
          .row(numero="3" titulo="IntelliJ IDEA (integrado)")
            p El IDE más popular para Java incluye visualización de diagramas de clases directamente desde el código fuente, sin necesidad de herramientas externas.

          .row(numero="4" titulo="Lucidchart")
            p Herramienta colaborativa en línea que permite crear diagramas UML en tiempo real con múltiples usuarios simultáneos. Ideal para equipos de desarrollo ágiles y distribuidos.

          .row(numero="5" titulo="Draw.io (diagrams.net)")
            p Aplicación web gratuita con soporte UML, integrada en Google Drive, Confluence y GitHub. Es muy utilizada en equipos que trabajan en la nube.
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema2/17.png', alt='', style="width: 100%").m-auto

    .row.justify-content-center.mt-4
      p.text-center La siguiente tabla presenta una comparación de estas herramientas según criterios relevantes para entornos académicos y profesionales:
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 4.
              span Comparativo de herramientas CASE para diseño UML con Java.

            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #FFEBBE")
                  tr
                    th Herramienta
                    th Costo
                    th Gen. código Java
                    th Ingeniería inversa
                    th Colaboración online
                tbody
                  tr(style="background-color: #F6F6F6")
                    td.text-start StarUML
                    td.text-start Gratuito / bajo
                    td.text-start Sí
                    td.text-start Parcial
                    td.text-start No
                  tr
                    td.text-start Visual Paradigm
                    td.text-start Pago / trial
                    td.text-start Sí
                    td.text-start Sí
                    td.text-start Limitada
                  tr(style="background-color: #F6F6F6")
                    td.text-start IntelliJ IDEA
                    td.text-start Gratis / Pro
                    td.text-start Indirecta
                    td.text-start Sí
                    td.text-start No
                  tr
                    td.text-start Lucidchart
                    td.text-start Freemium
                    td.text-start No
                    td.text-start No
                    td.text-start Sí
                  tr(style="background-color: #F6F6F6")
                    td.text-start Draw.io
                    td.text-start Gratuito
                    td.text-start No
                    td.text-start No
                    td.text-start Sí

    separador
    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5 Ejemplo integrador: sistema de gestión académica

    .row.align-items-center
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/18.png', alt='', style="width: 360px").m-auto
      .col-lg-8.bg-4.p-4
    
        figure.d-flex.d-none.d-lg-block
          img(src="@/assets/curso/tema2/19.svg", alt="", style="width: 80px")
    
        p.mt-3 Para consolidar los conceptos de modelado UML, se presenta el diagrama de clases completo del sistema de gestión académica que se implementará en Java a lo largo de este componente formativo. Este diagrama ilustra la aplicación simultánea de los cuatro tipos de relaciones y la notación UML completa.

    .row.justify-content-center.mt-4
      p Es por ello, que la siguiente figura presenta el diagrama de clases completo del sistema, incluyendo las relaciones de herencia, asociación y sus multiplicidades:
      .col-10
        .titulo-sexto.bg-14.mb-3.mt-4
          h5 Figura 4.
          span Diagrama de clases UML completo del sistema de gestión académica.
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema2/20.png',
            alt='Figura 4 que presenta el diagrama de clases UML completo de un sistema de gestión académica, mostrando las clases Persona, Estudiante, Curso y Docente, con sus atributos, métodos y niveles de visibilidad, así como las relaciones y multiplicidades que estructuran la interacción entre los distintos actores y componentes del sistema.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema2/21.png',
            alt=''
          )
        p.mt-4 El diagrama muestra la clase abstracta Persona como base de la jerarquía. Las clases Estudiante y Docente la extienden mediante herencia. Un Docente puede dictar entre 1 y 3 Cursos (asociación 1..3), y un Curso puede tener de 0 a muchos Estudiantes matriculados (asociación 0..*). Este modelo será la base del proyecto integrador desarrollado en la sección 6 del presente componente.

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
