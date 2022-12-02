import React from "react";
import CollabList from "./collabList";
import RemixList from "./remixList";
import UsersList from "./usersList";

const Main = () => {
    return (
        <>
            <UsersList />
            <CollabList />
            <RemixList />
        </>
    );
};

export default Main;
