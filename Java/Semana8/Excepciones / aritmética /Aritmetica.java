package aritmetica;

import escepciones.OperacionException;

public class Aritmetica {
    public static int division(int numerador, int denominador){
        if(denominador == 0){
            throw new OperacionException("Division entre cero");
        }
        return numerador / denominador;
    }
}
