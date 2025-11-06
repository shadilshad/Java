public class breakcontinue {
    public static void main(String []args){
        for(int i=0; i<10; i++){
            if(i==8){
             break;
            }
            System.out.println(i);
        }
    
    for(int j=0; j<20;j++){
        if(j%2==0){
            continue;
        }
        System.out.println(j);
    }}
}
