<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Validación y ajustes del programa

    figure
      img(src='@/assets/curso/tema5/1.png', alt='', style="width: 1226px").m-auto
    
    p.mt-4 La validación y los ajustes del programa son etapas fundamentales del ciclo de vida del #[i software] que garantizan que la aplicación funcione correctamente, procese datos válidos y brinde una experiencia adecuada al usuario. Un programa sin controles de validación es susceptible a errores, datos inconsistentes y comportamientos inesperados que pueden afectar negativamente la experiencia del usuario y la integridad del sistema.

    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Controles de validación en aplicaciones Java

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-4(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema5/2.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p Los controles de validación son mecanismos implementados en el código que verifican si los datos ingresados o procesados por el programa cumplen con los requisitos definidos antes de continuar con la ejecución. En Java, los controles de validación se implementan principalmente en los métodos setter, los constructores y los métodos de negocio mediante bloques condicionales y el lanzamiento de excepciones.

    .row.align-items-center.justify-content-center.mt-4
      p.text-center Existen diferentes tipos de validaciones que se aplican según el tipo de dato y el contexto del sistema:
      .col-lg-12.mt-3
        SlyderF(columnas="col-lg-6 col-xl-4")
          //-Primer Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/3.svg', alt='', style='width: 100px').m-auto
            p.text-center.mb-0 
              b Validación de tipo de dato
            p.text-center Verifica que el dato corresponda al tipo esperado por el sistema. Java es fuertemente tipado, por lo que muchas validaciones de tipo son detectadas en tiempo de compilación.
            
          //-Segundo Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/4.svg', alt='', style='width: 100px').m-auto
            p.text-center.mb-0 
              b Validación de rango
            p.text-center Asegura que el valor numérico o temporal se encuentre dentro de un intervalo permitido. Ejemplo: la edad debe estar entre 0 y 120 años.
            
          //-Tercer Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/5.svg', alt='', style='width: 100px').m-auto
            p.text-center.mb-0 
              b Validación de formato
            p.text-center Comprueba que el dato cumpla con un patrón estructural específico. En Java se usan expresiones regulares (clase Pattern) para validar formatos como correos electrónicos, números de teléfono o códigos.
            
          //-Cuarto Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/6.svg', alt='', style='width: 100px').m-auto
            p.text-center.mb-0 
              b Validación de presencia
            p.text-center Verifica que los campos obligatorios no sean null ni estén vacíos. En Java se utiliza null y el método String.isBlank() (Java 11+).
            
          //-Quinto Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/7.svg', alt='', style='width: 100px').m-auto
            p.text-center.mb-0 
              b Validación de consistencia
            p.text-center Comprueba que los datos sean coherentes entre sí. Ejemplo: la fecha de fin no puede ser anterior a la de inicio.
            
    .row.justify-content-center.mt-4
      .col-lg-8
        p Clarificando lo anterior, se presenta un ejemplo práctico en Java que ilustra la implementación de controles de validación en métodos setter, mostrando cómo verificar tipos, rangos, formatos y valores obligatorios mediante condiciones y excepciones:
        .row.bg-code3
          .col-lg-12.text-white
            p.mb-0.bloque-codigo public class Estudiante {
            p.margin-text-left.bloque-codigo private String nombre;
            p.margin-text-left.bloque-codigo private int edad;
            p.margin-text-left.bloque-codigo private double promedio;
            p.margin-text-left private String email;

            p.margin-text-left.bloque-codigo public void setNombre(String n) {
            p.margin-text-2.bloque-codigo if (n == null || n.isBlank())
            p.margin-text-3.bloque-codigo throw new IllegalArgumentException("El nombre es obligatorio.");
            p.margin-text-2.bloque-codigo if (n.length() &lt; 2 || n.length() &gt; 100)
            p.margin-text-3.bloque-codigo throw new IllegalArgumentException("El nombre debe tener entre 2 y 100 caracteres.");
            p.margin-text-2.bloque-codigo this.nombre = n.trim();
            p.margin-text-left }

            p.margin-text-left.bloque-codigo public void setEdad(int e) {
            p.margin-text-2.bloque-codigo if (e &lt; 15 || e &gt; 80)
            p.margin-text-3.bloque-codigo throw new IllegalArgumentException("La edad debe estar entre 15 y 80 años.");
            p.margin-text-2.bloque-codigo this.edad = e;
            p.margin-text-left }

            p.margin-text-left.mt-4.bloque-codigo public void setPromedio(double p) {
            p.margin-text-2.bloque-codigo if (p &lt; 0.0 || p &gt; 5.0)
            p.margin-text-3.bloque-codigo throw new IllegalArgumentException("El promedio debe estar entre 0.0 y 5.0.");
            p.margin-text-2.bloque-codigo this.promedio = p;
            p.margin-text-left }

            p.margin-text-left.mt-4.bloque-codigo public void setEmail(String e) {
            p.margin-text-2.bloque-codigo if (e == null || !e.matches("^[\\w.-]+@[\\w.-]+\\.[a-z]{2,}$"))
            p.margin-text-3.bloque-codigo throw new IllegalArgumentException("Formato de email inválido.");
            p.margin-text-2.bloque-codigo this.email = e;
            p.margin-text-left.bloque-codigo }
            | }

    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Manejo de excepciones en Java       

    .bloque-texto-g.bg-3.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Java ofrece un robusto mecanismo de manejo de excepciones basado en los bloques try, catch, finally y la instrucción throw. Las excepciones permiten separar el código de manejo de errores del flujo principal del programa, mejorando su legibilidad y robustez. Según Bloch (2018), el correcto uso de excepciones es uno de los aspectos más importantes para escribir código Java de calidad.

    p.mt-4 En Java, las excepciones se organizan en una jerarquía de clases: todas heredan de Throwable. Las dos ramas principales son Error (para errores graves del sistema que no deben capturarse) y Exception. Dentro de Exception se distinguen las excepciones verificadas (checked exceptions, que heredan de Exception) y las no verificadas (unchecked exceptions, que heredan de RuntimeException).
            
    | Lo anterior, se ilustra con el siguiente ejemplo:

    .row.justify-content-center.mt-4
      .col-lg-8
        .row.bg-code3
          .col-lg-12.text-white
            p.mb-0.bloque-codigo // Manejo básico de excepciones:
            p.mb-0.bloque-codigo public static void registrarEstudiante(String nombre, int edad, double promedio) {
            p.margin-text-left.bloque-codigo Estudiante e = new Estudiante();
            p.margin-text-left.bloque-codigo try {
            p.margin-text-2.bloque-codigo e.setNombre(nombre);
            p.margin-text-2.bloque-codigo e.setEdad(edad);
            p.margin-text-2.bloque-codigo e.setPromedio(promedio);
            p.margin-text-2.bloque-codigo System.out.println("Estudiante registrado correctamente.");
            p.margin-text-left.bloque-codigo } catch (IllegalArgumentException ex) {
            p.margin-text-2.bloque-codigo System.out.println("Error de validación: " + ex.getMessage());
            p.margin-text-left.bloque-codigo } finally {
            p.margin-text-2.bloque-codigo System.out.println("Proceso de registro finalizado.");
            p.margin-text-left.bloque-codigo }
            p }

            p.mt-5.mb-0.bloque-codigo // Excepción personalizada:
            p.mb-0.bloque-codigo public class EstudianteException extends Exception {
            p.margin-text-left.bloque-codigo private String campo;
            p.margin-text-left.mt-4.bloque-codigo public EstudianteException(String campo, String mensaje) {
            p.margin-text-2.bloque-codigo super(mensaje);
            p.margin-text-2.bloque-codigo this.campo = campo;
            p.margin-text-left.bloque-codigo }
              
            p.margin-text-left.mt-4.bloque-codigo public String getCampo() { return campo; }
            | }

    .row.justify-content-center.mt-5
      p.text-center Por su parte, la siguiente tabla resume la jerarquía y tipos de excepciones más utilizados en aplicaciones Java orientadas a objetos:

      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 7.
              span Tipos de excepciones en Java y su uso recomendado.

            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #FFEBBE")
                  tr
                    th(style="width: 240px;") Categoría
                    th(style="width: 320px;") Tipo / Clase Java
                    th Descripción y uso
                tbody
                  tr(style="background-color: #F6F6F6")
                    td.text-start Checked
                    td.text-start IOException, SQLException
                    td.text-start Obligatorio declarar con throws o capturar con catch.
                  tr
                    td.text-start Unchecked
                    td.text-start IllegalArgumentException
                    td.text-start Para validaciones de argumentos inválidos.
                  tr(style="background-color: #F6F6F6")
                    td.text-start Unchecked
                    td.text-start NullPointerException
                    td.text-start Cuando se accede a una referencia null.
                  tr
                    td.text-start Unchecked
                    td.text-start IndexOutOfBoundsException
                    td.text-start Índice de array o colección fuera de rango.
                  tr(style="background-color: #F6F6F6")
                    td.text-start Personalizada
                    td.text-start extends Exception / RuntimeException
                    td.text-start Para errores específicos del dominio de negocio.

    separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 Refactorización, pruebas y depuración del programa
    
    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.mt-2           

                .cajon.color2.p-4.mt-2
                  p Los ajustes y la mejora del programa son actividades continuas que buscan optimizar el funcionamiento, la eficiencia y la calidad del código. Martin (2008) define el código limpio como aquel que es fácil de leer, entender y modificar, y establece que la refactorización continua es la práctica clave para alcanzar y mantener ese estándar.

                p.mt-4 Es así como se abordan las siguientes tres prácticas fundamentales para garantizar la calidad del #[i software] en Java: la depuración de errores, la refactorización del código y la realización de pruebas unitarias. Estas actividades permiten detectar fallos, mejorar la estructura interna del programa y verificar su correcto funcionamiento, contribuyendo al desarrollo de aplicaciones más confiables, mantenibles y alineadas con los principios del código limpio:

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema5/9.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")

    .row.align-items-center.justify-content-center.mt-4
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema5/10.png', alt='', class="w-100 h-100 object-fit-cover")

              .col-lg.p-4
                .row.justify-content-center
                  .col-lg-12
                    .row.justify-content-center 
                      AcordionA(tipo="b" clase-tarjeta="tarjeta bg-02").color-primario
                        //-1ra pestaña
                        .row(titulo="Depuración - Debugging")
                          p La depuración consiste en identificar y corregir errores (bugs) en el código. Los IDEs Java como IntelliJ IDEA y Eclipse ofrecen depuradores integrados que permiten ejecutar el programa paso a paso, establecer puntos de interrupción (#[i breakpoints]), inspeccionar el valor de las variables en tiempo de ejecución y evaluar expresiones. Los tipos de errores más comunes son los errores de sintaxis (detectados por el compilador), los errores de lógica (el programa compila, pero produce resultados incorrectos) y los errores de ejecución (el programa lanza una excepción en tiempo de ejecución).

                        //-2da pestaña  
                        .row(titulo="Refactorización")
                          p La refactorización es el proceso de reestructurar el código existente sin cambiar su comportamiento externo observable. Su objetivo es mejorar la legibilidad, reducir la complejidad y facilitar el mantenimiento. IntelliJ IDEA ofrece refactorizaciones automatizadas como renombrar clases/métodos/variables, extraer métodos, mover clases a otros paquetes y eliminar código duplicado, todo con un solo atajo de teclado.
                          
                        //-3ra pestaña
                        .row(titulo="Pruebas unitarias con JUnit")
                          p Las pruebas unitarias verifican que cada método o componente del programa funciona correctamente de forma aislada. JUnit 5 es el #[i framework] de pruebas estándar en el ecosistema Java. Una prueba unitaria bien escrita sigue el patrón AAA: Arrange (preparar los datos), Act (ejecutar el método bajo prueba) y Assert (verificar el resultado esperado).
                          
    .row.justify-content-center.mt-4
      .col-lg-8
        p Partiendo de las tres prácticas anteriores, se presenta un ejemplo práctico en Java que ilustra la aplicación de pruebas unitarias con JUnit, relacionando cómo validar el comportamiento de los métodos, verificar resultados esperados y detectar errores mediante el uso de aserciones y manejo de excepciones, como parte de las buenas prácticas de calidad y depuración del código:
        .row.bg-code3
          .col-lg-12.text-white
            p.mb-0.bloque-codigo import org.junit.jupiter.api.Test;
            p.mb-0 import static org.junit.jupiter.api.Assertions.*;

            p.mt-4 class EstudianteTest {

            p.margin-text-left.mt-4.mb-0.bloque-codigo @Test
            p.margin-text-left.bloque-codigo void testSetPromedioValido() {
            p.margin-text-2.bloque-codigo // Arrange
            p.margin-text-2.bloque-codigo Estudiante e = new Estudiante();
            p.margin-text-2.bloque-codigo // Act
            p.margin-text-2.bloque-codigo e.setPromedio(4.5);
            p.margin-text-2.bloque-codigo // Assert
            p.margin-text-2.bloque-codigo assertEquals(4.5, e.getPromedio(), 0.001);
            p.margin-text-left }

            p.margin-text-left.bloque-codigo @Test
            p.margin-text-left.bloque-codigo void testSetPromedioFueraDeRango() {
            p.margin-text-2.bloque-codigo Estudiante e = new Estudiante();
            p.margin-text-2.bloque-codigo assertThrows(IllegalArgumentException.class, () -&gt; e.setPromedio(6.0));
            p.margin-text-left }

            p.margin-text-left.bloque-codigo @Test
            p.margin-text-left.bloque-codigo void testNombreVacioLanzaExcepcion() {
            p.margin-text-2.bloque-codigo Estudiante e = new Estudiante();
            p.margin-text-2.bloque-codigo assertThrows(IllegalArgumentException.class, () -&gt; e.setNombre(""));
            p.margin-text-left.bloque-codigo }
            p }

    separador
    #t_5_4.titulo-segundo.color-acento-contenido
      h2 5.4 Buenas prácticas y patrones de diseño básicos

    .row.align-items-center
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/11.png', alt='', style="width: 390px").m-auto
      .col-lg-8.bg-4.p-4
    
        figure.d-flex.d-none.d-lg-block
          img(src="@/assets/curso/tema5/12.svg", alt="", style="width: 80px")
    
        p.mt-3 Los patrones de diseño, documentados por Gamma, Helm, Johnson & Vlissides (1994) en su obra "Design Patterns", son soluciones reutilizables a problemas recurrentes en el diseño de #[i software] orientado a objetos. Representan la experiencia acumulada de la comunidad de desarrolladores y se clasifican en tres categorías: creacionales, estructurales y de comportamiento.

    p.mt-4 Partiendo de lo anterior, se presentan algunos patrones de diseño básicos ampliamente utilizados en Java, los cuales ofrecen soluciones estructuradas y reutilizables a problemas comunes del desarrollo orientado a objetos. Estos patrones facilitan la creación de software flexible, mantenible y extensible, al aplicar principios de buen diseño y buenas prácticas reconocidas en la ingeniería de #[i software]:

    .row.justify-content-center.mt-4
      .col-lg-8
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Patrón Singleton (creacional)")
            p Garantiza que una clase tenga exactamente una única instancia durante toda la ejecución del programa y proporciona un punto de acceso global a ella. Es ampliamente utilizado para gestores de configuración, conexiones a bases de datos y registros de auditoría.
            
          .row(numero="2" titulo="Patrón Factory Method (creacional)")
            p Delega la creación de objetos a un método estático o una subclase, desacoplando el código cliente de las clases concretas que se instancian. Esto mejora la extensibilidad del sistema y aplica el principio Open/Closed de SOLID.
            
          .row(numero="3" titulo="Patrón Observer (comportamiento)")
            p Define una dependencia uno a muchos entre objetos. Cuando el objeto observado (sujeto) cambia de estado, todos sus observadores son notificados automáticamente. Es el fundamento de los sistemas de eventos, las interfaces gráficas (listeners en Java Swing/JavaFX) y la arquitectura orientada a eventos.
            
          .row(numero="4" titulo="Patrón Strategy (comportamiento)")
            p Define una familia de algoritmos encapsulados en clases separadas e intercambiables. El cliente puede cambiar el algoritmo en tiempo de ejecución sin modificar su código. Aplica directamente los principios Open/Closed e Inversión de Dependencias de SOLID.
            
          .row(numero="5" titulo="Patrón Builder (creacional)")
            p Separa la construcción de un objeto complejo de su representación, permitiendo que el mismo proceso de construcción pueda crear diferentes representaciones. Es muy utilizado en Java para construir objetos con muchos parámetros opcionales, evitando constructores con demasiados argumentos.
            
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema5/13.png', alt='', style="width: 80%").m-auto



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
