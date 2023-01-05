import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { getIsLoggedIn } from "../../../store/users";
import NavProfile from "../navProfile/navProfile";
import stylesCSS from "./navBar.module.css";

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());

    return (
        <div className={stylesCSS.header}>
            <div className={stylesCSS.container_custom}>
                <div className={stylesCSS.header__inner}>
                    <div className={stylesCSS.header__logo}>
                        <Link to="/main">
                            <img
                                className={stylesCSS.logo__img}
                                src={logo}
                                alt=""
                            />
                            <p>create music in collaboration</p>
                        </Link>
                    </div>
                    {isLoggedIn && (
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
                        </nav>
                    )}

                    {isLoggedIn ? (
                        <NavProfile />
                    ) : (
                        <nav className={stylesCSS.nav}>
                            <Link className={stylesCSS.nav__link} to="/login">
                                войти в систему
                            </Link>
                        </nav>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
