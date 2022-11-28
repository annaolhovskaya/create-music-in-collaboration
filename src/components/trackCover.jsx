import React from "react";
import { randomNumber } from "../utils/randomNumber";

const TrackCover = () => {
    return (
        <div className="track__cover">
            <img
                src={`https://picsum.photos/id/${randomNumber(1, 200)}/49/49`}
                className="track__cover"
            />
        </div>
    );
};

export default TrackCover;
