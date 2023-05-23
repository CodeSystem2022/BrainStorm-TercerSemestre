package test;

import domain.*;

public class TestConversionObjetos {
    public static void main(String[] args) {
        Empleados empleados;
        empleados = new Escritor ("Juan", 5000, TipoEscritura.CLASICO);
        //System.out.println("empleados = " + empleados);
        System.out.println(empleados.obtenerDetalles()); //si queremos acceder a métodos Escritor
        //empleados.getTipoEscritura(); //No se puede hacer
        //Downcasting
        //((Escritor)empleados).getTipoEscritura() ; //Tenemos dos opciones esta es una
        Escritor escritor = (Escritor)empleados;
        escritor.getTipoEscritura();
        
        //Upcastig
        Empleados empleados2 = escritor;
        System.out.println(empleados2.obtenerDetalles());
    }
    
}
