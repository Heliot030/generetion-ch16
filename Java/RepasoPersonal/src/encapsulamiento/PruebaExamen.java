package encapsulamiento;

class Examen{
	private float calificacion;
	private int numeroPreguntas;
	private boolean Activo;
	
	//sert establece argumentos
	public void setcalificacion(float calificacion) {
		this.calificacion = calificacion;
	}
	public float getcalificacion() {
		return calificacion;
	}
	
	public void numeroPreguntas(int numeroPreguntas) {
		this.numeroPreguntas = numeroPreguntas;
	}
	public float numeroPreguntas() {
		return numeroPreguntas;
	}
	
	//is esta en boolean
	public boolean isActivo() {
		return Activo;
	}
	
	
}

public class PruebaExamen {
	public static void main(String[] args) {
		Examen e = new Examen();
		e.setcalificacion(-45.0f);
	
	}
}
