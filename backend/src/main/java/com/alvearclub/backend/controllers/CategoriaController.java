package com.alvearclub.backend.controllers;

import com.alvearclub.backend.models.Categoria;
import com.alvearclub.backend.services.CategoriaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // Le dice a Spring que esta clase va a responder a pedidos web (API REST)
@RequestMapping("/api/categorias") // Esta es la URL base para este controlador
@CrossOrigin(origins = "*")
public class CategoriaController {

    private final CategoriaService categoriaService;

    // Constructor para inyectar el Service (como hicimos recién)
    public CategoriaController(CategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }

    // Petición GET: Para pedir datos (Leer)
    @GetMapping
    public List<Categoria> obtenerTodas() {
        return categoriaService.obtenerTodas();
    }

    // Petición POST: Para enviar datos (Crear)
    @PostMapping
    public Categoria guardarCategoria(@RequestBody Categoria categoria) {
        // @RequestBody agarra el JSON que mandemos y lo convierte en un objeto de Java
        return categoriaService.guardarCategoria(categoria);
    }
}