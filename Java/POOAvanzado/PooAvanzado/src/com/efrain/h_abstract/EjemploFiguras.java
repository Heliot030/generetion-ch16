package com.efrain.h_abstract;

public class EjemploFiguras {
    public static void main(String[] args) {
        FiguraGeometricas fg;

        Trianguro t = new Trianguro(base:0, altura:0);

        System.out.println("t es el objeto de triangulo=" +
                t.area());
    }
}
