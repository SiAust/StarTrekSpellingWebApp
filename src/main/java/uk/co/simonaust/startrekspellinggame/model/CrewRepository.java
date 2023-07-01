package uk.co.simonaust.startrekspellinggame.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CrewRepository extends JpaRepository<Crew, Long> {

    Crew findByFirstName(String firstName);
    List<Crew> findByShip(String ship);
}
