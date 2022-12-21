import React from "react";
import stylesCSS from "./selectField.module.css";
import PropTypes from "prop-types";

const SelectField = ({
    label,
    name,
    value,
    onChange,
    options,
    defaultOption,
    error
}) => {
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.values(options)
            : options;

    const getInputClasses = () => {
        return "form-select" + (error ? " is-invalid" : "");
    };

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    return (
        <div className="mb-2">
            <label htmlFor={name} className={stylesCSS.label__input}>
                {label}
            </label>
            <select
                className={getInputClasses()}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {optionsArray.length > 0 &&
                    optionsArray.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

SelectField.defaultProps = {
    defaultOption: "Выбрать..."
};

SelectField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    defaultOption: PropTypes.string,
    error: PropTypes.string
};

export default SelectField;
