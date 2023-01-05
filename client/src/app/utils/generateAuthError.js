export function generateAuthError(message) {
    switch (message) {
        case "INVALID_PASSWORD": {
            return "Email или пароль введены не корректно!";
        }
        case "EMAIL_EXISTS": {
            return "Пользователь с таким email уже зарегистрирован!";
        }

        default:
            return "Слишком много попыток входа. Попробуйте позже.";
    }
}
