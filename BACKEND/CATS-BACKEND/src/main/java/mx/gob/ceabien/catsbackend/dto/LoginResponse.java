package mx.gob.ceabien.catsbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LoginResponse {

    private boolean exitoso;
    private String mensaje;
    private Long id;
    private String usuario;
    private String correo;
}