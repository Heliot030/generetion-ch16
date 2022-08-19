import java.util.Scanner;

public class Semana {
    public static void main(String[] args){
        System.out.println("Semana");
        Scanner sc = new Scanner(System.in);
        byte diSemana = sc.nextByte();
        switch (diSemana){
            case 1:
                System.out.println("se escribio un uno");
                break;
            case 2:
                System.out.println("Se imprimo un dos");
                break;
            default:
                System.out.println("No entendi ni mais");
        }
    }
}
