import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useAuth } from "../../../hooks/useAuth";
import NavProfile from "../navProfile/navProfile";
import stylesCSS from "./navBar.module.css";

const NavBar = () => {
    const { currentUser } = useAuth();
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
                    {currentUser && (
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

                    {currentUser ? (
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
