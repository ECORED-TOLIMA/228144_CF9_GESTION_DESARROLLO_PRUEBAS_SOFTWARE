<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda de manera integral los fundamentos y la aplicación del paradigma de programación orientada a objetos (POO) usando Java como lenguaje de implementación. Inicia con los conceptos esenciales del paradigma: clases, objetos, atributos, métodos, los cuatro pilares (abstracción, encapsulamiento, herencia y polimorfismo), constructores y ciclo de vida de los objetos, clases abstractas, interfaces y los principios SOLID formulados por Martin (2008).
    p Se profundiza en el modelado de sistemas mediante UML, con cinco diagramas gráficos que ilustran la notación estándar definida por el OMG (2017), los tipos de relaciones entre clases y un ejemplo integrador completo del sistema académico. Se presentan y comparan las principales herramientas CASE para entornos Java, incluyendo StarUML, Visual Paradigm, IntelliJ IDEA, Lucidchart y Draw.io.
    p El componente trabaja el encapsulamiento y los modificadores de acceso en Java, el patrón JavaBeans de getters/setters con validación según las recomendaciones de Bloch (2018) y las clases anidadas. Posteriormente, se aborda la implementación práctica: codificación de diagramas, herencia con extends y super, interfaces, polimorfismo dinámico con @Override y sobrecarga de métodos.
    p Finalmente, se estudia la validación con controles específicos para Java, el manejo de excepciones checked y unchecked, las pruebas unitarias con JUnit 5, la refactorización y depuración en entornos IDE, y los patrones de diseño (Singleton, Factory Method, Observer, Strategy y Builder) documentados por Gamma et al. (1994). Todo lo anterior se sintetiza en el proyecto integrador del sistema de registro académico, que demuestra la aplicación coherente del paradigma en una solución Java estructurada y mantenible.

    
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.png", 
          alt="En la síntesis se presenta un mapa conceptual que estructura de forma progresiva los fundamentos de la programación orientada a objetos, iniciando con los conceptos esenciales de clases, objetos, atributos y métodos, y su relación con los principios de herencia y polimorfismo. Se integra el modelado de sistemas mediante UML, destacando los diagramas de clases y las relaciones entre ellas como base para el diseño del software. Posteriormente, se abordan el encapsulamiento y el control de acceso, junto con la implementación práctica de la POO en Java mediante herencia, interfaces y polimorfismo. Finalmente, el mapa articula los procesos de validación, pruebas, depuración y buenas prácticas, culminando en un proyecto integrador que consolida el diseño orientado a objetos y propone extensiones del sistema, evidenciando la coherencia y aplicación práctica de los contenidos estudiados.")
      
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
