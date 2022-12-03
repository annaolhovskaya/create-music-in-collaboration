import React from "react";
import CollabList from "./collabList";
import RemixList from "./remixList";
import RandomUsersList from "./randomUsersList";

const Main = () => {
    return (
        <>
            <RandomUsersList />
            <CollabList />
            <RemixList />
        </>
    );
};

export default Main;
