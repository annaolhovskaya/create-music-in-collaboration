import React, { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import api from "../api";
import Track from "./track";
import Pagination from "./pagination";
import TrackCover from "./trackCover";

const Collaborations = () => {
    const [collabs, setCollabs] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 11;

    useEffect(() => {
        api.tracks.fetchAll().then((data) => setCollabs(data));
    }, []);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    if (collabs) {
        const count = collabs.length;
        const collabCrop = paginate(collabs, currentPage, pageSize);
        return (
            <div className="all__content">
                {collabs &&
                    collabCrop.map((collab) => (
                        <div className="all_tracks" key={collab.title}>
                            <div className="track__list__block">
                                <TrackCover />
                                <Track track={collab} />
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

export default Collaborations;
