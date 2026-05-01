<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión y el uso adecuado de las herramientas básicas en la ventana <em>Board</em> del <em>software</em> EAGLE.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de los siguientes conceptos describe mejor lo que es una clase en programación orientada a objetos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un objeto creado en memoria con valores concretos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una plantilla o molde que define atributos y métodos de los objetos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un método que ejecuta instrucciones dentro de un programa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una variable que almacena datos de tipo primitivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Si en Java se escribe Estudiante e1 = new Estudiante("Ana", 20), ¿qué se está creando?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una clase nueva llamada Estudiante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un método llamado Estudiante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una instancia u objeto concreto de la clase Estudiante.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una interfaz con los datos de Ana.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué palabra clave se utiliza en Java para que una subclase herede de una superclase?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'implements.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'super.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'extends.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Inherit.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué anotación se usa en Java para indicar que un método sobreescribe al de la superclase y activar el polimorfismo dinámico?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '@Herencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '@Extends.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '@Super.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '@Override.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'El encapsulamiento en programación orientada a objetos consiste en:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear múltiples objetos a partir de una clase.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ocultar los detalles internos de una clase y exponer solo la interfaz necesaria.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Heredar atributos de una clase padre a una clase hija.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Definir varios métodos con el mismo nombre y distintos parámetros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'En un diagrama de clases UML, ¿qué símbolo indica que un atributo o método es privado?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '+ (más)',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '# (numeral)',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '~ (tilde)',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '- (menos)',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'En una relación de composición UML entre las clases Pedido y DetallePedido, ¿qué ocurre si se elimina el objeto Pedido?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El DetallePedido continúa existiendo de forma independiente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El DetallePedido se transfiere a otro objeto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los objetos DetallePedido también son eliminados porque dependen del Pedido.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No ocurre nada en el sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes modificadores de acceso permite que un atributo sea visible desde la propia clase y desde sus subclases, pero no desde código externo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'public.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'private.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'protected.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'static.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Según los principios SOLID, el Principio de Responsabilidad Única (SRP) establece que:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una clase puede implementar múltiples interfaces simultáneamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cada clase debe tener una única razón para cambiar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Los módulos de alto nivel deben depender de implementaciones concretas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las clases deben estar cerradas para la extensión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la diferencia entre una clase abstracta y una interfaz en Java?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No hay diferencia; ambas son equivalentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una clase abstracta puede tener métodos concretos e implementación parcial; una interfaz solo define contratos de comportamiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Una interfaz puede instanciarse directamente; una clase abstracta no.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una clase abstracta usa implements; una interfaz usa extends.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué herramienta CASE gratuita y colaborativa en línea es ampliamente utilizada para crear diagramas UML en equipos ágiles?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'StarUML.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Enterprise Architect.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Lucidchart.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'IntelliJ IDEA.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'En el diagrama UML de un sistema académico, la clase Persona tiene el nombre en cursiva. Esto indica que:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es una clase concreta que puede instanciarse directamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es una clase abstracta que no puede instanciarse.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Es una interfaz con solo métodos públicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Es un atributo estático compartido por todos los objetos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué palabra clave se usa en Java para invocar al constructor de la superclase desde la subclase?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'this().',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'parent().',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'base().',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'super().',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es la diferencia entre polimorfismo estático y polimorfismo dinámico en Java?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El polimorfismo estático usa @Override; el dinámico usa métodos con el mismo nombre.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El polimorfismo estático se resuelve en tiempo de compilación mediante sobrecarga; el dinámico en tiempo de ejecución mediante @Override.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'No existe diferencia; ambos se resuelven en tiempo de ejecución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El polimorfismo dinámico solo aplica a métodos estáticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué tipo de excepción se debe lanzar en Java cuando se pasa un argumento inválido a un método setter?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'IOException.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'NullPointerException.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'IllegalArgumentException.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'ClassNotFoundException.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'En Java, ¿qué framework estándar se utiliza para escribir y ejecutar pruebas unitarias aplicando el patrón AAA (Arrange, Act, Assert)?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mockito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'JUnit 5.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Maven.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gradle.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál de los siguientes patrones de diseño garantiza que una clase tenga exactamente una única instancia durante toda la ejecución del programa?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factory Method.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Observer.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Singleton.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Strategy.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'En el proyecto integrador del sistema académico, la clase Persona es abstracta y tiene el método obtenerRol(). ¿Por qué este método debe ser abstracto?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque Persona no tiene atributos y necesita al menos un método.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque cada subclase (Estudiante, Docente) debe definir su propio rol sin que Persona imponga una implementación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Porque los métodos abstractos son más rápidos en ejecución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque Java exige que todas las superclases tengan métodos abstractos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué relación existe entre las clases Curso y Estudiante en el sistema académico cuando un Estudiante puede existir sin estar matriculado en ningún Curso?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Composición, porque los estudiantes dependen del curso para existir.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Herencia, porque Estudiante extiende Curso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Agregación, porque la relación es débil y las partes son independientes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Asociación bidireccional fuerte sin jerarquía.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál de las siguientes afirmaciones sobre el patrón Observer en Java es correcta?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Define una única instancia de una clase accesible globalmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Delega la creación de objetos a métodos o subclases para desacoplar el código.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Define una dependencia uno a muchos: cuando el objeto observado cambia, todos sus observadores son notificados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Encapsula algoritmos intercambiables que pueden seleccionarse en tiempo de ejecución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
