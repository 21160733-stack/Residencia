package mx.gob.ceabien.catsbackend.auth.domain.port.in;

import mx.gob.ceabien.catsbackend.auth.application.command.LoginCommand;
import mx.gob.ceabien.catsbackend.auth.application.dto.AuthResult;

public interface AuthUseCase {
    AuthResult login(LoginCommand command);
}