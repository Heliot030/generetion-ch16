import java.sql.SQLOutput;
import java.util.*; // importar
public class Dicionarioejersicio {
    public static void main(String[] args) {
        Map<String, String> diccionario = new HashMap<String, String>();
        diccionario.put("ventana", "window");
        diccionario.put("puerta", "door");
        diccionario.put("lapiz", "pencil");
        diccionario.put("pluma", "pen");
        diccionario.put("esperanza", "hope");
        diccionario.put("sueño", "dream");
        diccionario.put("deseos", "wishes");
        diccionario.put("mesa", "table");
        diccionario.put("pantalla", "screen");
        diccionario.put("pastel", "cake");
        diccionario.put("libro", "book");
        diccionario.put("bota", "boot");
        diccionario.put("pared", "wall");
        diccionario.put("ladrillo", "brick");
        diccionario.put("mochila", "bagpack");
        diccionario.put("reloj", "watch");
        diccionario.put("lampara", "lamp");
        diccionario.put("feliz", "happy");
        diccionario.put("conejo", "rabbit");
        diccionario.put("perro", "dog");

        //System.out.println(diccionario);
        System.out.println("----------------------------------------------");

        Scanner sc = new Scanner(System.in);
        System.out.println("que parabla buscas");
        String nombre = sc.nextLine();
        System.out.println(nombre);

        System.out.println("---------------------------------------------------");
        for(int i=0; i<diccionario.size(); i++) { //recorer alumnos Maps
            Object llaves = diccionario.keySet().toArray()[i];
            System.out.println(diccionario.get(llaves));
            if(nombre == llaves){
                System.out.println("se encontro la palabara:  "+nombre);
            }else {
                System.out.println("no se enecuentra la palabra");
            }

         }

    }
}
