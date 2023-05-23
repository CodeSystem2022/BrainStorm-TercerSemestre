package Test;

import domain.*;

public class TestInstanceOf {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan", 1000.0);
        determinarTipo(empleado1);
        empleado1 = new Gerente("Carlos Calvo", 9.000000, "Ingeniería");
        //determinarTipo(empleado1);               
    }
    
    public static void determinarTipo(Empleado empleado){
        if (empleado instanceof Gerente){ 
            System.out.println("es de tipo gerente");
            Gerente gerente = (Gerente)empleado;
            //((Gerente) empleado).getDepartamento();
            System.out.println("gerente = " + gerente.getDepartamento());
        }
        else if(empleado instanceof Empleado){
            System.out.println("es de tipo empleado");
           //Gerente gerente = (Gerente)empleado;
           //System.out.println("gerente = " + gerente.getDepartamento());
        }
        else if(empleado instanceof Object){
            System.out.println("es de tipo objecto");
        }
    }
}
