<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/intro/1.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                .cajon.color1.p-4.mt-4
                  p Este componente formativo se orienta al desarrollo de competencias fundamentales en el paradigma de la programación orientada a objetos (POO), uno de los enfoques más utilizados en la industria del desarrollo de software. Los ejemplos y ejercicios prácticos se desarrollan en Java, lenguaje que, como señalan Deitel & Deitel (2018), combina la pureza del paradigma orientado a objetos con una amplia adopción industrial, lo que garantiza al aprendiz una formación directamente aplicable en el ámbito laboral.

                p.mt-2 El componente inicia con los conceptos esenciales del paradigma: clases, objetos, atributos, métodos, herencia y polimorfismo. Según Booch, Rumbaugh & Jacobson (2005), el dominio de estos conceptos es el punto de partida indispensable para el diseño de sistemas orientados a objetos de calidad. A continuación, se aborda el modelado de sistemas mediante el Lenguaje de Modelado Unificado (UML), incluyendo la elaboración de diagramas de clases y la representación gráfica de las relaciones entre componentes, apoyado en el uso de herramientas CASE.

    
    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Se profundiza en el encapsulamiento y los modificadores de acceso, pilares del diseño seguro y mantenible. Posteriormente, se trabaja la implementación práctica del paradigma en Java, aplicando los principios SOLID formulados por Martin (2008), que guían la construcción de software escalable y bien estructurado. Finalmente, se estudia el manejo de excepciones, la refactorización, las pruebas unitarias con JUnit y los patrones de diseño propuestos por Gamma, Helm, Johnson & Vlissides (1994), reconocidos como el estándar de referencia en el diseño orientado a objetos.

</template>

<script>
export default {
  name: 'Introduccion',
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
