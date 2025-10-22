public class controlstatement {
    public static void main(String[] args){
            boolean len=false;
                    if (len==false)
    {
            System.out.println("idk rabbe");
    }
        else
    {
            System.out.println("fak");
    }

    String name="shadil";
    int mark=80;
    String grade="";
    if(mark>=90){
grade=("A");
    }
    else if(mark>=80){
grade=("B");
    }
    else if(mark>=70){
grade=("C");
    }   
    else if(mark>=60){
grade=("D");
    }
    else{
grade=("FAIL");

    }
        System.out.println("The Student Named "+name + " Scored a "+ mark+" in the examination which has the grade of "+grade);

    }
}
