package uk.co.simonaust.startrekspellinggame.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uk.co.simonaust.startrekspellinggame.model.Crew;
import uk.co.simonaust.startrekspellinggame.model.CrewRepository;

import java.util.Collection;

@RestController
@RequestMapping("/api")
public class CrewController {
    private final Logger log = LoggerFactory.getLogger(CrewController.class);
    private CrewRepository crewRepository;

    public CrewController(CrewRepository crewRepository) {
        this.crewRepository = crewRepository;
    }

    @GetMapping("/crew")
    Collection<Crew> getCrew() {
        return crewRepository.findAll();
    }
}
