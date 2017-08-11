package com.movies.movieapp.movieMVC;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolationException;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@CrossOrigin
@RestController
@RequestMapping("/")

public class MovieController {

    MovieRepository movieRepository;

    MovieController(MovieRepository movieRepository){
        this.movieRepository = movieRepository;
    }

    @PostMapping
    ResponseEntity<Movie> create(@RequestBody final Movie movie){

        try {
            return new ResponseEntity<>(movieRepository.save(movie), CREATED);
        }catch(ConstraintViolationException e){
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping
    ResponseEntity<Iterable<Movie>> list(){
        return new ResponseEntity<>(movieRepository.findAll(), OK);
    }

    @DeleteMapping("{id}")
    ResponseEntity<Movie> delete(@PathVariable final int id) {
        if(null == movieRepository.findOne(id))
            return ResponseEntity.notFound().build();

        movieRepository.delete(id);
        return ResponseEntity.accepted().build();
    }

}
