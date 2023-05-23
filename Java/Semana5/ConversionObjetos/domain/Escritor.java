package domain;

public class Escritor extends Empleados {
    final TipoEscritura tipoEscritura;
    
    public Escritor(String nombre, double sueldo, TipoEscritura tipoEscritura){
        super(nombre, sueldo);
        this.tipoEscritura = tipoEscritura;
    }
    
    //Metodo para Sobreescribir
    @Override
    public String obtenerDetalles(){
        return super.obtenerDetalles()+", Tipo Escritura: "+tipoEscritura.getDescripcion();
}

    @Override
    public String toString() {
        return "Escritor{" + "TipoEscritura=" + tipoEscritura + '}'+" "+super.toString();
    } 
    
    public TipoEscritura getTipoEscritura(){
        return this.tipoEscritura;
    }
}
