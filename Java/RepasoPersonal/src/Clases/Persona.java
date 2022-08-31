package Clases;
//definicion de clases
 class Persona {
    //atributos caracteristiscaa
    String nombre;
    int edad;
    char genero;

    void jugarVideosjuego(Persona p){
        System.out.println(nombre +" Esta jugando con  " + p.nombre);
    }
    //constructor
    Persona(){
      this("ssssss",2323,'d');
        System.out.println(" constructor por defecto");
    }
    Persona(String nombre, int edad, char genero){
        //this();//invocar a constructor por defecto primera liea
        this.nombre =nombre;
        this.edad = edad;
        this.genero = genero;
    }

    //metodos o comportamiento
    void imprimirInfo(){
        System.out.println("Nombre: " + nombre );
        System.out.println("edad: " + edad );
        System.out.println("genero: " + genero );
    }
    public static void main(String args[]){
        Persona p = new Persona("Heliot",30,'M'); //objeto tipo persona
        p.imprimirInfo();
        System.out.println();
        Persona p1 = new Persona("efrain",33,'f'); //objeto tipo persona
        p1.imprimirInfo();
        

        p.jugarVideosjuego(p1);
        System.out.println();
        new Persona().imprimirInfo();
    }
 }
