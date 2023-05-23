package test;

import domain.*;


public class TestClaseObject {
    public static void main(String[] args) {
        Empleados empleados1 = new Empleados("juan", 5000);
        Empleados empleados2 = new Empleados("Juan", 5000);
        
       if(empleados1 == empleados2){
           System.out.println("Tienen la misma referencia en memoria");
       }
       else{
           System.out.println("Tienen distinta referencia en memoria");
       }
       
       if (empleados1.equals(empleados2)){
           System.out.println("Los objetos son iguales en contenido");
       }
       else{
           System.out.println("Los objetos son distintos en contenido");
       }
       if (empleados1.hashCode() == empleados2.hashCode()){
           System.out.println("El valor hashCode es igual");
       }
       else{
           System.out.println("El valor hashCode es diferente");
       }  
    }    
}
