package uk.co.simonaust.startrekspellinggame;

import java.util.Arrays;
import java.util.stream.Collectors;

public class CodeWars {

    public static void main(String[] args) {
        Training training = new Training();
        training.run();
    }
}

class Training {

    public void run() {
        System.out.println(getCount("abracadabra"));
        System.out.println(getCount("pear tree"));
        System.out.println(getCount(""));
        System.out.println(getCount("o a kak ushakov lil vo kashu kakao"));
    }

    public static int getCount(String str) {
        return (int) str.toLowerCase().chars().filter(Training::vowelPredicate).count();
    }

    private static boolean vowelPredicate(int i) {
        return switch (i) {
            case 97, 101, 105, 111, 117 -> true;
            default -> false;
        };
    }
}
