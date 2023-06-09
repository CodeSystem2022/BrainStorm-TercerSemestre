package test;

import static aritmetica.Aritmetica.division;
import escepciones.OperacionException;

public class TestExcepciones {
    public static void main(String[] args) {
        int resultado = 0;
        try{
            resultado = division(10, 0);
        } catch(OperacionException e){
            System.out.println("Ocurrio un error de tipo OperacionException");
            System.out.println(e.getMessage());
        } catch (Exception e){
            System.out.println("Ocurriò un error");
            e.printStackTrace(System.out); //se conoce como pila de excepciones
            System.out.println(e.getMessage());
        }
        finally{
            System.out.println("Se reviso la division entre cero");
        }
        System.out.println("La variable de resultado tiene como valor: "+resultado);
    }
}
