package com.alvearclub.backend.controllers;

import com.alvearclub.backend.models.Partido;
import com.alvearclub.backend.services.PartidoService;
import java.util.List;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/partidos")
@CrossOrigin(origins = "http://localhost:5173")
public class PartidoController {
    
    private final PartidoService partidoService;

    public PartidoController(PartidoService partidoService) {
        this.partidoService = partidoService;
    }

    @GetMapping
    public List<Partido> obtenerTodos() {
        return partidoService.obtenerTodos();
    }

    @PostMapping
    public Partido guardarPartido(Partido partido){
        return partidoService.guardarPartido(partido);
    }

}
