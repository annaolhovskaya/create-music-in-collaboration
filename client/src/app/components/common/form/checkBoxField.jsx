import React from "react";
import PropTypes from "prop-types";

const CheckBoxField = ({ name, value, onChange, children, error }) => {
    const getInputClasses = () => {
        return "form-check-label" + (error ? " is-invalid" : "");
    };

    const handleChange = () => {
        // eslint-disable-next-line
        onChange({ name: name, value: !value });
    };
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={name}
                onChange={handleChange}
            />
            <label className={getInputClasses()} htmlFor={name}>
                {children}
            </label>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

CheckBoxField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    error: PropTypes.string
};

export default CheckBoxField;
