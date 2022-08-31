package herencia;

public class Persona { //clase padre
	String nombre;
	String fechaNacimiento;
	
	//constructor de nombre y fecha de nacimente
	//este constructor hace que renunciemos al contructor por defecto
	public Persona(String nombre, String fechaNacimiento) {
		this.nombre = nombre; 
		this.fechaNacimiento = fechaNacimiento;
	}
	

	
	void dormir() {
		System.out.println("soy "+ nombre+ " y estoy durmiendo");
	}

	
	void respirar() {
		System.out.println("soy "+ nombre+" y estoy respirando desde "+fechaNacimiento);
	}

	void comer() {
		System.out.println("soy "+ nombre+" y estoy comiendo");
	}
	
}