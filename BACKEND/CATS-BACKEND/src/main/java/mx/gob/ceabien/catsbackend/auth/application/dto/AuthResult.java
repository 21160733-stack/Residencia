package mx.gob.ceabien.catsbackend.auth.application.dto;

import java.util.Date;
import java.util.List;

public record AuthResult(
        String token,
        String username,
        String email,
        List<String> roles,
        Date expiresAt
) {}