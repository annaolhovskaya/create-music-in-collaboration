import React from "react";
import stylesCSS from "./startPage.module.css";

const StartPage = () => {
    return (
        <div className={stylesCSS.container__start}>
            <img
                src={process.env.PUBLIC_URL + "/img/start_img.png"}
                className={stylesCSS.start__img}
            />
            <h1 className={stylesCSS.title}>
                Приветствуем тебя, дорогой друг!
            </h1>
            <p className={stylesCSS.paragraph}>
                Ты крутой продюссер, пишешь электронную музыку и готов
                заколлабиться с не менее крутым музыкантом? Всегда хотел
                поработать над ремиксом трека другого продюссера или предложить
                свой трек для ремикса? Скорее регистрируйся и находи партнеров
                для совместного творчества!
            </p>
        </div>
    );
};

export default StartPage;
