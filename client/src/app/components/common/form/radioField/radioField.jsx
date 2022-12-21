import React from "react";
import PropTypes from "prop-types";
import stylesCSS from "./radioField.module.css";

const RadioField = ({ label, name, value, options, onChange }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="mb-2">
            <label className={stylesCSS.label__input}>{label}</label>
            <div>
                {options.map((option) => (
                    <div
                        className="form-check form-check-inline"
                        key={option.name + "_" + option.value}
                    >
                        <input
                            className="form-check-input"
                            type="radio"
                            name={name}
                            id={option.name + "_" + option.value}
                            checked={option.value === value}
                            value={option.value}
                            onChange={handleChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={option.name + "_" + option.value}
                        >
                            {option.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

RadioField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func
};

export default RadioField;
