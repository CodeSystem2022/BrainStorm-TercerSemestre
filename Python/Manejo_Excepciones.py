from NumerosIgualesException import NumerosIgualesException

resultado = None
a = 7
b = 0
try:
    a = int(input('Digite el primer número : '))
    b = int(input('Digite el segundo número: '))

    if a == b:
        raise NumerosIgualesException ('Son números iguales')

    resultado = a / b #no se modifica el valor
except TypeError as e:
    print(f'TypeError - Ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {type(e)}')

else:
    print('No se arrojo ninguna excepción')
    
finally: #Seimpre se va a ejecutar
    print(f'Ejecución de este bloque finally')

print(f'El resultado es : {resultado}')
print('seguimos...')
