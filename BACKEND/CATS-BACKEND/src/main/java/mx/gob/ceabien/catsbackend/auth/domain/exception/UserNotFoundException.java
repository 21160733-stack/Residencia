package mx.gob.ceabien.catsbackend.auth.domain.exception;

import mx.gob.ceabien.catsbackend.shared.exception.BaseException;
import org.springframework.http.HttpStatus;

public class UserNotFoundException extends BaseException {
    public UserNotFoundException(String username) {
        super("User not found: " + username, HttpStatus.NOT_FOUND, "AUTH-002");
    }
}