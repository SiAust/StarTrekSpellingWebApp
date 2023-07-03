package uk.co.simonaust.startrekspellinggame;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class CodeWars {

    public static void main(String[] args) {
        Training training = new Training();
        training.run();
    }
}

class Training {

    public void run() {
        System.out.println(number(List.of("a", "b", "c")));
        System.out.println(number(List.of()));
    }

    public static List<String> number(List<String> lines) {
        return IntStream.range(0, lines.size()).mapToObj(i -> (i + 1) + ": " + lines.get(i)).collect(Collectors.toList());
    }


}
