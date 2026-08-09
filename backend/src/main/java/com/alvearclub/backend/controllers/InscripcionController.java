package com.alvearclub.backend.controllers;

import com.alvearclub.backend.models.Inscripcion;
import com.alvearclub.backend.services.InscripcionService;
import java.util.List;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/inscripciones")
@CrossOrigin(origins = "http://localhost:5173")
public class InscripcionController {
    
    private final InscripcionService inscripcionService;

    public InscripcionController(InscripcionService inscripcionService) {
        this.inscripcionService = inscripcionService;
    }

    @GetMapping
    public List<Inscripcion> obtenerTodas() {
        return inscripcionService.obtenerTodas();
    }

    @PostMapping
    public Inscripcion guardarInscripcion(@RequestBody Inscripcion inscripcion) {
        return inscripcionService.guardarInscripcion(inscripcion);
    }
}
