import java.util.Scanner; //clase de java esta en libreria externa

public class Edad {
    public static void main(String[] args){
        //System.out.println("ejecucion por defecto");
        Scanner escaner = new Scanner(System.in); //abrimos lectura
        System.out.println("Escribe tu edad :");
        int edad = escaner.nextInt();
        //escaner.close();//cierro lectura de datos
        System.out.println(edad);
        if(edad >= 18){
            System.out.println("Eres mayor de edad");
        }else {
            System.out.println("Eres menor de edad");
        }

        //operador ternario
        String resultado = (edad >=18) ? "eres mayor de edad" :"eres menor de edad";
        System.out.println(resultado);
    }
}
