import React, { useMemo } from "react";
import stylesCSS from "./randomTrackList.module.css";
import ContentWrapper from "../contentWrapper/contentWrapper";
import { getRandomNumberArray } from "../../../utils/getRandomNumberArray";
import TrackCover from "../trackCover/trackCover";
import Track from "../track/track";
import BtnBlue from "../btnBlue/btnBlue";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getTracksLoadingStatus } from "../../../store/tracks";
import Loader from "../../common/loader/loader";

const RandomTrackList = ({ data }) => {
    const isLoading = useSelector(getTracksLoadingStatus());
    const memo = true;
    const randomNumberArray = useMemo(
        () => getRandomNumberArray(data.length, 0, 12),
        [memo]
    );
    const randomData = randomNumberArray.map((number) => data[number]);

    if (isLoading) return <Loader />;

    return (
        <ContentWrapper>
            {randomData.map((item) => (
                <div className={stylesCSS.track__list__block} key={item._id}>
                    <TrackCover
                        id={item._id}
                        cover={item.cover}
                        albumId={item.album}
                    />
                    <Track track={item} remark={true} />
                </div>
            ))}
            <BtnBlue
                content="показать больше"
                type="link"
                to="/collaborations"
            />
        </ContentWrapper>
    );
};

RandomTrackList.propTypes = {
    data: PropTypes.array
};

export default RandomTrackList;
