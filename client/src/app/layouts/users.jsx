import React from "react";
import { Redirect, useParams } from "react-router-dom";
import EditUserPage from "../components/page/editUserPage/editUserPage";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
import { useAuth } from "../hooks/useAuth";

const Users = () => {
    const { userId, edit } = useParams();
    const { currentUser } = useAuth();

    return (
        <>
            {userId ? (
                edit ? (
                    currentUser._id === userId ? (
                        <EditUserPage />
                    ) : (
                        <Redirect to={`/users/${currentUser._id}/edit`} />
                    )
                ) : (
                    <UserPage userId={userId} />
                )
            ) : (
                <UsersListPage />
            )}
        </>
    );
};

export default Users;
