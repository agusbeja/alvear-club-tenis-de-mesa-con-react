package com.alvearclub.backend.services;

import com.alvearclub.backend.models.Categoria;
import com.alvearclub.backend.repositories.CategoriaRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CategoriaService {

    private final CategoriaRepository categoriaRepository;

    // Constructor: Spring Boot automáticamente inyecta el Repository acá
    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    // 1. Método para traer TODAS las categorías
    public List<Categoria> obtenerTodas() {
        return categoriaRepository.findAll();
    }

    // 2. Método para GUARDAR una categoría nueva (o actualizarla)
    public Categoria guardarCategoria(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }
}