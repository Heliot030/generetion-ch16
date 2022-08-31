package herencia;

public class Empleado extends Persona{

	float sueldo;
	
	public Empleado(float sueldo,String nombre, String fechaNacimiento) {
		super(nombre, fechaNacimiento);
		this.sueldo =sueldo;
		
	}
	void Trabajar() {
		System.out.println("soy "+ nombre+" y trabajo");
	}
	void Cobrar() {
		System.out.println("soy "+ nombre+" y estoy cobrand "+sueldo);
	}
}