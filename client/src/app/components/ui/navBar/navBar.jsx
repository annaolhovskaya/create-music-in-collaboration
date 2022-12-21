import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import stylesCSS from "./navBar.module.css";

const NavBar = () => {
    return (
        <div className={stylesCSS.header}>
            <div className={stylesCSS.container_custom}>
                <div className={stylesCSS.header__inner}>
                    <div className={stylesCSS.header__logo}>
                        <Link to="/">
                            <img
                                className={stylesCSS.logo__img}
                                src={logo}
                                alt=""
                            />
                            <p>create music in collaboration</p>
                        </Link>
                    </div>
                    <nav className={stylesCSS.nav}>
                        <Link className={stylesCSS.nav__link} to="/users">
                            пользователи
                        </Link>
                        <Link
                            className={stylesCSS.nav__link}
                            to="/collaborations"
                        >
                            коллаборация
                        </Link>
                        <Link className={stylesCSS.nav__link} to="/remix">
                            ремиксы
                        </Link>
                        <Link className={stylesCSS.nav__link} to="/user">
                            мой профиль
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
