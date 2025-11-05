public class dowhile {
    public static void main(String []args){
        int i=0;
        while(i<5){
            System.out.println(i);
            i++;
        }


        int k=0;
        int day=5;

        do{
            System.out.println(k +" X "+ day + " = " + (day*k));
            k++;
        }
        while(k<=20);

        int j=0;
        int jay=10;
        do{
            System.out.println(j + " X "+jay+" = "+(j*jay));
            j++;
        }
        while(j<=20);
    }
}
