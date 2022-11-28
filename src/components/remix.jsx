import React, { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import api from "../api";
import Track from "./track";
import Pagination from "./pagination";
import TrackCover from "./trackCover";

const Remix = () => {
    const [remix, setRemix] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 11;

    useEffect(() => {
        api.tracks.fetchAll().then((data) => setRemix(data));
    }, []);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    if (remix) {
        const count = remix.length;
        const remixCrop = paginate(remix, currentPage, pageSize);
        return (
            <div className="all__content">
                {remix &&
                    remixCrop.map((remix) => (
                        <div className="all_tracks" key={remix.title}>
                            <div className="track__list__block">
                                <TrackCover />
                                <Track track={remix} />
                                {/* <div className="buttons__column">
                                <button className="btn__small btn--blue">
                                    добавить в друзья
                                </button>
                            </div> */}
                            </div>
                        </div>
                    ))}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        );
    }
};

export default Remix;
