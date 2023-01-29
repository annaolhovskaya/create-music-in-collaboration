import React from "react";
import { getRandomNumberArray } from "../../utils/getRandomNumberArray";
import User from "./user/user";
import ContentWrapper from "./contentWrapper/contentWrapper";
import BtnBlue from "./btnBlue/btnBlue";
import { useSelector } from "react-redux";
import { getUsers, getUsersLoadingStatus } from "../../store/users";
import Loader from "../common/loader/loader";

const RandomUsersList = () => {
    const users = useSelector(getUsers());
    const isLoading = useSelector(getUsersLoadingStatus());

    if (isLoading) return <Loader />;

    const randomNumberArray = getRandomNumberArray(users.length, 0, 8);
    const randomUsers = randomNumberArray.map((number) => users[number]);

    return (
        <ContentWrapper>
            {randomUsers.map((user) => (
                <User key={user._id} userId={user._id} />
            ))}
            <BtnBlue content="показать больше" type="link" to="/users" />
        </ContentWrapper>
    );
};

export default RandomUsersList;
