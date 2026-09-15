package mx.gob.ceabien.catsbackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import mx.gob.ceabien.catsbackend.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByUsuario(String usuario);

    Optional<Usuario> findByCorreo(String correo);
}