import React from "react";
import PropTypes from "prop-types";
import stylesCSS from "./textAriaField.module.css";

const TextAreaField = ({ label, name, value, error, onChange }) => {
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    return (
        <div className="mb-2">
            <label htmlFor={name} className={stylesCSS.label__input}>
                {label}
            </label>
            <div className="input-group has-validation">
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className={getInputClasses()}
                />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

TextAreaField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func
};

export default TextAreaField;
