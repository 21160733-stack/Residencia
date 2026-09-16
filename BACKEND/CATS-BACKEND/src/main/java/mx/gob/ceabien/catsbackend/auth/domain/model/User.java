package mx.gob.ceabien.catsbackend.auth.domain.model;

import java.time.LocalDateTime;
import java.util.Set;

public class User {
    private Long id;
    private String username;
    private String email;
    private String password;
    private boolean active;
    private Set<Role> roles;
    private LocalDateTime registrationDate;

    public User(Long id, String username, String email, String password, boolean active, Set<Role> roles, LocalDateTime registrationDate) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.active = active;
        this.roles = roles;
        this.registrationDate = registrationDate;
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public boolean isActive() {
        return active;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public LocalDateTime getRegistrationDate() {
        return registrationDate;
    }
}