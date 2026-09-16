package mx.gob.ceabien.catsbackend.auth.application.command;

import lombok.RequiredArgsConstructor;
import mx.gob.ceabien.catsbackend.auth.application.dto.AuthResult;
import mx.gob.ceabien.catsbackend.auth.domain.exception.InactiveUserException;
import mx.gob.ceabien.catsbackend.auth.domain.exception.InvalidCredentialsException;
import mx.gob.ceabien.catsbackend.auth.domain.model.Role;
import mx.gob.ceabien.catsbackend.auth.domain.model.User;
import mx.gob.ceabien.catsbackend.auth.domain.port.in.AuthUseCase;
import mx.gob.ceabien.catsbackend.auth.domain.port.out.PasswordEncoderPort;
import mx.gob.ceabien.catsbackend.auth.domain.port.out.UserPersistencePort;
import mx.gob.ceabien.catsbackend.shared.security.JwtProvider;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LoginCommandHandler implements AuthUseCase {

    private final UserPersistencePort userPersistencePort;
    private final PasswordEncoderPort passwordEncoderPort;
    private final JwtProvider jwtProvider;

    @Override
    @Transactional(readOnly = true)
    public AuthResult login(LoginCommand command) {
        User user = userPersistencePort.findByUsername(command.username())
                .orElseThrow(InvalidCredentialsException::new);

        if (!user.isActive()) throw new InactiveUserException(user.getUsername());

        if (!passwordEncoderPort.matches(command.password(), user.getPassword())) {
            throw new InvalidCredentialsException();
        }

        List<String> roles = user.getRoles().stream()
                .map(Role::getName)
                .collect(Collectors.toList());

        String token = jwtProvider.generateToken(user.getUsername(), roles);
        
        Date expiresAt = new Date(System.currentTimeMillis() + jwtProvider.getExpirationMs());

        return new AuthResult(
                token,
                user.getUsername(),
                user.getEmail(),
                roles,
                expiresAt
        );
    }
}