import React, { useState, useEffect } from "react";
import api from "../api";
import { getRandomNumberArray } from "../utils/getRandomNumberArray";
import Track from "./track";
import ContentWrapper from "./contentWrapper/contentWrapper";
import TrackCover from "./trackCover";
import BtnBlue from "./btnBlue";

const CollabList = () => {
    const [collabs, setCollabs] = useState();

    useEffect(() => {
        api.tracks.fetchAll().then((data) => setCollabs(data));
    }, []);

    if (collabs) {
        const randomNumberArray = getRandomNumberArray(collabs.length, 0, 12);
        const randomCollabs = randomNumberArray.map(
            (number) => collabs[number]
        );
        return (
            <ContentWrapper>
                {randomCollabs.map((collab) => (
                    <div className="track__list__block" key={collab.title}>
                        <TrackCover />
                        <Track track={collab} />
                    </div>
                ))}
                <BtnBlue content="показать больше" />
            </ContentWrapper>
        );
    }
    return "Loading...";
};

export default CollabList;
