package com.paf_grp.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeHttpRequests()
                .requestMatchers(
                    "/api/users",                 // POST for registration
                    "/api/users/update/**",       // ✅ Allow updates
                    "/api/users/**",              // Optional: allow GET by ID
                    "/api/auth/**",               // Login
                    "/login"                      // Login form route
                ).permitAll()
                .anyRequest().authenticated()
            .and()
            .formLogin()
                .loginPage("/login") // Optional — won't be used if you have custom frontend login
                .permitAll()
            .and()
            .logout()
                .permitAll();

        return http.build();
    }
}
