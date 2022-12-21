import React from "react";
import { randomNumber } from "../../../utils/randomNumber";
import stylesCSS from "./trackCover.module.css";

const TrackCover = () => {
    return (
        <div className={stylesCSS.track__cover}>
            <img
                src={`https://picsum.photos/id/${randomNumber(1, 200)}/49/49`}
                className={stylesCSS.track__cover}
            />
        </div>
    );
};

export default TrackCover;
