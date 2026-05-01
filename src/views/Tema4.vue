<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Implementación de la programación orientada a objetos en Java

    figure
      img(src='@/assets/curso/tema4/1.png', alt='', style="width: 1226px").m-auto
    
    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema4/2.svg', style='width: 100px').m-auto
      
      .col
        p La implementación del paradigma orientado a objetos en Java comprende la traducción de los diseños UML a código funcional. Este proceso requiere dominar los mecanismos propios del lenguaje: codificación de clases desde el diagrama, herencia con extends y super, interfaces, polimorfismo dinámico con @Override y sobrecarga de métodos. Horstmann (2019) describe este proceso como el "puente entre el diseño y el código", resaltando la importancia de la coherencia entre el modelo UML y su implementación.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Codificación de diagramas de clases
    
    .row.align-items-center
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/3.png', alt='', style="width: 390px").m-auto
      .col-lg-8.bg-4.p-4
    
        figure
          img(src="@/assets/curso/tema4/4.svg", alt="", style="width: 80px")
    
        p.mt-3 Codificar un diagrama de clases implica convertir cada elemento del diagrama UML en código Java equivalente. El proceso sigue una secuencia lógica que garantiza que la implementación refleje fielmente el diseño: identificar cada clase del diagrama y crear su archivo Java correspondiente; declarar los atributos con el modificador de acceso indicado en el diagrama y el tipo de dato correcto; implementar el constructor o constructores necesarios; codificar los métodos definidos en el diagrama; y finalmente, establecer las relaciones entre clases mediante referencias, colecciones o herencia según corresponda.

    .row.justify-content-center.mt-4
      p El siguiente ejemplo muestra la codificación completa de un diagrama UML que contiene las clases Producto e Inventario, relacionadas mediante composición:
      .col-lg-9
        .row.bg-code6
          .col-lg-12.text-white
            p.mb-0.bloque-codigo import java.util.ArrayList;
            p import java.util.List;

            p.bloque-codigo public class Producto {
            p.margin-text-left.bloque-codigo private String codigo;
            p.margin-text-left.bloque-codigo private String nombre;
            p.margin-text-left.bloque-codigo private double precio;
            p.margin-text-left private int stock;

            p.margin-text-left.bloque-codigo public Producto(String codigo, String nombre, double precio, int stock) {
            p.margin-text-2.bloque-codigo this.codigo = codigo;
            p.margin-text-2.bloque-codigo this.nombre = nombre;
            p.margin-text-2.bloque-codigo this.precio = precio;
            p.margin-text-2.bloque-codigo this.stock  = stock;
            p.margin-text-left }

            p.margin-text-left.bloque-codigo public String getCodigo() { return codigo; }
            p.margin-text-left.bloque-codigo public String getNombre() { return nombre; }
            p.margin-text-left.bloque-codigo public double getPrecio() { return precio; }
            p.margin-text-left public int    getStock()  { return stock;  }

            p.margin-text-left.bloque-codigo public void ajustarStock(int cantidad) {
            p.margin-text-2.bloque-codigo if (stock + cantidad &lt; 0) throw new IllegalArgumentException("Stock insuficiente.");
            p.margin-text-2.bloque-codigo stock += cantidad;
            p.margin-text-left }

            p.margin-text-left.bloque-codigo @Override
            p.margin-text-left.bloque-codigo public String toString() {
            p.margin-text-2.bloque-codigo return "[" + codigo + "] " + nombre + " - $" + precio + " (Stock: " + stock + ")";
            p.margin-text-left.bloque-codigo }
            p }

            p.mt-5.mb-0.bloque-codigo public class Inventario {
            p.margin-text-left.bloque-codigo private String nombre;
            p.margin-text-left private List&lt;Producto&gt; productos = new ArrayList&lt;&gt;();

            p.margin-text-left public Inventario(String nombre) { this.nombre = nombre; }

            p.margin-text-left public void agregarProducto(Producto p) { productos.add(p); }

            p.margin-text-left.bloque-codigo public Producto buscarPorCodigo(String codigo) {
            p.margin-text-2.bloque-codigo return productos.stream()
            p.margin-text-3.bloque-codigo .filter(p -&gt; p.getCodigo().equals(codigo))
            p.margin-text-3.bloque-codigo .findFirst().orElse(null);
            p.margin-text-left }

            p.margin-text-left.mt-4.bloque-codigo public void mostrarInventario() {
            p.margin-text-2.bloque-codigo System.out.println("=== Inventario: " + nombre + " ===");
            p.margin-text-2.bloque-codigo productos.forEach(System.out::println);
            p.margin-text-left.bloque-codigo }
            | }
    
    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Implementación de la herencia en objetos
    
    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.mt-2           
                p En Java, la herencia se implementa con la palabra clave extends en la declaración de la subclase. La subclase hereda todos los atributos y métodos con visibilidad public, protected y de paquete de la superclase, pero no los private. El constructor de la superclase se invoca explícitamente con super() como primera instrucción del constructor de la subclase. Si no se invoca explícitamente, Java llama automáticamente al constructor sin parámetros de la superclase.

                .cajon.color1.p-4.mt-2
                  p El método super() también puede usarse para invocar métodos de la superclase desde la subclase, lo que permite reutilizar el comportamiento del padre y extenderlo en lugar de reemplazarlo completamente.

                p.mt-4 Basado en lo anterior, se presenta un ejemplo práctico en Java que muestra la implementación de la herencia mediante extends, el uso de super() y la reutilización de métodos de la clase padre:

              
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema4/5.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")

    .row.justify-content-center.mt-4
      .col-lg-9
        .row.bg-code3
          .col-lg-12.text-white
            p.mb-0.bloque-codigo public class Persona {
            p.margin-text-left.bloque-codigo protected String nombre;
            p.margin-text-left protected String identificacion;

            p.margin-text-left.bloque-codigo public Persona(String nombre, String identificacion) {
            p.margin-text-2.bloque-codigo this.nombre = nombre;
            p.margin-text-2.bloque-codigo this.identificacion = identificacion;
            p.margin-text-left }

            p.margin-text-left.mt-4.bloque-codigo public void mostrarInfo() {
            p.margin-text-2.bloque-codigo System.out.println("Nombre: " + nombre + " | ID: " + identificacion);
            p.margin-text-left }

            p.margin-text-left.mt-4.bloque-codigo @Override
            p.margin-text-left.bloque-codigo public String toString() { return nombre + " (" + identificacion + ")"; }
            p }

            p.mt-5.mb-0.bloque-codigo public class Estudiante extends Persona {
            p.margin-text-left.bloque-codigo private String codigo;
            p.margin-text-left private double promedio;

            p.margin-text-left.bloque-codigo public Estudiante(String nombre, String id, String codigo) {
            p.margin-text-2.bloque-codigo super(nombre, id);  // Invoca constructor de Persona
            p.margin-text-2.bloque-codigo this.codigo = codigo;
            p.margin-text-2.bloque-codigo this.promedio = 0.0;
            p.margin-text-left }

            p.margin-text-left.mt-4.bloque-codigo @Override
            p.margin-text-left.bloque-codigo public void mostrarInfo() {
            p.margin-text-2.bloque-codigo super.mostrarInfo();  // Reutiliza el método del padre
            p.margin-text-2.bloque-codigo System.out.println("Código: " + codigo + " | Promedio: " + promedio);
            p.margin-text-left }

            p.margin-text-left.mt-4.bloque-codigo public String calcularEstado() {
            p.margin-text-2.bloque-codigo return promedio &gt;= 3.0 ? "Aprobado" : "En riesgo académico";
            .margin-text-left }

            p.margin-text-left.bloque-codigo public double getPromedio() { return promedio; }
            p.margin-text-left.bloque-codigo public void setPromedio(double p) {
            p.margin-text-2.bloque-codigo if (p &lt; 0 || p &gt; 5) throw new IllegalArgumentException("Promedio inválido.");
            p.margin-text-2.bloque-codigo this.promedio = p;
            p.margin-text-left.bloque-codigo }
            | }

    separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Reutilización de código, interfaces y tipos de herencia
    
    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema4/6.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p La reutilización de código es uno de los objetivos principales de la POO y una de sus mayores ventajas frente a la programación estructurada. En Java, la reutilización se logra principalmente mediante la herencia (extends), la composición (atributos que referencian otros objetos) y las interfaces (implements).

                .titulo-tres.mt-5: h3 Tipos de herencia en Java
                p Aunque Java solo permite herencia simple entre clases, se pueden construir diferentes tipos de jerarquías que responden a distintas necesidades de diseño:

    .row.justify-content-center.mb-4.mt-4
      //-Tarjeta 1
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/7.svg' alt='AvatarTop').m-auto
          .tarjeta.bg-4.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Herencia simple]
                    p.mt-2 Una clase derivada extiende exactamente una clase base. Es el tipo más común y recomendado.

      //-Tarjeta 2
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/8.svg' alt='AvatarTop').m-auto
          .tarjeta.bg-4.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Herencia multinivel]
                    p.mt-2 Cadena de herencia donde A extiende B, B extiende C. Ejemplo: Vehiculo → Automovil → AutomovilDeportivo.

      //-Tarjeta 3
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/9.svg' alt='AvatarTop').m-auto
          .tarjeta.bg-4.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Herencia jerárquica]
                    p.mt-2 Varias subclases heredan de una misma superclase. Ejemplo: Animal como base para Perro, Gato y Pajaro.


    .row.justify-content-center.mt-5
      .col-lg-9
        .titulo-tres: h3 Interfaces en Java
        p Las interfaces permiten definir contratos de comportamiento que múltiples clases no relacionadas pueden implementar. A diferencia de la herencia de clases, una clase puede implementar tantas interfaces como necesite, lo que proporciona una forma de reutilización sin crear jerarquías rígidas. A continuación, se presenta un ejemplo práctico en Java que ilustra el uso de interfaces como contratos de comportamiento y la implementación múltiple en una misma clase:

        .row.bg-code4
          .col-lg-12.text-white
            p.mb-0.bloque-codigo // Interfaces: contratos de comportamiento
            p.mb-0.bloque-codigo public interface Calculable { double calcularCosto(); }
            p public interface Reportable { String generarReporte(); }

            p.mb-0.bloque-codigo // Una clase puede implementar múltiples interfaces
            p.mb-0.bloque-codigo public class Contrato extends Documento implements Calculable, Reportable {
            p.margin-text-left private double valorBase;

              p.margin-text-left.bloque-codigo @Override
              p.margin-text-left public double calcularCosto() { return valorBase * 1.19; }

              p.margin-text-left.bloque-codigo @Override
              p.margin-text-left.bloque-codigo public String generarReporte() {
              p.margin-text-2.bloque-codigo return "Contrato #" + getId() + " | Costo: " + calcularCosto();
              p.mb-0.margin-text-left.bloque-codigo }
            
            p.bloque-codigo }

    separador
    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4 Polimorfismo y sobreescritura de métodos    

    p El polimorfismo dinámico en Java se implementa mediante la sobreescritura de métodos con la anotación @Override. Cuando se usa una referencia de la superclase para apuntar a un objeto de una subclase, Java determina automáticamente en tiempo de ejecución qué versión del método ejecutar según el tipo real del objeto. Este mecanismo es conocido como enlace dinámico (dynamic binding).

    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El polimorfismo estático, por su parte, se logra mediante la sobrecarga de métodos (method overloading): múltiples métodos en la misma clase con el mismo nombre, pero diferentes parámetros. El compilador determina cuál versión usar en tiempo de compilación según los argumentos pasados.
      
    p.mt-4 Para clarificar el procedimiento anterior, se presenta un ejemplo práctico en Java que muestra el polimorfismo dinámico mediante la sobrescritura de métodos y el polimorfismo estático a través de la sobrecarga, evidenciando cómo Java resuelve cada caso:

    .row.justify-content-center.mt-4
      .col-lg-9
        .row.bg-code3
          .col-lg-12.text-white
            p.mb-0.bloque-codigo // Polimorfismo dinámico:
            p.mb-0.bloque-codigo public class Main {
            p.margin-text-left.bloque-codigo public static void main(String[] args) {
            p.margin-text-2.bloque-codigo List&lt;Animal&gt; animales = new ArrayList&lt;&gt;();
            p.margin-text-2.bloque-codigo animales.add(new Perro("Rex"));
            p.margin-text-2.bloque-codigo animales.add(new Gato("Luna"));
            p.margin-text-2 animales.add(new Pez("Nemo"));

            p.margin-text-2.bloque-codigo // Java llama al método correcto según el tipo real del objeto
            p.margin-text-2.bloque-codigo for (Animal a : animales) {
            p.margin-text-3.bloque-codigo a.hacerSonido();
            p.margin-text-2.bloque-codigo }
            p.margin-text-left.bloque-codigo }
            | }

            p.mt-4.mb-0.bloque-codigo // Salida:
            p.mb-0.bloque-codigo // Rex dice: ¡Guau!
            p.mb-0.bloque-codigo // Luna dice: ¡Miau!
            p // Nemo dice: ...(silencio)

            p.mt-5.mb-0.bloque-codigo // Polimorfismo estático (sobrecarga de métodos):
            p.mb-0.bloque-codigo public class Calculadora {
            p.margin-text-left.bloque-codigo public int    sumar(int a, int b)       { return a + b; }
            p.margin-text-left.bloque-codigo public double sumar(double a, double b) { return a + b; }
            p.margin-text-left.bloque-codigo public int    sumar(int a, int b, int c){ return a + b + c; }
            | }

    .row.justify-content-center.mt-4
      p.text-center Por su parte y para finalizar esta temática, la siguiente tabla resume las diferencias entre los dos tipos de polimorfismo en Java:

      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 6.
              span Comparativo entre polimorfismo estático y dinámico en Java.

            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #FFEBBE")
                  tr
                    th Característica
                    th Polimorfismo estático (sobrecarga)
                    th Polimorfismo dinámico (@Override)
                tbody
                  tr(style="background-color: #F6F6F6")
                    td.text-start Momento de resolución.
                    td.text-start Tiempo de compilación.
                    td.text-start Tiempo de ejecución.
                  tr
                    td.text-start Mecanismo Java
                    td.text-start Mismo nombre, distintos parámetros
                    td.text-start @Override en subclase
                  tr(style="background-color: #F6F6F6")
                    td.text-start Requiere herencia
                    td.text-start No
                    td.text-start Sí
                  tr
                    td.text-start Ejemplo representativo
                    td.text-start sumar(int) y sumar(double)
                    td.text-start Animal.hacerSonido() → Perro
                  tr(style="background-color: #F6F6F6")
                    td.text-start Uso principal
                    td.text-start Múltiples tipos de entrada válidos
                    td.text-start Jerarquías de clases extensibles

</template>

<script>
export default {
  name: 'Tema4',
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
