package herencia;

public class EjemploPersona {

public static void main(String[] args) { //es el unico que tiene main
	Estudiante e =new Estudiante(101223,"Alex","1992-02-13");
	e.dormir();
	e.aprobar();
	e.reprobar();
	System.out.println("");
	Empleado empl = new Empleado(  12,"Heliot","1992-02-13");
	
	empl.Cobrar();
	empl.Trabajar();
	
	
	}
	
}
