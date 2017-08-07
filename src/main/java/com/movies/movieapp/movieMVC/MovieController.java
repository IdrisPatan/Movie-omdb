package com.movies.movieapp.movieMVC;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping("/")

public class MovieController {

    MovieRepository movieRepository;

    MovieController(MovieRepository movieRepository){
        this.movieRepository = movieRepository;
    }

    @PostMapping
    ResponseEntity<Movie> create(@RequestBody final Movie movie){
        return new ResponseEntity<>(movieRepository.save(movie), CREATED);
    }

}
