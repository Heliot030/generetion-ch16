package poliformismos.figuras;

public class Circulo extends Figura{
 
  private double radio;
 
  public Circulo(String color, double radio) {
	  super(color); //clase padre
	  this.radio =radio;
  }
  @Override //sobreescribir
  public double calcularArea(){
	  return Math.PI*Math.pow(radio,2);
  }

}
