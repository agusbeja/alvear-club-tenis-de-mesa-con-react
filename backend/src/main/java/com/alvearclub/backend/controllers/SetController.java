package com.alvearclub.backend.controllers;

import com.alvearclub.backend.models.Set;
import com.alvearclub.backend.services.SetService;
import java.util.List;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sets")
@CrossOrigin(origins = "http://localhost:5173")
public class SetController {
    
    private final SetService setService;

    public SetController(SetService setService) {
        this. setService = setService;
    }

    @GetMapping
    public List<Set> obtenerTodos(Set set) {
        return setService.obtenerTodos();
    }
    
    @PostMapping
    public Set guardarSet(@RequestBody Set set) {
        return setService.guardarSet(set);
    }

}
