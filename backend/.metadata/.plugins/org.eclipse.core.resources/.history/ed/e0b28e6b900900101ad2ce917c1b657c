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
            .csrf().disable() // Disable CSRF (you can enable later for better security)
            .authorizeHttpRequests()
                // Allow registration and login endpoints without auth
                .requestMatchers("/api/users", "/api/auth/**", "/login").permitAll()
                // Everything else needs authentication
                .anyRequest().authenticated()
            .and()
            .formLogin() // Enable default login form (can be customized later)
                .loginPage("/login") // optional: define a custom login endpoint
                .permitAll()
            .and()
            .logout()
                .permitAll();

        return http.build();
    }
}
