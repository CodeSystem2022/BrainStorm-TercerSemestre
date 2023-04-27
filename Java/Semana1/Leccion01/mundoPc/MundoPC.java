package mundopc;

import ar.com.system2023.mundopc.*;

public class mundoPC {
    public static void main(String[] args) {
        Monitor monitorHP = new Monitor("HP", 13);//Importar la clase
        Teclado tecladoHP = new Teclado("Bluetooth", "HP");
        Raton ratonHP = new Raton("Bluetooth", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);
        
        //Creamos otros objetos de diferente marca
        Monitor monitorGamer = new Monitor("Gamer", 32);
        Teclado tecladoGamer = new Teclado("Bluetooth", "Gamer");
        Raton ratonGamer = new Raton("Bluetooth", "Gamer");
        Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);
        
        Monitor monitorLenovo = new Monitor("Lenovo", 15);
        Teclado tecladoLenovo = new Teclado("Bluetooth", "Lenovo");
        Raton ratonLenovo = new Raton("Bluetooth", "Lenovo");
        Computadora computadoraLenovo = new Computadora("Computadora Lenovo", monitorLenovo, tecladoLenovo, ratonLenovo);
        
        Monitor monitorDell = new Monitor("Dell", 14);
        Teclado tecladoDell = new Teclado("Bluetooth", "Dell");
        Raton ratonDell = new Raton("Bluetooth", "Dell");
        Computadora computadoraDell = new Computadora("Computadora Dell", monitorDell, tecladoDell, ratonDell);
        
        Monitor monitorAcer = new Monitor("Acer", 20);
        Teclado tecladoAcer = new Teclado("Bluetooth", "Acer");
        Raton ratonAcer = new Raton("Bluetooth", "Acer");
        Computadora computadoraAcer = new Computadora("Computadora Acer", monitorAcer, tecladoAcer, ratonAcer);
        
        Monitor monitorSamsung = new Monitor("Samsung", 22);
        Teclado tecladoSamsung = new Teclado("Bluetooth", "Samsung");
        Raton ratonSamsung = new Raton("Bluetooth", "Samsung");
        Computadora computadoraSamsung = new Computadora("Computadora Samsung", monitorSamsung, tecladoSamsung, ratonSamsung);
        
        Monitor monitorToshiba = new Monitor("Toshiba", 18);
        Teclado tecladoToshiba = new Teclado("Bluetooth", "Toshiba");
        Raton ratonToshiba = new Raton("Bluetooth", "Toshiba");
        Computadora computadoraToshiba = new Computadora("Computadora Toshiba", monitorToshiba, tecladoToshiba, ratonToshiba);
        
        Monitor monitorApple = new Monitor("Apple", 15);
        Teclado tecladoApple = new Teclado("Bluetooth", "Apple");
        Raton ratonApple = new Raton("Bluetooth", "Apple");
        Computadora computadoraApple = new Computadora("Computadora Apple", monitorApple, tecladoApple, ratonApple);
        
        Monitor monitorAlienWare = new Monitor("AlienWare", 13);
        Teclado tecladoAlienWare = new Teclado("Bluetooth", "AlienWare");
        Raton ratonAlienWare = new Raton("Bluetooth", "AlienWare");
        Computadora computadoraAlienWare = new Computadora("Computadora AlienWare", monitorAlienWare, tecladoAlienWare, ratonAlienWare);
        
        Monitor monitorSony = new Monitor("Sony", 15);//Importar la clase
        Teclado tecladoSony = new Teclado("Bluetooth", "Sony");
        Raton ratonSony = new Raton("Bluetooth", "Sony");
        Computadora computadoraSony = new Computadora("Computadora Sony", monitorSony, tecladoSony, ratonSony);
        
        Orden orden1 = new Orden();//Inicializar el arreglo vacio
        Orden orden2 = new Orden();//Nueva lista para el objeto orden2
        Orden orden3 = new Orden();//Lista de tarea
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraGamer);
        orden1.agregarComputadora(computadoraLenovo);
        orden1.agregarComputadora(computadoraAcer);
        orden1.agregarComputadora(computadoraToshiba);
        orden1.agregarComputadora(computadoraApple);
        orden1.agregarComputadora(computadoraAlienWare);
        orden1.agregarComputadora(computadoraSamsung);
        orden1.agregarComputadora(computadoraSony);
        orden1.agregarComputadora(computadoraDell);
        
        Computadora computadoraVarias = new Computadora("Computadora de diferentes marcas: ", monitorHP, tecladoGamer, ratonLenovo);
        Computadora computadoraX = new Computadora("Computaras: ", monitorSony, tecladoAlienWare, ratonDell);
        orden2.agregarComputadora(computadoraVarias);
        orden3.agregarComputadora(computadoraX);
        
        orden1.mostrarOrden();
        orden2.mostrarOrden();
        orden3.mostrarOrden();
        
    }
}
