package mx.gob.ceabien.catsbackend.auth.adapter.in.web.dto;

import java.util.Date;
import java.util.List;

public record LoginResponseDto(
        String token,
        String username,
        String email,
        List<String> roles,
        Date expiresAt
) {}