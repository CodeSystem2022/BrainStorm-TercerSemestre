# el archivo está en la misma carpeta no hace falta aclarar la ruta del archivo
# ruta del archivo:
# archivo = open('C:\\Users\\Jimena\\Tecnicatura3Py\\Archivos\\Leccion02\\prueba.txt', 'r',encoding='utf8')
archivo = open('prueba.txt', 'r', encoding='utf8') #las letras son: 'r' real 'a' append, 'w' write, 'x'
#print(archivo.read()
# print(archivo.read(16))
# print(archivo.read(10)) #continuamos desde la línea anterior
#print(archivo.readline())
#print(archivo.readline())

# vamos a iterar el archivo, cada una de las líneas
#for linea in archivo:
    #print(linea): # iteramos todos los elementos del archivo
    #print(archivo.readlines()[11]): # accedemos al archivo como si fuera una lista
                                                       #...........print(archivo.readlines()[1]) # accedemos al archivo como si fuera una lista, muestra oración correspondiente

# Anexamos información, copiamos a otro
archivo2 = open('copia.txt', 'w', encoding='utf8')
archivo2.write(archivo.read())
archivo.close()  # cerramos el primer archivo
archivo2.close() # cerramos el segundo archivo

print('Se ha terminado el proceso de leer y copiar archivos')