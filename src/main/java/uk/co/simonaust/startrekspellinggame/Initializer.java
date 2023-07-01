package uk.co.simonaust.startrekspellinggame;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import uk.co.simonaust.startrekspellinggame.model.Crew;
import uk.co.simonaust.startrekspellinggame.model.CrewRepository;

import java.util.stream.Stream;
@Component
public class Initializer implements CommandLineRunner {

    private final CrewRepository crewRepository;


    public Initializer(CrewRepository crewRepository) {
        this.crewRepository = crewRepository;
    }

    @Override
    public void run(String... args) throws Exception {
//        Stream.of(new Crew("James", "Kirk", "Tiberius",  "Jim", "Captain", "Enterprise"), )

        crewRepository.save(new Crew("James", "Kirk", "Tiberius",
                "Jim", "Captain", "Enterprise"));
        crewRepository.save(new Crew("Leonard", "McCoy", "Theobald",
                "Bones", "Chief Medical Officer", "Enterprise"));

        crewRepository.findAll().forEach(System.out::println);
    }
}
