package mx.gob.ceabien.catsbackend.auth.domain.port.out;

import mx.gob.ceabien.catsbackend.auth.domain.model.User;

import java.util.Optional;

public interface UserPersistencePort {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    boolean existsByUsername(String username);
}