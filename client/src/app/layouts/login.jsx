import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";

const Login = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );

    const toggleFormType = () => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {formType === "register" ? (
                        <>
                            <h4 className="mb-2 form__header">Регистрация</h4>
                            <RegisterForm />
                            <p>
                                Уже есть аккаунт?{" "}
                                <a
                                    role="button"
                                    className="anchor__auth"
                                    onClick={toggleFormType}
                                >
                                    Войди в ситему
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <h4 className="mb-2 form__header">
                                Вход в систему
                            </h4>
                            <LoginForm />
                            <p>
                                Еще нет аккаунта?{" "}
                                <a
                                    role="button"
                                    className="anchor__auth"
                                    onClick={toggleFormType}
                                >
                                    Зарегистрируйся
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
