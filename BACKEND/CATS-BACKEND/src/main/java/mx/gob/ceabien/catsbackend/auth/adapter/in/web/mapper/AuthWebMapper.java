package mx.gob.ceabien.catsbackend.auth.adapter.in.web.mapper;

import mx.gob.ceabien.catsbackend.auth.adapter.in.web.dto.LoginRequestDto;
import mx.gob.ceabien.catsbackend.auth.adapter.in.web.dto.LoginResponseDto;
import mx.gob.ceabien.catsbackend.auth.application.command.LoginCommand;
import mx.gob.ceabien.catsbackend.auth.application.dto.AuthResult;
import org.springframework.stereotype.Component;

@Component
public class AuthWebMapper {

    public LoginCommand toCommand(LoginRequestDto request) {
        return new LoginCommand(
                request.username(),
                request.password()
        );
    }

    public LoginResponseDto toResponse(AuthResult result) {
        return new LoginResponseDto(
                result.token(),
                result.username(),
                result.email(),
                result.roles(),
                result.expiresAt()
        );
    }
}