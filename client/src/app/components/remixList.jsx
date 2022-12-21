import React, { useState, useEffect } from "react";
import api from "../api";
import { getRandomNumberArray } from "../utils/getRandomNumberArray";
import Track from "./ui/track/track";
import ContentWrapper from "./ui/contentWrapper/contentWrapper";
import TrackCover from "./ui/trackCover/trackCover";
import BtnBlue from "./ui/btnBlue/btnBlue";
import { useHistory } from "react-router-dom";

const RemixList = () => {
    const history = useHistory();
    const [remix, setRemix] = useState();

    useEffect(() => {
        api.tracks.fetchAll().then((data) => setRemix(data));
    }, []);

    const handleClick = () => {
        history.push("/remix");
    };

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
                <div onClick={handleClick}>
                    <BtnBlue content="показать больше" />
                </div>
            </ContentWrapper>
        );
    }
    return "Loading...";
};

export default RemixList;
