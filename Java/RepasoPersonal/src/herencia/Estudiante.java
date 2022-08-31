package herencia;

public class Estudiante extends Persona { //clase hija de persona
	int numeroDeCuenta;
	
	Estudiante(int numeroDeCuenta,String nombre, String fechaNacimiento){
		super(nombre,fechaNacimiento); 
		this.numeroDeCuenta =numeroDeCuenta;
	}

	@Override // este metodo esta sobreescribiendo
	//de clase padre
	void dormir() {
		super.dormir();
		System.out.println("Soy "+nombre+" soy estudiante  yo no cuermo");

	}

	void aprobar() {
	System.out.println("soy "+ nombre+" y aprobe el examen");
	}

	void reprobar() {
		System.out.println("soy "+ nombre+" y repobre mi examen");
	}
	
	
    		
	
}
