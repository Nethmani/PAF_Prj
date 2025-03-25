package com.paf_grp.backend.controller.pasindu;

import com.paf_grp.backend.model.pasindu.User;
import com.paf_grp.backend.repository.pasindu.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/login")
    public String login(@RequestBody User loginRequest) {
        User user = userRepository.findByUsername(loginRequest.getUsername());

        if (user == null) {
            return "❌ User not found!";
        }

        boolean passwordMatch = passwordEncoder.matches(
                loginRequest.getPassword(), user.getPassword());

        if (!passwordMatch) {
            return "❌ Invalid credentials!";
        }

        // In real app, you'd return a JWT or session
        return "✅ Login successful";
    }
}
