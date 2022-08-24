package MiEjemploJava;

public class Perosna {
    String nombre = "efrain";
    int edad = 32;
    int nss= 112;

    //constructor
    Perosna(){

    }

    public Perosna(String nombre) {
        this.nombre = nombre;
    }

    void caminar(){
        System.out.println("Estoy caminandp");

    }
    void dormir(){
        System.out.println("Etoy durmiendo no molesta mimir");

    }
}
