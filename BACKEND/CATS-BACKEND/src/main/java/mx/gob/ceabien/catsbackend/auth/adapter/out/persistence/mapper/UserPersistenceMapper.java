package mx.gob.ceabien.catsbackend.auth.adapter.out.persistence.mapper;

import mx.gob.ceabien.catsbackend.auth.adapter.out.persistence.entity.RoleEntity;
import mx.gob.ceabien.catsbackend.auth.adapter.out.persistence.entity.UserEntity;
import mx.gob.ceabien.catsbackend.auth.domain.model.Role;
import mx.gob.ceabien.catsbackend.auth.domain.model.User;
import org.springframework.stereotype.Component;

import java.util.Set;
import java.util.stream.Collectors;

@Component
public class UserPersistenceMapper {

    public User toDomainEntity(UserEntity entity) {
        if (entity == null) {
            return null;
        }

        Set<Role> roles = entity.getRoles().stream()
                .map(this::toDomainRole)
                .collect(Collectors.toSet());

        return new User(
                entity.getId(),
                entity.getUsername(),
                entity.getEmail(),
                entity.getPassword(),
                entity.getActive(),
                roles,
                entity.getRegistrationDate()
        );
    }

    public UserEntity toJpaEntity(User domain) {
        if (domain == null) {
            return null;
        }

        Set<RoleEntity> roles = domain.getRoles().stream()
                .map(this::toJpaRole)
                .collect(Collectors.toSet());

        return new UserEntity(
                domain.getId(),
                domain.getUsername(),
                domain.getEmail(),
                domain.getPassword(),
                domain.isActive(),
                domain.getRegistrationDate(),
                roles
        );
    }

    private Role toDomainRole(RoleEntity entity) {
        if (entity == null) {
            return null;
        }
        return new Role(entity.getId(), entity.getName(), entity.getDescription());
    }

    private RoleEntity toJpaRole(Role domain) {
        if (domain == null) {
            return null;
        }
        return new RoleEntity(domain.getId(), domain.getName(), domain.getDescription());
    }
}