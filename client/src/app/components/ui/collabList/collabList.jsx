import React, { useState, useEffect } from "react";
import api from "../../../api";
import { getRandomNumberArray } from "../../../utils/getRandomNumberArray";
import Track from "../track/track";
import ContentWrapper from "../contentWrapper/contentWrapper";
import TrackCover from "../trackCover/trackCover";
import BtnBlue from "../btnBlue/btnBlue";
import { useHistory } from "react-router-dom";
import stylesCSS from "./collabList.module.css";

const CollabList = () => {
    const history = useHistory();
    const [collabs, setCollabs] = useState();

    useEffect(() => {
        api.tracks.fetchAll().then((data) => setCollabs(data));
    }, []);

    const handleClick = () => {
        history.push("/collaborations");
    };

    if (collabs) {
        const randomNumberArray = getRandomNumberArray(collabs.length, 0, 12);
        const randomCollabs = randomNumberArray.map(
            (number) => collabs[number]
        );
        return (
            <ContentWrapper>
                {randomCollabs.map((collab) => (
                    <div
                        className={stylesCSS.track__list__block}
                        key={collab.title}
                    >
                        <TrackCover />
                        <Track track={collab} />
                    </div>
                ))}
                <BtnBlue content="показать больше" onClick={handleClick} />
            </ContentWrapper>
        );
    }
    return "Loading...";
};

export default CollabList;
