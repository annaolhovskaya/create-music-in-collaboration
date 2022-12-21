import React from "react";
import CollabList from "../components/ui/collabList/collabList";
import RemixList from "../components/remixList";
import RandomUsersList from "../components/randomUsersList";

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
