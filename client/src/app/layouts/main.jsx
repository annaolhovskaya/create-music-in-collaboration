import React from "react";
import CollabList from "../components/ui/collabList/collabList";
import RandomUsersList from "../components/ui/randomUsersList";
import RemixList from "../components/ui/remixList";

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
