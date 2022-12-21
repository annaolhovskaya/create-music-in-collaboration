import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import stylesCSS from "./multySelectField.module.css";

const MultySelectField = ({
    label,
    name,
    defaultValue,
    options,
    onChange,
    error
}) => {
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.values(options)
            : options;

    const handleChange = (value) => {
        // eslint-disable-next-line
        onChange({ name: name, value });
    };

    return (
        <div className="mb-2">
            <label htmlFor={name} className={stylesCSS.label__input}>
                {label}
            </label>
            <Select
                closeMenuOnSelect={false}
                isMulti
                name={name}
                options={optionsArray}
                defaultValue={defaultValue}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChange}
                styles={{
                    control: (baseStyles) => ({
                        ...baseStyles,
                        backgroundColor: "transparent"
                    }),
                    multiValue: (baseStyles) => ({
                        ...baseStyles,
                        backgroundColor: "rgba(24, 255, 255, 0.35)"
                    }),
                    placeholder: (baseStyles) => ({
                        ...baseStyles,
                        color: "#464646"
                    }),
                    menu: (baseStyles) => ({
                        ...baseStyles,
                        backgroundColor: "#ae7ef5"
                    }),
                    option: (baseStyles) => ({
                        ...baseStyles,
                        cursor: "pointer"
                    })
                }}
            />
            {error && <div className={stylesCSS.error}>{error}</div>}
        </div>
    );
};

MultySelectField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    defaultValue: PropTypes.array,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default MultySelectField;
