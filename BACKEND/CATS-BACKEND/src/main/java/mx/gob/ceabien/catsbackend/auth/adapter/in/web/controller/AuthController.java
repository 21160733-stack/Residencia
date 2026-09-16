package mx.gob.ceabien.catsbackend.auth.adapter.in.web.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import mx.gob.ceabien.catsbackend.auth.adapter.in.web.dto.LoginRequestDto;
import mx.gob.ceabien.catsbackend.auth.adapter.in.web.dto.LoginResponseDto;
import mx.gob.ceabien.catsbackend.auth.adapter.in.web.mapper.AuthWebMapper;
import mx.gob.ceabien.catsbackend.auth.application.command.LoginCommand;
import mx.gob.ceabien.catsbackend.auth.application.dto.AuthResult;
import mx.gob.ceabien.catsbackend.auth.domain.port.in.AuthUseCase;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthUseCase authUseCase;
    private final AuthWebMapper webMapper;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@Valid @RequestBody LoginRequestDto request) {
        LoginCommand command = webMapper.toCommand(request);
        AuthResult result = authUseCase.login(command);
        LoginResponseDto response = webMapper.toResponse(result);
        
        return ResponseEntity.ok(response);
    }
}