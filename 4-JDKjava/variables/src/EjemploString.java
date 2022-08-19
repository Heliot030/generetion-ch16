public class EjemploString {
    public static void main(String[] arg){

        String nombre = "curso de java";
        String saludo = "heliot";
        String result = new String("curso de java"); //est es objeto
        System.out.println(nombre);
        System.out.println(result);

        boolean igual = nombre == result;
        System.out.println( "es igual nombre a result:" +igual);


    }
}


