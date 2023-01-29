import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField/textField";
import CheckBoxField from "../common/form/checkBoxField";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthErrors, logIn } from "../../store/users";

const LoginForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "",
        password: "",
        stayOn: false
    });
    const [errors, setErrors] = useState({});
    const logInError = useSelector(getAuthErrors());

    useEffect(() => {
        validate();
    }, [data]);

    const validateSchema = yup.object().shape({
        password: yup.string().required("Пароль обязателен для заполнения"),
        email: yup.string().required("email обязателен для заполнения")
    });

    const validate = () => {
        validateSchema
            .validate(data)
            .then(() => setErrors({}))
            .catch((err) => setErrors({ [err.path]: err.message }));

        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const redirect = history.location.state
            ? history.location.state.from.pathname
            : "/main";
        dispatch(logIn({ payload: data, redirect }));
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
            {logInError && (
                <p
                    style={{
                        fontSize: "13px",
                        fontWeight: "400",
                        color: "#8d0000",
                        marginBottom: "5px"
                    }}
                >
                    {logInError}
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
