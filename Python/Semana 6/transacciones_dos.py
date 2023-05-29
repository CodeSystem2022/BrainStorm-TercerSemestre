import psycopg2 as bd

conexion = bd.connect(user='postgres', password='matiitas', host='127.0.0.1', port='5432', database='test_bd')
try:
      conexion.autocommit=False #Esto no deberia estar es una mala practica
      cursor= conexion.cursor()
      sentencia='INSERT INTO persona(nombre, apellido, email)values(%s, %s,%s)'
      valores=('Jorge','Prol','jprol@gmail.com') #rollback maximo 10 caracteres
      cursor.execute(sentencia, valores)

      sentencia='UPDATE persona SET nombre=%s,apellido=%s,email=%s WHERE id_persona=%s'
      valores=('Juan Carlos','Perez','jcperez@gmail.com',14)
      cursor.execute(sentencia,valores)

      conexion.commit() #Hacemos el commit manualmente esto si es una buena practica
      print('Termina la transaccion')

except Exception as e:
      conexion.rollback()
      print(f'Ocurrio un error, se hizo un rollback:{e}')
finally:
      conexion.close()
# https://www.psycopg.org/docs/usage.html

