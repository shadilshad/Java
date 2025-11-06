public class onearray {
    public static void main(String[] args) {
        String[] cars = {"tesla", "maruti", "omni", "audi"};
        int[] numbers = {1, 2, 34, 5, 6, 6};

        System.out.println("Cars list:");
        for (int i = 0; i < cars.length; i++) {
            System.out.println(cars[i]);
        }

        System.out.println("\nNumbers list:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }

        // Example of do-while loop
        int i = 0;
        do {
            System.out.println("Car " + (i + 1) + ": " + cars[i]);
            i++;
        } while (i < cars.length);
    }
}
