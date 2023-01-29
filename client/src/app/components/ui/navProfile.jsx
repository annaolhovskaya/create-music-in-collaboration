import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserData } from "../../store/users";

const NavProfile = () => {
    const currentUser = useSelector(getCurrentUserData());
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };

    if (!currentUser) return "Loading...";
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
        </>
    );
};

export default NavProfile;
