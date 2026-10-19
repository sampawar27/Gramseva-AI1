package com.gramseva.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SpaRedirectController {

    @GetMapping(value = {
            "/login",
            "/register",
            "/forgot-password",
            "/unauthorized",
            "/citizen/**",
            "/officer/**",
            "/admin/**",
            "/department-head-setup",
            "/ai-assistant"
    })
    public String redirectSpaRoutes() {
        return "forward:/index.html";
    }
}
