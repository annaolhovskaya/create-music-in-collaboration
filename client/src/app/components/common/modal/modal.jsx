import React, { useEffect } from "react";
import stylesCSS from "./modal.module.css";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const Modal = ({ type, active, setActive, currentUserId, children }) => {
    const { userId } = useParams();

    useEffect(() => {
        if (type === "offer" && currentUserId !== userId) {
            setActive(false);
        }
    }, [currentUserId, userId]);

    return (
        <div
            className={stylesCSS.modal + (active ? " " + stylesCSS.active : "")}
        >
            <div
                className={
                    stylesCSS.modal__content +
                    (active ? " " + stylesCSS.active : "")
                }
                onClick={(e) => e.stopPropagation()}
            >
                <button className={stylesCSS.icon__settings}>
                    <i
                        className="bi bi-x-lg"
                        onClick={() => setActive((prevState) => !prevState)}
                    ></i>
                </button>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    type: PropTypes.string,
    active: PropTypes.bool,
    setActive: PropTypes.func,
    currentUserId: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Modal;
