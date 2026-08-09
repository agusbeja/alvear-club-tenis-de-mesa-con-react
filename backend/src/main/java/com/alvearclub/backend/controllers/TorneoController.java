package com.alvearclub.backend.controllers;

import com.alvearclub.backend.models.Torneo;
import com.alvearclub.backend.services.TorneoService;
import java.util.List;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/torneos")
@CrossOrigin(origins = "*")
public class TorneoController {
    
    private final TorneoService torneoService;

    public TorneoController(TorneoService torneoService) {
        this.torneoService = torneoService;
    }

    @GetMapping
    public List<Torneo> obtenerTodos() {
        return torneoService.obtenerTodos();
    }

    @PostMapping
    public Torneo guardarTorneo(@RequestBody Torneo torneo) {
        return torneoService.guardarTorneo(torneo);
    }
    
}
