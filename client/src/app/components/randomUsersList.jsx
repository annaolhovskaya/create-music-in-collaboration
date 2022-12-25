import React from "react";
import { getRandomNumberArray } from "../utils/getRandomNumberArray";
import User from "./ui/user/user";
import ContentWrapper from "./ui/contentWrapper/contentWrapper";
import BtnBlue from "./ui/btnBlue/btnBlue";
import { useHistory } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";

const RandomUsersList = () => {
    const history = useHistory();
    const { users } = useUsers();

    const handleClick = () => {
        history.push("/users");
    };

    const randomNumberArray = getRandomNumberArray(users.length, 0, 8);
    const randomUsers = randomNumberArray.map((number) => users[number]);

    return (
        <ContentWrapper>
            {randomUsers.map((user) => (
                <User key={user._id} user={user} />
            ))}
            <div onClick={handleClick}>
                <BtnBlue content="показать больше" />
            </div>
        </ContentWrapper>
    );
};

export default RandomUsersList;