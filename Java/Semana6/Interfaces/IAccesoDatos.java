
package accesodatos

public interface IAccesoDatos {
  int MAX_REGISTRO =10;
  
  //metodo Insertar es abstracto y sin cuerpo
  void insertar();
  
  void listar();
  
  void actualizar();
  
  void eliminar();
}