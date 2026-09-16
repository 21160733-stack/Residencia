package mx.gob.ceabien.catsbackend.shared.config;

import lombok.RequiredArgsConstructor;
import mx.gob.ceabien.catsbackend.auth.adapter.out.persistence.entity.RoleEntity;
import mx.gob.ceabien.catsbackend.auth.adapter.out.persistence.entity.UserEntity;
import mx.gob.ceabien.catsbackend.auth.adapter.out.persistence.repository.JpaRoleRepository;
import mx.gob.ceabien.catsbackend.auth.adapter.out.persistence.repository.JpaUserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Set;

@Configuration
@RequiredArgsConstructor
public class DataSeederConfig {

    private final JpaUserRepository userRepository;
    private final JpaRoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Bean
    @Transactional
    public CommandLineRunner initData() {
        return args -> {
            // 1. Crear roles si no existen
            RoleEntity adminRole = roleRepository.findByName("ADMIN").orElseGet(() -> {
                RoleEntity role = new RoleEntity();
                role.setName("ADMIN");
                role.setDescription("Administrador del sistema");
                return roleRepository.save(role);
            });

            RoleEntity userRole = roleRepository.findByName("USER").orElseGet(() -> {
                RoleEntity role = new RoleEntity();
                role.setName("USER");
                role.setDescription("Usuario regular");
                return roleRepository.save(role);
            });

            // 2. Crear usuario de prueba si no existe
            if (!userRepository.existsByUsername("admin")) {
                UserEntity adminUser = new UserEntity();
                adminUser.setUsername("admin");
                adminUser.setEmail("admin@ceabien.gob.mx");
                // La contraseña será "admin123"
                adminUser.setPassword(passwordEncoder.encode("admin123"));
                adminUser.setActive(true);
                adminUser.setRegistrationDate(LocalDateTime.now());
                
                // Asignar ambos roles al administrador
                adminUser.setRoles(Set.of(adminRole, userRole));
                
                userRepository.save(adminUser);
                System.out.println("✅ Usuario de prueba creado: admin / admin123");
            }
        };
    }
}