package domain;

public class Gerente extends Empleados{
    private String departamento;
    
    public Gerente(String nombre, double sueldo, String departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
        
    }
    //sobreescribimos el método
    @Override
    public String obtenerDetalles(){
       return super.obtenerDetalles()+", Departamento: "+this.departamento;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }
    
}
