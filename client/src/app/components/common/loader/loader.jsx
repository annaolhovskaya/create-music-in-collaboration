import React from "react";
import stylesCSS from "./loader.module.css";

const Loader = () => {
    return (
        <div className={stylesCSS.container}>
            <div className={stylesCSS.lds__roller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;
