package mx.gob.ceabien.catsbackend.auth.domain.exception;

import mx.gob.ceabien.catsbackend.shared.exception.BaseException;
import org.springframework.http.HttpStatus;

public class DuplicateUserException extends BaseException {
    public DuplicateUserException(String username) {
        super("User already exists with username: " + username, HttpStatus.CONFLICT, "AUTH-004");
    }
}