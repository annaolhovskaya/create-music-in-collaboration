import React, { useState, useEffect } from "react";
import { getRandomNumberArray } from "../utils/getRandomNumberArray";
import User from "./user/user";
import api from "../api";
import ContentWrapper from "./contentWrapper/contentWrapper";
import BtnBlue from "./btnBlue";
// import Pagination from "./pagination";
// import { paginate } from "../utils/paginate";
// import PropTypes from "prop-types";

const UsersList = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    if (users) {
        const randomNumberArray = getRandomNumberArray(users.length, 0, 8);
        const randomUsers = randomNumberArray.map((number) => users[number]);
        // const count = randomUsers.length;
        // const pageSize = 3;
        // const [currentPage, setCurrentPage] = useState(1);

        // const cropUser = paginate(randomUsers, currentPage, pageSize);

        // const handlePageChange = (pageIndex) => {
        //     setCurrentPage(pageIndex);
        // };

        return (
            <ContentWrapper>
                {randomUsers.map((user) => (
                    <User key={user._id} user={user} />
                ))}
                {/* <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                /> */}
                <BtnBlue content="показать больше" />
            </ContentWrapper>
        );
    }
    return "Loading...";
};

// UsersList.propTypes = {
//     users: PropTypes.array.isRequired
// };

export default UsersList;
