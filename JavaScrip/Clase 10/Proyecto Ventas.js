class Producto{
   static contadorProductos = 0;
   constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
   }

   get _idProducto(){
        return this._idProducto;
   }

   get nombre(){
    return this._nombre;
   }

   set nombre(nombre){
      this._nombre = nombre;
   }

   get precio(){
    return this._precio;
   }

   set precio(precio){
       this._precio = precio;
   }

   toString(){
      return "idProducto : ${this._idProducto}, nombre: $¨{this._nombre}, this.precio: ${this._precio}";
   }
} //fin de la clase producto 

class Orden{
   static contadorOrdenes = 0;
   static getMAX_PRODUCTOS(){
       return 5;
   }

   constructor(){
      this._idOrden = ++Orden.contadorOrdenes;
      this._producto = [];
      this._contadorProdcutosAgregados = 0;
   }

    get idOrden(){
       return this._idOrden;
   }

    agregarProducto(producto){
        if(this._productos.length < Orden.getMAX_PRODUCTOS()){
           this._productos.push(producto);

        }
        else{
            console.log("No pueden agrgar mas productos");
        }
     }

     calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
     }

    mostrarOrden(){
        let productosOrden = " ";
        for(let producto of this._productos){
            productosOrden += "\n{ "+producto.toString()+" }";
        }
        console.log("Orden: ${this._idOrden}, Total: $${this.calcularTotal()}, Productos: ${productosOrden}");
    }
}


 let producto1 = new Producto("Pantalon", 200);
 let producto2 = new Producto("Camisa", 150);
 let producto3 = new Producto("Cinturon", 50);
 let orden1 = new Orden();
 let orden2 = new Orden();
 orden1.agregarProducto(producto1);
 orden1,agregarProducto(producto2);
 orden1.agregarProducto(producto3);
 orden1,agregarProducto(producto1);
 orden1.agregarProducto(producto2);
 orden2,agregarProducto(producto3);
 orden1.mostrarOrden();
 orden2.mostrarOrden();
