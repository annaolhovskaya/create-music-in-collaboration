import React, { useState } from "react";
import PropTypes from "prop-types";
import stylesCSS from "./textField.module.css";

const TextField = ({
    label,
    name,
    value,
    type,
    error,
    onChange,
    disabled,
    ...rest
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    return (
        <div className="mb-2">
            <label htmlFor={name} className={stylesCSS.label__input}>
                {label}
            </label>
            <div
                className={
                    "input-group " +
                    (type === "password" ? "" : "has-validation")
                }
            >
                <input
                    type={showPassword ? "text" : type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className={getInputClasses()}
                    disabled={disabled}
                    {...rest}
                />
                {type === "password" && (
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={toggleShowPassword}
                    >
                        {showPassword ? (
                            <i className="bi bi-eye"></i>
                        ) : (
                            <i className="bi bi-eye-slash"></i>
                        )}
                    </button>
                )}

                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

TextField.defaultProps = {
    type: "text"
};

TextField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
};

export default TextField;
