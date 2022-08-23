import java.util.*; //importar


public class Diccionario {
    public static void main(String[] args){
        System.out.println("ArraysList");
        List<String> comidas = new ArrayList<String>();
        comidas.add("Paozoles");
        comidas.add("Tostadas");
        comidas.add("galletas");

        System.out.println(comidas);

        List<Integer> numeros= new ArrayList<Integer>(Arrays.asList(1,2,3));
        System.out.println(); //checar este codeigo de arrays list
        System.out.println(numeros);

        System.out.println("--------------------------------------------------------");
        System.out.println("HASHSET");
        //no se inserta un elemento en especifico
        Set<String> ciudades = new HashSet<String>();
        ciudades.add("CDMX");
        ciudades.add("GDL");
        ciudades.add("MTY");

        System.out.println("las ciudades son :  "+ciudades);
        System.out.println("--------------------------------------------------------");
        System.out.println("MAPS");

        Map<Integer,String>alumnos = new HashMap<Integer,String>();
        alumnos.put(1,"Pedro");
        alumnos.put(2,"Sofia");
        alumnos.put(3,"efrain");
        alumnos.put(4,"heliot");
        System.out.println(alumnos);
        System.out.println(alumnos.size());
        System.out.println(alumnos.values());
        System.out.println(alumnos.keySet()); //lista de los numeros de valores
        System.out.println(alumnos.get(2));


        System.out.println("--------------------------------------------------------");
        for(int i=0; i<alumnos.size(); i++){ //recorer alumnos Maps
            Object llaves = alumnos.keySet().toArray()[i];
            System.out.println(alumnos.get(llaves));
        }

        for (Integer llave: alumnos.keySet()) { //recorre con for ech
            System.out.println(llave +"-- "+alumnos.get(llave));
        }
    }
}
