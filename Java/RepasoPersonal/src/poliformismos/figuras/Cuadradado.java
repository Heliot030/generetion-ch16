package poliformismos.figuras;

public class Cuadradado extends Figura{
 public double lado;
 
 public Cuadradado(String color, double lado) {
	  super(color); //clase padre
	  this.lado =lado;
  	}
 
 public double calcularArea(){
	 return lado*lado;
 }

}
