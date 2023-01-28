import React, { useEffect, useState } from "react";
import stylesCSS from "./trackList.module.css";
import PropTypes from "prop-types";
import { paginate } from "../../../utils/paginate";
import Pagination from "../../common/pagination";
import TrackCover from "../trackCover/trackCover";
import Track from "../track/track";
import TextField from "../../common/form/textField/textField";

const TrackList = ({ data }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    function filterData(data) {
        const filteredUsers = searchQuery
            ? data.filter(
                  (item) =>
                      item.author
                          .toLowerCase()
                          .indexOf(searchQuery.toLowerCase()) !== -1
              )
            : data;
        return filteredUsers;
    }

    const filteredData = filterData(data);

    const count = filteredData.length;
    const dataCrop = paginate(filteredData, currentPage, pageSize);

    const handleSearchQuery = (target) => {
        setSearchQuery(target.value);
    };

    return (
        <div className={stylesCSS.all__content}>
            <TextField
                type="text"
                placeholder="Поиск по автору..."
                name="searchQuery"
                onChange={handleSearchQuery}
                value={searchQuery}
            />
            {data &&
                dataCrop.map((item) => (
                    <div className={stylesCSS.all_tracks} key={item._id}>
                        <div className={stylesCSS.track__list__block}>
                            <TrackCover
                                cover={item.cover}
                                id={item._id}
                                albumId={item.album}
                            />
                            <Track track={item} remark={true} />
                        </div>
                    </div>
                ))}
            {filteredData.length === 0 && (
                <h5 className={stylesCSS.search}>Ничего не найдено...</h5>
            )}
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
};

TrackList.propTypes = {
    data: PropTypes.array
};

export default TrackList;
