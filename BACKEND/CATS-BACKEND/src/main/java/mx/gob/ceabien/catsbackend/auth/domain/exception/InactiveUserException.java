package mx.gob.ceabien.catsbackend.auth.domain.exception;

import mx.gob.ceabien.catsbackend.shared.exception.BaseException;
import org.springframework.http.HttpStatus;

public class InactiveUserException extends BaseException {
    public InactiveUserException(String username) {
        super("User account is inactive: " + username, HttpStatus.FORBIDDEN, "AUTH-003");
    }
}