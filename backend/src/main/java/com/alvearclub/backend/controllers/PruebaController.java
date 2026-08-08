package com.alvearclub.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PruebaController {

    @GetMapping("/saludo")
    public String saludar() {
        return "¡Hola desde el backend del Alvear Club Tenis de Mesa!";
    }
}