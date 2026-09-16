package mx.gob.ceabien.catsbackend.auth.adapter.out.persistence.adapter;

import lombok.RequiredArgsConstructor;
import mx.gob.ceabien.catsbackend.auth.adapter.out.persistence.mapper.UserPersistenceMapper;
import mx.gob.ceabien.catsbackend.auth.adapter.out.persistence.repository.JpaUserRepository;
import mx.gob.ceabien.catsbackend.auth.domain.model.User;
import mx.gob.ceabien.catsbackend.auth.domain.port.out.UserPersistencePort;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@RequiredArgsConstructor
public class UserPersistenceAdapter implements UserPersistencePort {

    private final JpaUserRepository userRepository;
    private final UserPersistenceMapper userMapper;

    @Override
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username)
                .map(userMapper::toDomainEntity);
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email)
                .map(userMapper::toDomainEntity);
    }

    @Override
    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }
}