import React, { useState, useEffect } from "react";
import { paginate } from "../../../utils/paginate";
import api from "../../../api";
import Track from "../../ui/track/track";
import Pagination from "../../common/pagination";
import TrackCover from "../../ui/trackCover/trackCover";
import stylesCSS from "./collaborationsPage.module.css";

const CollaborationsPage = () => {
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
            <div className={stylesCSS.all__content}>
                {collabs &&
                    collabCrop.map((collab) => (
                        <div
                            className={stylesCSS.all_tracks}
                            key={collab.title}
                        >
                            <div className={stylesCSS.track__list__block}>
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

export default CollaborationsPage;
