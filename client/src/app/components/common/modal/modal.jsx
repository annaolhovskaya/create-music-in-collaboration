import React from "react";
import stylesCSS from "./modal.module.css";
import PropTypes from "prop-types";

const Modal = ({ active, setActive, children }) => {
    const handleActive = () => {
        setActive((prevState) => !prevState);
    };

    return (
        <div className={active ? stylesCSS.modal__active : stylesCSS.modal}>
            <div
                className={
                    active
                        ? stylesCSS.modal__content__active
                        : stylesCSS.modal__content
                }
                onClick={(e) => e.stopPropagation()}
            >
                <button className={stylesCSS.icon__settings}>
                    <i className="bi bi-x-lg" onClick={handleActive}></i>
                </button>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Modal;
