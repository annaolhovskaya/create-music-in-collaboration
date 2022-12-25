import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField/textField";
// import { validator } from "../../utils/validator";
import CheckBoxField from "../common/form/checkBoxField";
import * as yup from "yup";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        stayOn: false
    });
    const [errors, setErrors] = useState({});
    const [enterError, setEnterError] = useState(null);
    const { logIn } = useAuth();
    const history = useHistory();

    useEffect(() => {
        validate();
    }, [data]);

    const validateSchema = yup.object().shape({
        password: yup.string().required("Пароль обязателен для заполнения"),
        email: yup.string().required("email обязателен для заполнения")
    });

    // const validatorConfig = {
    //     email: {
    //         isRequired: {
    //             message: "email обязателен для заполнения"
    //         },
    //         isEmail: {
    //             message: "email введен не корректо"
    //         }
    //     },
    //     password: {
    //         isRequired: {
    //             message: "Пароль обязателен для заполнения"
    //         },
    //         isNoSpace: {
    //             message: "Пароль не может содержать пробелы"
    //         },
    //         isLanguage: {
    //             message:
    //                 "Пароль может содержать буквы только латинского алфавита"
    //         },
    //         isCapital: {
    //             message: "Пароль должен содержать хотя бы одну заглавную букву"
    //         },
    //         isContainDigit: {
    //             message: "Пароль должен содержать хотя бы одну цифру"
    //         },
    //         isSpecialSymbol: {
    //             message:
    //                 "Пароль должен содержать хотя бы один из специальных символов !@#$%^&*"
    //         },
    //         min: {
    //             message: "Пароль должен состоять минимум из 8 символов",
    //             value: 8
    //         }
    //     }
    // };

    const validate = () => {
        // const errors = validator(data, validatorConfig);
        validateSchema
            .validate(data)
            .then(() => setErrors({}))
            .catch((err) => setErrors({ [err.path]: err.message }));
        // setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
        setEnterError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
        try {
            await logIn(data);
            history.push("/");
        } catch (error) {
            setEnterError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="E-mail"
                name="email"
                value={data.email}
                error={errors.email}
                onChange={handleChange}
                autoFocus
            />
            <TextField
                label="Пароль"
                name="password"
                value={data.password}
                type="password"
                error={errors.password}
                onChange={handleChange}
            />
            <CheckBoxField
                name="stayOn"
                value={data.stayOn}
                onChange={handleChange}
            >
                Оставаться в системе
            </CheckBoxField>
            {enterError && (
                <p
                    style={{
                        fontSize: "13px",
                        fontWeight: "400",
                        color: "#8d0000",
                        marginBottom: "5px"
                    }}
                >
                    {enterError}
                </p>
            )}
            <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary w-100 mx-auto my-3"
            >
                Submit
            </button>
        </form>
    );
};

export default LoginForm;
