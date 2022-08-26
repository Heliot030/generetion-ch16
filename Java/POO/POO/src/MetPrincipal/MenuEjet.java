package MetPrincipal;

import MetP.MenuOp; //importacionde clase
import Misaludo.Saludo;

import java.util.Scanner;

public class MenuEjet {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        MenuOp menuOp = new MenuOp(); //creo metodo
        menuOp.menu();
        System.out.println("Eliga una opcion->>");
        int op = sc.nextInt(); //dafault
        switch (op){
            case 1 :
                Saludo s = new Saludo();
                s.saludar();
                System.out.println(s.saludar());

            case 2:
                System.out.println("Aqui van mis deseo de " +
                        "año");
                break;
            default:
                System.out.println("sigue participando");

        }
    }
}
