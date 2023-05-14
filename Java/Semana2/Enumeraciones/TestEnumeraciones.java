public class TestEnumeraciones {
    public static void main(String[] args) {
        // System.out.println("Dia 1: "+Dias.LUNES); //Las enumeraciones se tratan como
        // cadenas
        // indicarDiaSemana(Dias.LUNES);
        // Ahora no se deben utilizar comillas, se accede a través de el operador de
        // punto
        System.out.println("Continente No. 4: " + Continentes.AMERICA);
        System.out.println("No. de paises en el 4to. continente: " + Continentes.AMERICA.getHabitantes());
    }

    private static void indicarDiaSemana(Dias dias) {
        switch (dias) {
            case LUNES:
                System.out.println("Primer dia de la semana");
                break;
            case MARTES:
                System.out.println("Segundo día de la semana");
                break;
            case MIERCOLES:
                System.out.println("Tercer día de la semana");
                break;
            case JUEVES:
                System.out.println("Cuarto día de la semana");
                break;
            case VIERNES:
                System.out.println("Quinto día de la semana");
                break;
            case SABADO:
                System.out.println("Sexto día de la semana");
                break;
            case DOMINGO:
                System.out.println("Septimo día de la semana");
                break;
            default:
                break;
        }
    }
}
