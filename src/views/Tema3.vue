<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Encapsulamiento y control de acceso en clases

    figure
      img(src='@/assets/curso/tema3/1.png', alt='', style="width: 1226px").m-auto
    
    p.mt-4 El encapsulamiento y el control de acceso son mecanismos fundamentales del paradigma orientado a objetos que garantizan la integridad, seguridad y correcta organización de los datos dentro de un sistema Java. Su adecuada implementación es uno de los factores que más influye en la calidad y mantenibilidad del software, como señala Bloch (2018) en su obra de referencia sobre las mejores prácticas de Java.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Encapsulamiento en programación orientada a objetos

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/2.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg.mt-2
                p El encapsulamiento consiste en ocultar los detalles internos de una clase y exponer únicamente lo necesario para interactuar con ella desde el exterior. Este mecanismo, también conocido como "ocultamiento de información" (#[i information hiding]), protege los datos de modificaciones no autorizadas y define una interfaz clara y controlada para el uso de los objetos.
                .cajon.color1.p-4.mt-2
                  p En Java, el encapsulamiento se implementa declarando los atributos de la clase como private y proporcionando métodos públicos (getters y setters) que controlen el acceso. De esta forma, ningún código externo puede modificar directamente los atributos; debe hacerlo a través de los métodos controlados, donde se puede incorporar lógica de validación.

                p.mt-3 El siguiente ejemplo muestra una clase CuentaBancaria completamente encapsulada, donde el saldo solo puede modificarse a través de métodos que validan las operaciones:

    .row.justify-content-center.mt-4
      .col-lg-9.bg-code4
        .row
          .col-lg-12.text-white 
            p.mb-0.bloque-codigo public class CuentaBancaria {
                        
            p.margin-text-left.bloque-codigo private String numeroCuenta;
            p.margin-text-left.bloque-codigo private double saldo;
            p.margin-text-left private String titular;

            p.margin-text-left.bloque-codigo public CuentaBancaria(String numero, String titular, double saldoInicial) {
            p.margin-text-2.bloque-codigo this.numeroCuenta = numero;
            p.margin-text-2.bloque-codigo this.titular = titular;
            p.margin-text-2.bloque-codigo this.saldo = (saldoInicial &gt;= 0) ? saldoInicial : 0;
            p.margin-text-left }

            p.margin-text-left.bloque-codigo public double getSaldo()        
              span.margin-text-2.bloque-codigo { return saldo; }
            p.margin-text-left.bloque-codigo public String getNumeroCuenta() { return numeroCuenta; }
            p.margin-text-left public String getTitular()      { return titular; }

            p.margin-text-left.bloque-codigo public void depositar(double monto) {
            p.margin-text-2.bloque-codigo if (monto &lt;= 0) throw new IllegalArgumentException("El monto debe ser positivo.");
            p.margin-text-2.bloque-codigo saldo += monto;
            p.margin-text-left }

            p.margin-text-left.mt-4.bloque-codigo public void retirar(double monto) {
            p.margin-text-2.bloque-codigo if (monto &lt;= 0) throw new IllegalArgumentException("El monto debe ser positivo.");
            p.margin-text-2.bloque-codigo if (monto &gt; saldo) throw new IllegalStateException("Saldo insuficiente.");
            p.margin-text-2.bloque-codigo saldo -= monto;
            p.margin-text-left.bloque-codigo }
            
            p.mt-0.bloque-codigo }

    .row.bg-05.mt-4
      .col-12
        .p-5
          .row.align-items-center.p-5
            .tarjeta.bg-13.p-4
              PasosB.color-acento-contenido
                //-Primer Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema3/3.png', alt='')
                    
                  .col-md-6
                    h4 Control del estado interno
                    p El encapsulamiento permite ejercer un control total sobre la modificación del estado interno de un objeto, restringiendo el acceso directo a sus atributos. De esta manera, se evitan estados inválidos o inconsistentes y se garantiza que los cambios se realicen únicamente a través de métodos definidos y controlados.

                //-Segundo Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema3/4.png', alt='')
                    
                  .col-md-6
                    h4 Reducción del acoplamiento
                    p Al limitar el acceso directo a los datos internos, el encapsulamiento reduce el acoplamiento entre clases. Esto facilita el mantenimiento del sistema, ya que los cambios en una clase tienen un impacto mínimo sobre las demás, mejorando la estabilidad y escalabilidad del proyecto.
                    
                //-Tercer Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema3/5.png', alt='')
                    
                  .col-md-6
                    h4 Validación y protección de datos
                    p El encapsulamiento permite validar los datos antes de ser almacenados o modificados. Mediante métodos de acceso controlados, se asegura que la información cumpla con las reglas del negocio, preservando la integridad y coherencia de los datos.
                    
                //-Cuarto Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema3/6.png', alt='')
                    
                  .col-md-6
                    h4 Flexibilidad en la implementación
                    p Gracias al encapsulamiento, es posible cambiar la implementación interna de una clase sin afectar al código que la utiliza. Esto permite optimizar o refactorizar el diseño interno sin alterar la interfaz pública ni generar errores en otros componentes.
              
                //-Quinto Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema3/7.png', alt='')
                    
                  .col-md-6
                    h4 Mejor organización del código
                    p El encapsulamiento contribuye a una mejor legibilidad y organización del código fuente. Al separar claramente los datos de su forma de acceso, el proyecto resulta más comprensible, ordenado y fácil de analizar para otros desarrolladores.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Modificadores de acceso público, privado y protegido

    .row.align-items-center.justify-content-center
      p Java ofrece cuatro niveles de control de acceso para los miembros de una clase (atributos, métodos y clases anidadas): public, protected, sin modificador (acceso de paquete) y private. Cada nivel define un ámbito diferente de visibilidad y acceso; además, cada uno se puede explicar de la siguiente manera:
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                .row.justify-content-center
                  .col-lg-12
                    .row.justify-content-center 
                      AcordionA(tipo="b" clase-tarjeta="tarjeta bg-02").color-primario
                        //-1ra pestaña
                        .row(titulo="Public")
                          p Los miembros declarados como public se conocen como públicos y son accesibles desde cualquier clase, en cualquier paquete del proyecto. Se utilizan principalmente para definir la interfaz pública de una clase; es decir, aquellos métodos o atributos que el código externo puede invocar de manera legítima. Su uso debe ser cuidadoso, ya que una exposición excesiva puede comprometer el control interno y la integridad de los datos.
                          
                        //-2da pestaña  
                        .row(titulo="Private")
                          p Los miembros declarados como private son los de tipo privados y solo son accesibles desde dentro de la propia clase. No pueden ser accedidos directamente desde subclases ni desde ningún código externo. Este nivel de acceso es el más restrictivo y se recomienda especialmente para los atributos de datos, ya que refuerza el principio de encapsulamiento, obligando a que la manipulación de la información se realice mediante métodos controlados.
                          
                        //-3ra pestaña
                        .row(titulo="Protected")
                          p Los miembros declarados como protected que hacen a alusión a los de nivel protegidos, son accesibles desde la propia clase, desde sus subclases (incluso si se encuentran en otros paquetes) y desde las clases del mismo paquete. Este nivel es especialmente útil en jerarquías de herencia, donde las subclases necesitan reutilizar o extender el comportamiento definido en la clase padre sin exponerlo completamente al resto del sistema.
                          
                        //-4ta pestaña
                        .row(titulo="Sin modificador (acceso de paquete)")
                          p Cuando no se especifica ningún modificador de acceso, el miembro es accesible únicamente desde las clases que pertenecen al mismo paquete. No puede ser utilizado por clases externas al paquete, aunque estas sean subclases. Este nivel de acceso permite una cohesión interna entre clases relacionadas, facilitando la colaboración dentro de un módulo o componente del sistema, sin exponer los detalles a otras partes del proyecto. Es el nivel de acceso por defecto en Java.
                          
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/8.png', alt='', class="w-100 h-100 object-fit-cover")


    .row.justify-content-center
      .col-lg-9
        p Basado en lo anterior, a continuación, se presenta un ejemplo práctico en Java que ilustra el uso de los diferentes modificadores. En él se interpreta cómo estos niveles influyen en la visibilidad de atributos y métodos entre una clase base y una subclase, así como las restricciones de acceso según el contexto y el paquete al que pertenecen las clases:
        
        .row.bg-code4
          .col-lg-12.text-white 
            p.mb-0.bloque-codigo public class Persona {
            
            
            p.margin-text-left.bloque-codigo private int edad;           
              span.margin-text-2.bloque-codigo // Solo accesible en Persona
            p.margin-text-left.bloque-codigo protected String nombre;    
              span.margin-text-2.bloque-codigo // Accesible en Persona y subclases
            p.margin-text-left.bloque-codigo String pais;              
              span.margin-text-2.bloque-codigo // Acceso de paquete (sin modificador)
            p.margin-text-left public String email;       
              span.margin-text-2.bloque-codigo // Accesible desde cualquier parte

            
            p.margin-text-left.bloque-codigo public void setEdad(int e) { // Método público de control
            p.margin-text-2.bloque-codigo if (e &gt;= 0 &amp;&amp; e &lt;= 120) this.edad = e;
            p.margin-text-left.bloque-codigo }
            
            p.margin-text-left.bloque-codigo public int getEdad() { return edad; }
            p }

            
            p.mb-0.bloque-codigo public class Estudiante extends Persona {
            p.margin-text-left.bloque-codigo public void mostrar() {
            p.margin-text-2.bloque-codigo System.out.println(nombre); // OK: protected
            p.margin-text-2.bloque-codigo System.out.println(pais);   // OK: mismo paquete
            p.margin-text-2.bloque-codigo // System.out.println(edad); // ERROR: private, no accesible
            p.margin-text-left.bloque-codigo }
            | }

    .row.justify-content-center.mt-4
      p.text-center De igual manera, la siguiente tabla resume el alcance de visibilidad de cada modificador de acceso en Java según el contexto desde donde se accede:
      
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 5.
              span Alcance de visibilidad de los modificadores de acceso en Java.

            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #FFEBBE")
                  tr
                    th Modificador
                    th Misma clase
                    th Subclase / mismo paquete
                    th Código externo
                tbody
                  tr(style="background-color: #F6F6F6")
                    td.text-start public.
                    td.text-start Sí.
                    td.text-start Sí.
                    td.text-start Sí.
                  tr
                    td.text-start protected.
                    td.text-start Sí.
                    td.text-start Sí.
                    td.text-start No (otro paquete).
                  tr(style="background-color: #F6F6F6")
                    td.text-start (paquete).
                    td.text-start Sí.
                    td.text-start Solo mismo paquete.
                    td.text-start No.
                  tr
                    td.text-start private.
                    td.text-start Sí.
                    td.text-start No.
                    td.text-start No.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Getters, setters y el patrón de encapsulamiento completo

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/9.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg.mt-2           
                .cajon.color2.p-4.mt-2
                  p El patrón de encapsulamiento completo, conocido en el ecosistema Java como el estándar JavaBeans, consiste en declarar todos los atributos de una clase como private e implementar métodos de acceso públicos (getters y setters) con lógica de validación. Este es el estándar de la industria Java adoptado por frameworks como Spring y JPA/Hibernate.

                p.mt-4 Los getters (métodos de lectura) retornan el valor de un atributo privado. Por convención, su nombre comienza con get seguido del nombre del atributo con la primera letra en mayúscula (por ejemplo, getNombre(). Los setters (métodos de escritura) asignan un nuevo valor al atributo privado, incorporando las validaciones necesarias para garantizar que el estado del objeto siempre sea válido.
                | A continuación, se da un claro ejemplo de estos métodos:

    .row.justify-content-center.mt-4
      .col-lg-9
        .row.bg-code3
          .col-lg-12.text-white
            p.mb-0.bloque-codigo public class Empleado {
            p.margin-text-left.bloque-codigo private String nombre;
            p.margin-text-left.bloque-codigo private double salario;
            p.margin-text-left private String cargo;

            p.margin-text-left.bloque-codigo public Empleado(String nombre, double salario, String cargo) {
            p.margin-text-2.bloque-codigo setNombre(nombre);  
              span.margin-text-2.bloque-codigo // Se usan los setters para validar
            p.margin-text-2.bloque-codigo setSalario(salario);
            p.margin-text-2.bloque-codigo setCargo(cargo);
            p.margin-text-left }

            p.margin-text-left.bloque-codigo // Getters
            p.margin-text-left.bloque-codigo public String getNombre()  { return nombre; }
            p.margin-text-left.bloque-codigo public double getSalario() { return salario; }
            p.margin-text-left public String getCargo()   { return cargo; }

            p.margin-text-left.bloque-codigo // Setters con validación
            p.margin-text-left.bloque-codigo public void setNombre(String n) {
            p.margin-text-2.bloque-codigo if (n == null || n.trim().isEmpty())
            p.margin-text-3.bloque-codigo throw new IllegalArgumentException("El nombre no puede estar vacío.");
            p.margin-text-2.bloque-codigo this.nombre = n;
            p.margin-text-left }

            p.margin-text-left.mt-4.bloque-codigo public void setSalario(double s) {
            p.margin-text-2.bloque-codigo if (s &lt; 1_000_000 || s &gt; 50_000_000)
            p.margin-text-3.bloque-codigo throw new IllegalArgumentException("Salario fuera del rango permitido.");
            p.margin-text-2.bloque-codigo this.salario = s;
            p.margin-text-left }

            p.margin-text-left.mt-4.bloque-codigo public void setCargo(String c) {
            p.margin-text-2.bloque-codigo if (c == null || c.trim().isEmpty())
            p.margin-text-3.bloque-codigo throw new IllegalArgumentException("El cargo no puede estar vacío.");
            p.margin-text-2.bloque-codigo this.cargo = c;
            p.margin-text-left }

            p.margin-text-left.mt-4.bloque-codigo @Override
            p.margin-text-left.bloque-codigo public String toString() {
            p.margin-text-2.bloque-codigo return "Empleado{nombre='" + nombre + "', salario=" + salario + ", cargo='" + cargo + "'}";
            p.margin-text-left.bloque-codigo }
            | }

    separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4 Clases anidadas e internas en Java
    
    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Java permite definir clases dentro de otras clases. Estas se denominan nested classes conocidas como clases anidadas o inner classes que son entendidas como las clases internas. Son útiles para encapsular lógica auxiliar estrechamente relacionada con la clase externa, implementar patrones de diseño como Builder e Iterator, y organizar mejor el código cuando una clase pequeña es usada exclusivamente por otra.

    p.mt-4 Java soporta cuatro tipos de clases anidadas: las clases anidadas estáticas (escritas como static nested class), las clases internas no estáticas (escritas como inner class), las clases locales (definidas dentro de un método) y las clases anónimas (sin nombre, usadas para implementaciones puntuales). El siguiente ejemplo ilustra una clase anidada estática en el contexto del patrón Builder:

    .row.justify-content-center.mt-4
      .col-lg-8
        .row.bg-code3
          .col-lg-12.text-white
            p.mb-0.bloque-codigo public class Factura {
            p.margin-text-left.bloque-codigo private String numero;
            p.margin-text-left.bloque-codigo private String cliente;
            p.margin-text-left private List&lt;ItemFactura&gt; items;

            p.margin-text-left.mb-0.bloque-codigo // Clase anidada estática: no requiere instancia de Factura
            p.margin-text-left.bloque-codigo public static class ItemFactura {
            p.margin-text-2.bloque-codigo private String descripcion;
            p.margin-text-2.bloque-codigo private int cantidad;
            p.margin-text-2 private double precioUnitario;

              p.margin-text-2.mt-4.bloque-codigo public ItemFactura(String desc, int cant, double precio) {
              p.margin-text-3.bloque-codigo this.descripcion = desc;
              p.margin-text-3.bloque-codigo this.cantidad = cant;
              p.margin-text-3.bloque-codigo this.precioUnitario = precio;
              p.margin-text-2.bloque-codigo }
              
              p.margin-text-2.bloque-codigo public double getSubtotal() { return cantidad * precioUnitario; }
            p.margin-text-left }

            // Constructor de Factura
            p.margin-text-left.bloque-codigo public Factura(String numero, String cliente) {
            p.margin-text-2.bloque-codigo this.numero = numero;
            p.margin-text-2.bloque-codigo this.cliente = cliente;
            p.margin-text-2.bloque-codigo this.items = new ArrayList&lt;&gt;();
            p.margin-text-left }

            // Métodos de Factura
            p.margin-text-left.mt-4.bloque-codigo public void agregarItem(String desc, int cant, double precio) {
            p.margin-text-2.bloque-codigo items.add(new ItemFactura(desc, cant, precio));
            p.margin-text-left }

            p.margin-text-left.mt-4.bloque-codigo public double calcularTotal() {
            p.margin-text-2.bloque-codigo return items.stream().mapToDouble(ItemFactura::getSubtotal).sum();
            p.margin-text-left.bloque-codigo }
            
            p.mt-0.bloque-codigo }
        


</template>

<script>
export default {
  name: 'Tema3',
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
