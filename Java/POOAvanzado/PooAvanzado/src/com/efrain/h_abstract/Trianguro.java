package com.efrain.h_abstract;

public class Trianguro extends FiguraGeometricas{
    @java.lang.Override  //sobre escritura

    private float base;
    private float altura;

    public Trianguro(){

    }
    //constructor con parametros
    //estado de inicio
    public Trianguro(float base, float altura) {
        this.base = base;
        this.altura = altura;
    }

    public float area() {
        return (getBase()*getAltura())/2;
    }

    public float getBase() {
        return base;
    }

    public float getAltura() {
        return altura;
    }
}
