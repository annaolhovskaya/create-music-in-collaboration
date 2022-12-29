import React, { useState } from "react";
// import stylesCSS from "./navProfile.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const NavProfile = () => {
    const { currentUser } = useAuth();
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };
    return (
        <>
            <div className="dropdown" onClick={toggleMenu}>
                <div
                    className={"btn d-flex align-items-center dropdown-toggle"}
                >
                    <div className="me-2">{currentUser.name}</div>
                    <img
                        src={currentUser.avatar}
                        className="img-responsive rounded-circle"
                        alt=""
                        height="60"
                    />
                </div>
                <div
                    className={"w-100 dropdown-menu " + (isOpen ? "show" : "")}
                >
                    <Link
                        to={`/users/${currentUser._id}`}
                        className="dropdown-item"
                    >
                        мой профиль
                    </Link>
                    <Link to="/logout" className="dropdown-item">
                        выйти из системы
                    </Link>
                </div>
            </div>
            {/* <Link className={stylesCSS.nav__link} to={`/users/${currentUser._id}`}>
            мой профиль
        </Link> */}
        </>
    );
};

export default NavProfile;
