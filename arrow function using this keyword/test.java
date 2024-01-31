import java.util.Scanner;

public class test {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("What operation do you want do ?   \n  2.Enter 'M' for maimum, 'N' for minimum and 'A' for Average.\n");
        char letter = input.next().charAt(0);

        System.out.print(" Input the first number :");
        double num1 = input.nextDouble();

        System.out.print(" Input the second number :");
        double num2 = input.nextDouble();

        System.out.print(" Input the third number :");
        double num3 = input.nextDouble();

        switch (letter) {
            case 'M':
                double max = Math.max(Math.max(num1, num2), num3);
                System.out.println( max + "is the maximum number");
                break;
            case 'N':
                double min = Math.min(Math.min(num1, num2), num3);
                System.out.println( min + "is the minimum number" );
                break;
            case 'A':
                double average = (num1 + num2 + num3) / 3;
                System.out.println( average + "is the average number");
                break;
            default:
                System.out.println("Invalid input");
                break;
        }
    }
}