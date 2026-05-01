<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Proyecto integrador: sistema de registro académico

    figure
      img(src='@/assets/curso/tema6/1.png', alt='', style="width: 1226px").m-auto
    
    p.mt-4 El proyecto integrador consolida todos los conceptos estudiados en el componente formativo, mediante el desarrollo de un sistema de registro académico completo en Java. Este sistema aplica simultáneamente los principios de diseño orientado a objetos: clases abstractas, herencia, polimorfismo, encapsulamiento, validación de datos y manejo de excepciones. El modelo de clases del sistema corresponde al diagrama UML presentado en la sección 2.5.

    .titulo-tres.mt-5: h3 Estructura del sistema

    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El sistema de registro académico está compuesto por las siguientes clases organizadas en una jerarquía de herencia con relaciones de composición y asociación: la clase abstracta Persona como base, con las subclases concretas Estudiante y Docente; la clase Curso como contenedor de estudiantes; y la clase SistemaAcademico como punto de entrada y coordinación del sistema.

    .row.justify-content-center.mt-4
      p.text-center A continuación, se presenta el ejemplo de código que ilustra esta estructura del sistema:
      .col-lg-8
        .row.bg-code3
          .col-lg-12.text-white
            p.mb-0.bloque-codigo // Clase abstracta base
            p.mb-0.bloque-codigo public abstract class Persona {
            p.margin-text-left.bloque-codigo private String nombre;
            p.margin-text-left private String identificacion;

            p.margin-text-left.bloque-codigo public Persona(String nombre, String identificacion) {
            p.margin-text-2.bloque-codigo setNombre(nombre);
            p.margin-text-2.bloque-codigo this.identificacion = identificacion;
            p.margin-text-left }

            p.margin-text-left.bloque-codigo public void setNombre(String n) {
            p.margin-text-2.bloque-codigo if (n == null || n.isBlank())
            p.margin-text-3.bloque-codigo throw new IllegalArgumentException("El nombre es obligatorio.");
            p.margin-text-2.bloque-codigo this.nombre = n.trim();
            p.margin-text-left }

            p.margin-text-left.bloque-codigo public String getNombre()       { return nombre; }
            p.margin-text-left public String getIdentificacion() { return identificacion; }

            p.margin-text-left.bloque-codigo // Método abstracto: cada subclase define su propia representación
            p.margin-text-left public abstract String obtenerRol();

            p.margin-text-left.bloque-codigo @Override
            p.margin-text-left.bloque-codigo public String toString() {
            p.margin-text-2.bloque-codigo return "[" + obtenerRol() + "] " + nombre + " (" + identificacion + ")";
            p.margin-text-left.bloque-codigo }
            | }

    .row.justify-content-center.mt-4
      .col-lg-8
        .row.bg-code3
          .col-lg-12.text-white

            p.mb-0.bloque-codigo public class Estudiante extends Persona {
            p.margin-text-left.bloque-codigo private String codigoEstudiante;
            p.margin-text-left private double promedio;

            p.margin-text-left.bloque-codigo public Estudiante(String nombre, String id, String codigo) {
            p.margin-text-2.bloque-codigo super(nombre, id);
            p.margin-text-2.bloque-codigo this.codigoEstudiante = codigo;
            p.margin-text-2.bloque-codigo this.promedio = 0.0;
            p.margin-text-left }

            p.margin-text-left @Override public String obtenerRol() { return "ESTUDIANTE"; }

            p.margin-text-left public double getPromedio() { return promedio; }

            p.margin-text-left.mt-4.bloque-codigo public void setPromedio(double p) {
            p.margin-text-2.bloque-codigo if (p &lt; 0 || p &gt; 5)
            p.margin-text-3.bloque-codigo throw new IllegalArgumentException("Promedio fuera de rango (0-5).");
            p.margin-text-2.bloque-codigo this.promedio = p;
            p.margin-text-left }

            p.margin-text-left.bloque-codigo public String calcularEstado() {
            p.margin-text-2.bloque-codigo if (promedio &gt;= 4.0) return "Excelente";
            p.margin-text-2.bloque-codigo if (promedio &gt;= 3.0) return "Aprobado";
            p.margin-text-2.bloque-codigo return "En riesgo académico";
            p.margin-text-left }

            p.margin-text-left.bloque-codigo @Override
            p.margin-text-left.bloque-codigo public String toString() {
            p.margin-text-2.bloque-codigo return super.toString() + " | Código: " + codigoEstudiante
            p.margin-text-3.bloque-codigo + " | Promedio: " + promedio + " | Estado: " + calcularEstado();
            p.margin-text-left.bloque-codigo }
            | }

    .titulo-tres.mt-5: h3 Implementación de Docente y Curso
    
    p Como complemento a la jerarquía definida a partir de la clase abstracta Persona y su especialización en Estudiante, se presenta la implementación de la clase Docente y la clase Curso, las cuales amplían y articulan el funcionamiento del sistema de registro académico.

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema6/3.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")

              .col-lg.mt-2           
                p La clase Docente hereda de Persona y define atributos propios como la especialidad y la titulación, reforzando el uso de herencia y polimorfismo mediante la sobreescritura del método obtenerRol().

                .cajon.color1.p-4.mt-2
                  p Por su parte, la clase Curso representa una entidad central del sistema y establece relaciones de composición y asociación, al vincular un docente responsable y una colección de estudiantes, incorporando además validaciones de negocio como el control de cupo y el cálculo del promedio general del curso.

                p.mt-4 A continuación, se muestra el ejemplo de código que ilustra la implementación de estas clases dentro del sistema académico:

    .row.justify-content-center.mt-4
      .col-lg-9
        .row.bg-code6
          .col-lg-12.text-white
            p.mb-0.bloque-codigo public class Docente extends Persona {
            p.margin-text-left.bloque-codigo private String especialidad;
            p.margin-text-left private String titulacion;

            p.margin-text-left.bloque-codigo public Docente(String nombre, String id, String especialidad, String titulacion) {
            p.margin-text-2.bloque-codigo super(nombre, id);
            p.margin-text-2.bloque-codigo this.especialidad = especialidad;
            p.margin-text-2.bloque-codigo this.titulacion = titulacion;
            p.margin-text-left }

            p.margin-text-left.bloque-codigo @Override public String obtenerRol() { return "DOCENTE"; }

            p.margin-text-left.bloque-codigo public String getEspecialidad() { return especialidad; }

            p.margin-text-left.mt-4.bloque-codigo @Override
            p.margin-text-left.bloque-codigo public String toString() {
            p.margin-text-2.bloque-codigo return super.toString() + " | Especialidad: " + especialidad
            p.margin-text-3.bloque-codigo + " | Titulación: " + titulacion;
            p.margin-text-left.bloque-codigo }
            p }

            p.mt-5.mb-0.bloque-codigo public class Curso {
            p.margin-text-left.bloque-codigo private String nombre;
            p.margin-text-left.bloque-codigo private int creditos;
            p.margin-text-left.bloque-codigo private Docente docente;
            p.margin-text-left.bloque-codigo private List&lt;Estudiante&gt; estudiantes = new ArrayList&lt;&gt;();
            p.margin-text-left private static final int CUPO_MAXIMO = 30;

            p.margin-text-left.bloque-codigo public Curso(String nombre, int creditos, Docente docente) {
            p.margin-text-2.bloque-codigo this.nombre = nombre;
            p.margin-text-2.bloque-codigo this.creditos = creditos;
            p.margin-text-2.bloque-codigo this.docente = docente;
            p.margin-text-left }

            p.margin-text-left.bloque-codigo public void matricularEstudiante(Estudiante e) {
            p.margin-text-2.bloque-codigo if (estudiantes.size() &gt;= CUPO_MAXIMO)
            p.margin-text-3.bloque-codigo throw new IllegalStateException("El curso ha alcanzado el cupo máximo.");
            p.margin-text-2.bloque-codigo if (estudiantes.contains(e))
            p.margin-text-3.bloque-codigo throw new IllegalArgumentException("El estudiante ya está matriculado.");
            pp.margin-text-2.bloque-codigo estudiantes.add(e);
            p.margin-text-left }

            p.margin-text-left.bloque-codigo public double calcularPromedioCurso() {
            p.margin-text-2.bloque-codigo return estudiantes.stream().mapToDouble(Estudiante::getPromedio).average().orElse(0);
            p.margin-text-left }

            p.margin-text-left.bloque-codigo public void mostrarListado() {
            p.margin-text-2.bloque-codigo System.out.println("\n=== Curso: " + nombre + " (" + creditos + " créditos) ===");
            p.margin-text-2.bloque-codigo System.out.println("Docente: " + docente.getNombre());
            p.margin-text-2.bloque-codigo System.out.println("Estudiantes matriculados: " + estudiantes.size());
            p.margin-text-2.bloque-codigo estudiantes.forEach(System.out::println);
            p.margin-text-2.bloque-codigo System.out.printf("Promedio del curso: %.2f%n", calcularPromedioCurso());
            p.margin-text-left.bloque-codigo }
            | }

    .titulo-tres.mt-5: h3 Programa principal y demostración del sistema

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema6/4.png', alt='', class="w-100 h-100 object-fit-cover")
              .col-lg.p-4
                .row.align-items-start.bg-4.p-3
                  .col-lg-2.mb-lg-0.d-flex.d-none.d-lg-block
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema6/5.svg', style='width: 80px').m-auto          
                  .col
                    p El programa principal, representado por la clase SistemaAcademico, actúa como punto de entrada y coordinación del sistema de registro académico. En él se integran todas las clases previamente definidas para demostrar su funcionamiento conjunto en un escenario real de uso.

                p.mt-3 A través del método main, se crean instancias de Docente, Curso y Estudiante, se asignan promedios, se realiza la matrícula de estudiantes y se aplican validaciones y manejo de excepciones para garantizar la consistencia de los datos.

                .row.align-items-start.mt-4
                  .col-lg-1.mb-lg-0.mb-4
                    figure(data-aos="fade-down").d-flex.d-none.d-lg-block
                      img(src='@/assets/curso/tema6/6.svg', style='width: 120px').m-auto
                  
                  .col
                    p Además, el ejemplo evidencia el uso del polimorfismo, al manejar objetos de distintas subclases (Docente y Estudiante) mediante referencias del tipo Persona, y muestra cómo el sistema genera salidas informativas que reflejan el estado del curso y sus participantes.

    .row.justify-content-center.mt-4.mb-0
      p.text-center A continuación, se presenta el ejemplo de código que ilustra la ejecución completa y la demostración del sistema académico:
      .col-lg-8
        .row.bg-code3.mb-0
          .col-lg-12.text-white
            p.mb-0.bloque-codigo public class SistemaAcademico {
            p.margin-text-left.bloque-codigo public static void main(String[] args) {
            p.margin-text-2.bloque-codigo // Crear docente
            p.margin-text-2.bloque-codigo Docente docente = new Docente(
            p.margin-text-3.bloque-codigo "Dr. Carlos Mendoza", "DOC001",
            p.margin-text-3.bloque-codigo "Ingeniería de Software", "PhD"
            p.margin-text-2 );

            p.margin-text-2.bloque-codigo // Crear curso
            p.margin-text-2 Curso poo = new Curso("Programación Orientada a Objetos", 3, docente);

            p.margin-text-2.bloque-codigo // Crear y matricular estudiantes
            p.margin-text-2.bloque-codigo try {
            p.margin-text-3.bloque-codigo Estudiante e1 = new Estudiante("Ana Torres", "1001", "EST001");
            p.margin-text-3 e1.setPromedio(4.5);

            p.margin-text-3.bloque-codigo Estudiante e2 = new Estudiante("Luis Gómez", "1002", "EST002");
            p.margin-text-3 e2.setPromedio(2.8);

            p.margin-text-3.bloque-codigo Estudiante e3 = new Estudiante("María López", "1003", "EST003");
            p.margin-text-3 e3.setPromedio(3.9);

            p.margin-text-3.bloque-codigo poo.matricularEstudiante(e1);
            p.margin-text-3.bloque-codigo poo.matricularEstudiante(e2);
            p.margin-text-3 poo.matricularEstudiante(e3);

            p.margin-text-3.bloque-codigo // Polimorfismo: lista de Personas
            p.margin-text-3.bloque-codigo List&lt;Persona&gt; personas = new ArrayList&lt;&gt;();
            p.margin-text-3.bloque-codigo personas.add(docente);
            p.margin-text-3.bloque-codigo personas.add(e1);
            p.margin-text-3 personas.add(e2);

            p.margin-text-3.bloque-codigo System.out.println("=== Directorio de personas ===");
            p.margin-text-3 personas.forEach(p -&gt; System.out.println(p.toString()));

            p.margin-text-3 poo.mostrarListado();

            p.margin-text-2.bloque-codigo } catch (IllegalArgumentException e) {
            p.margin-text-3.bloque-codigo System.out.println("Error de datos: " + e.getMessage());
            p.margin-text-2.bloque-codigo }
            p.margin-text-left.bloque-codigo }
            | }

    .row.bg-07.p-md-5.mt-0
      .row.align-items-center.justify-content-center.p-4
        .col-lg-12
          .row.align-items-center.justify-content-center
            .col-lg-12
              .row.justify-content-center
                .col-lg-12(data-aos="fade-down")
                  .row.d-flex.align-items-center(data-aos="fade-right")
                    .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                      figure.m-0.p-0.w-100.h-100.d-flex
                        img(src='@/assets/curso/tema6/7.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                    .col-lg
                      p Por su parte, la clase Curso representa una entidad central del sistema y establece relaciones de composición y asociación, al vincular un docente responsable y una coleEste proyecto integrador demuestra la aplicación coherente de los conceptos del componente: clase abstracta Persona con encapsulamiento y método abstracto obtenerRol(); subclases Estudiante y Docente con herencia (extends y super), sobreescritura de métodos (@Override) y validaciones; clase Curso con asociación a Docente y composición con la lista de Estudiante; y un programa principal con polimorfismo dinámico y manejo de excepciones. El resultado es una aplicación Java estructurada, reutilizable y alineada con los principios SOLID documentados por Martin (2008).cción de estudiantes, incorporando además validaciones de negocio como el control de cupo y el cálculo del promedio general del curso.

    separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Reflexión sobre el diseño orientado a objetos

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-4(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema6/8.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p El desarrollo del proyecto integrador permite evidenciar de forma práctica cómo los conceptos teóricos del paradigma orientado a objetos se traducen en decisiones concretas de diseño e implementación en Java. Cada decisión tomada durante el diseño tiene implicaciones directas sobre la calidad, extensibilidad y mantenibilidad del sistema resultante.

    p.mt-4 La elección de Persona como clase abstracta en lugar de concreta responde al principio de abstracción: en el dominio académico no existen personas genéricas, sino roles específicos (estudiantes, docentes, administrativos). Al declarar Persona como abstracta y obligar a sus subclases a implementar el método obtenerRol(), el diseño garantiza que no se puedan crear instancias de Persona sin un rol definido, lo que refleja fielmente la realidad del dominio.

    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La composición entre Curso y la lista de Estudiante (ArrayList&lt;Estudiante&gt;) fue elegida sobre la agregación porque los estudiantes están matriculados en el curso y, en el contexto del sistema, su gestión está a cargo del objeto Curso. Sin embargo, si el sistema requiriera que los estudiantes pudieran transferirse entre cursos sin perder su identidad, podría considerarse una relación de agregación débil.

    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema6/10.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p El uso de polimorfismo en la lista List&lt;Persona&gt; demuestra uno de los beneficios más poderosos del paradigma: el código cliente puede tratar objetos de distintos tipos (Estudiante, Docente) de manera uniforme a través de la referencia de la superclase, sin necesidad de conocer el tipo concreto en tiempo de compilación. Esto hace que el código sea extensible: si se añade una nueva clase Administrativo que extienda Persona, el código existente no necesita modificarse.
                .cajon.color1.p-4
                  p Finalmente, la inclusión de validaciones en los setters y el uso de excepciones de tipo IllegalArgumentException sigue las recomendaciones de Bloch (2018): las precondiciones de los métodos deben ser documentadas y verificadas, lanzando excepciones apropiadas cuando no se cumplen. Esto garantiza que los objetos del sistema siempre mantengan un estado válido y coherente, independientemente del contexto desde donde se invoquen sus métodos.

    separador
    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Extensiones propuestas del sistema    

    p El sistema de registro académico presentado puede extenderse aplicando los conceptos avanzados del componente. A continuación, se proponen extensiones que refuerzan el dominio del paradigma orientado a objetos:     
    
    .row.align-items-center.justify-content-center.mt-4
      .col-lg-12.mt-3
        SlyderF(columnas="col-lg-6 col-xl-4")
          //-Primer Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema6/11.svg', alt='', style='width: 100px').m-auto
            p.text-center.mb-0 
              b Agregar la clase Nota
            p.text-center Modelar las notas como objetos asociados a la relación entre Estudiante y Curso, creando una clase Matricula que contenga la lista de notas y calcule el promedio automáticamente.
            
          //-Segundo Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema6/12.svg', alt='', style='width: 100px').m-auto
            p.text-center.mb-0 
              b Implementar una interfaz Exportable
            p.text-center Definir una interfaz con el método exportarCSV() que implementen tanto Curso como Estudiante, permitiendo exportar datos en formato de texto plano.
            
          //-Tercer Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema6/13.svg', alt='', style='width: 100px').m-auto
            p.text-center.mb-0 
              b Aplicar el patrón Observer 
            p.text-center Notificar automáticamente al Docente y a la administración cuando un Estudiante alcanza un promedio de riesgo académico (inferior a 3.0).
            
          //-Cuarto Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema6/14.svg', alt='', style='width: 100px').m-auto
            p.text-center.mb-0 
              b Persistencia de datos
            p.text-center Integrar la serialización de objetos Java (Serializable) o una base de datos SQLite con JDBC para persistir el estado del sistema entre ejecuciones.

          //-Quinto Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema6/15.svg', alt='', style='width: 100px').m-auto
            p.text-center.mb-0 
              b Interfaz gráfica con JavaFX
            p.text-center Construir una interfaz gráfica de usuario que permita gestionar el sistema académico de forma visual, aplicando el patrón MVC (Modelo-Vista-Controlador).
      
        .row.justify-content-center.mt-4
          .col-lg-10
            .row.align-items-center
              .col-lg-12
                .cajon.color2.p-4
                  p Cada una de estas extensiones aplica uno o más de los conceptos estudiados en el componente y puede ser asignada como actividad de profundización. Su implementación incremental sobre el proyecto integrador base garantiza la coherencia del diseño y permite al aprendiz evidenciar concretamente el valor del paradigma orientado a objetos en el desarrollo de software de calidad.
</template>

<script>
export default {
  name: 'Tema6',
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
