package mx.gob.ceabien.catsbackend.auth.domain.exception;

import mx.gob.ceabien.catsbackend.shared.exception.BaseException;
import org.springframework.http.HttpStatus;

public class InvalidCredentialsException extends BaseException {
    public InvalidCredentialsException() {
        super("Invalid username or password", HttpStatus.UNAUTHORIZED, "AUTH-001");
    }
}