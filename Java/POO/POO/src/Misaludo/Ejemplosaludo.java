package Misaludo;

public class Ejemplosaludo {
    public static void main(String [] args){
        //Misaludo.Saludo objSaluda; //llamada a incovocacion saludo
        //objSaluda = new Misaludo.Saludo(); //sintaxis de la intancia
        Saludo objeto00 = new Saludo();
        objeto00.Saluda();

        Saludo objeto01 = new Saludo();

        System.out.println(objeto01.saludar());
    }
}
