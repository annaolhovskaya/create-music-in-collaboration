export function validator(data, config) {
    const errors = {};
    function validate(validateMethod, data, config) {
        let statusValidate;
        switch (validateMethod) {
            case "isRequired": {
                if (typeof data === "boolean") {
                    statusValidate = !data;
                } else {
                    statusValidate = data.trim() === "";
                }
                break;
            }
            case "isEmail": {
                const emailRegExp = /^\S+@\S+\.\S+$/g;
                statusValidate = !emailRegExp.test(data);
                break;
            }
            // case "isNoSpace": {
            //     const spaceRegExp = /\s+/g;
            //     statusValidate = spaceRegExp.test(data);
            //     break;
            // }
            // case "isLanguage": {
            //     const languageRegExp = /^[a-zA-Z0-9!@#$%^&*\s]+$/g;
            //     statusValidate = !languageRegExp.test(data);
            //     break;
            // }
            case "isCapital": {
                const capitalRegExp = /[A-Z]+/g;
                statusValidate = !capitalRegExp.test(data);
                break;
            }
            case "isContainDigit": {
                const digitRegExp = /\d+/g;
                statusValidate = !digitRegExp.test(data);
                break;
            }
            case "isSpecialSymbol": {
                const symbolRegExp = /[!@#$%^&*]/g;
                statusValidate = !symbolRegExp.test(data);
                break;
            }
            case "min": {
                statusValidate = data.length < config.value;
                break;
            }

            default:
                break;
        }
        if (statusValidate) return config.message;
    }
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );
            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
}
