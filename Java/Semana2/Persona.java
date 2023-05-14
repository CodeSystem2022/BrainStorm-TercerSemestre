package domain;

public class Persona {
    private final int idPersona;
    private static int contadorPersonas;

    static { // Bloque de inicialización estatico
        System.out.println("Ejecución del bloque estatico");
        ++Persona.contadorPersonas;
        // idPersona = 10; No es estatico un atributo por esto tenemos un error
    }

    {// BLoque de inicialización NO estatico (contexto dinamico)

        System.out.println("Ejecución del bloque NO estatico");
        this.idPersona = Persona.contadorPersonas++; // Incremento del atributo
    }

    // Los bloques de inicialización se ejecutan antes del conductor
    public Persona() {
        System.out.println("Ejecución del constructor");
    }

    public int getIdPersona() {
        return this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
}
