package mx.gob.ceabien.catsbackend.service;

import mx.gob.ceabien.catsbackend.dto.LoginRequest;
import mx.gob.ceabien.catsbackend.dto.LoginResponse;
import mx.gob.ceabien.catsbackend.entity.Usuario;
import mx.gob.ceabien.catsbackend.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UsuarioRepository usuarioRepository;

    public AuthService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public LoginResponse login(LoginRequest request) {

        Usuario usuario = usuarioRepository
                .findByUsuario(request.getUsuario())
                .orElse(null);

        if (usuario == null) {
            return new LoginResponse(
                    false,
                    "Usuario o contraseña incorrectos",
                    null,
                    null,
                    null
            );
        }

        if (!usuario.getActivo()) {
            return new LoginResponse(
                    false,
                    "El usuario está inactivo",
                    null,
                    null,
                    null
            );
        }

        if (!usuario.getPassword().equals(request.getPassword())) {
            return new LoginResponse(
                    false,
                    "Usuario o contraseña incorrectos",
                    null,
                    null,
                    null
            );
        }

        return new LoginResponse(
                true,
                "Inicio de sesión correcto",
                usuario.getId(),
                usuario.getUsuario(),
                usuario.getCorreo()
        );
    }
}