import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavBar = () => {
    return (
        <div className="header">
            <div className="container_custom">
                <div className="header__inner">
                    <div className="header__logo">
                        <Link to="/">
                            <img className="logo__img" src={logo} alt="" />
                            <p>create music in collaboration</p>
                        </Link>
                    </div>
                    <nav className="nav">
                        <Link className="nav__link" to="/users">
                            пользователи
                        </Link>
                        <Link className="nav__link" to="/collaborations">
                            коллаборация
                        </Link>
                        <Link className="nav__link" to="/remix">
                            ремиксы
                        </Link>
                        <Link className="nav__link" to="/user">
                            мой профиль
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
