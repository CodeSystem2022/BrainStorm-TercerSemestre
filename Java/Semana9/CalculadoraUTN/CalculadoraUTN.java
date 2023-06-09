import java.util.Scanner;

public class CalculadoraUTN {
    
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("******** Aplicación Calculadora ********");
        //mostramos el menú
        System.out.println("""
                1. Suma
                2. Restar
                3. Multiplicación
                4. Division
                5. Salir
                """);
        System.out.print("¿Operación a realizar? ");
        var operacion = Integer.parseInt(entrada.nextLine());

        if(operacion >= 1 && operacion <= 4){
            System.out.print("Digite el valor para el operando1: ");
            var operando1 = Integer.parseInt(entrada.nextLine());
            System.out.print("Digite el valor para el operando2: ");
            var operando2 = Integer.parseInt(entrada.nextLine());

            int resultado;
            switch(operacion){
                case 1 -> { // Suma
                    resultado = operando1 + operando2;
                    System.out.println("Resultado de la suma: "+resultado);
                }
                case 2 -> { //Resta
                    resultado= operando1 - operando2;
                    System.out.println("Resultado de la resta: "+resultado);
                }
                case 3 -> { //Multiplicación
                    resultado = operando1 * operando2;
                    System.out.println("Resultado de la multiplicación: "+resultado);
                }
                case 4 -> { //División
                    resultado = operando1 / operando2;
                    System.out.println("Resultado de la división: "+resultado);
                }
                default -> System.out.println("Opcion erronea:"+operacion);

            } // Fin Switch
        } // Fin del if
        else if (operacion == 5){
            System.out.println("Hasta Pronto...");
        }
        else{
            System.out.println("Opcion erronea: "+operacion);
        }
    } // Fin main
}//Fin Clase
