import React, { useState } from "react";
import ContentWrapper from "../../ui/contentWrapper/contentWrapper";
import PropTypes from "prop-types";
import Modal from "../../common/modal/modal";
// import FileField from "../../common/form/fileField/fileField";
// import RadioField from "../../common/form/radioField/radioField";
import UploadMixForm from "../../ui/uploadMixForm/uploadMixForm";
import UserCard from "../../ui/userCard/userCard";
import Comments from "../../ui/comments/comments";
import { useUsers } from "../../../hooks/useUsers";

const UserPage = ({ userId }) => {
    const { getUser } = useUsers();
    const user = getUser(userId);

    const [modalActive, setModalActive] = useState(false);

    if (user) {
        return (
            <>
                <UserCard user={user} setActive={setModalActive} />

                <ContentWrapper />
                <Comments />
                <Modal active={modalActive} setActive={setModalActive}>
                    <UploadMixForm />
                    {/* <FileField />
                    <RadioField
                        options={[
                            {
                                name: formats.collaboration.name,
                                value: formats.collaboration._id
                            },
                            {
                                name: formats.remix.name,
                                value: formats.remix._id
                            }
                        ]}
                    /> */}
                </Modal>
            </>
        );
    } else {
        return <h1>Loading...</h1>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
