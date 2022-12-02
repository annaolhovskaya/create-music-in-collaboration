import React, { useState, useEffect } from "react";
import api from "../api";
import { getRandomNumberArray } from "../utils/getRandomNumberArray";
import Track from "./track";
import ContentWrapper from "./contentWrapper/contentWrapper";
import TrackCover from "./trackCover";
import BtnBlue from "./btnBlue";

const RemixList = () => {
    const [remix, setRemix] = useState();

    useEffect(() => {
        api.tracks.fetchAll().then((data) => setRemix(data));
    }, []);

    if (remix) {
        const randomNumberArray = getRandomNumberArray(remix.length, 0, 12);
        const randomRemix = randomNumberArray.map((number) => remix[number]);
        return (
            <ContentWrapper>
                {randomRemix.map((remix) => (
                    <div className="track__list__block" key={remix.title}>
                        <TrackCover />
                        <Track track={remix} />
                    </div>
                ))}
                <BtnBlue content="показать больше" />
            </ContentWrapper>
        );
    }
    return "Loading...";
};

export default RemixList;
