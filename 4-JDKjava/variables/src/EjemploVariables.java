import javax.print.DocFlavor;

public class EjemploVariables {
    public static void main(String[] arg){

        String nombre = "efrain";
        String saludo = "holaeeee";
        //char espacio = 'P';
        char caracter = 'w';

        System.out.println( saludo +nombre);
        System.out.println("char correponde en bytes : " + Character.BYTES );
        System.out.println("char correponde en bits : " + Character.SIZE);
    }
}
