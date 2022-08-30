package com.efrain.h_abstract;


public class Circulo extends FiguraGeometricas{

    private float radio;

    @java.lang.Overrid
    public Circulo() {
        return (Math.PI * Math.pow(radio,2));
    }
}
