import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../../common/modal/modal";
import UploadTrackForm from "../../ui/uploadTrackForm/uploadTrackForm";
import UserCard from "../../ui/userCard/userCard";
import Comments from "../../ui/comments";
import { useSelector } from "react-redux";
import { getUserById } from "../../../store/users";
import Loader from "../../common/loader/loader";
import UserAudioContent from "../../ui/userAudioContent/userAudioContent";

const UserPage = ({ userId }) => {
    const user = useSelector(getUserById(userId));
    const [modalActive, setModalActive] = useState(false);

    if (user) {
        return (
            <>
                <UserCard user={user} setActive={setModalActive} />
                <UserAudioContent />
                <Comments />
                <Modal active={modalActive} setActive={setModalActive}>
                    <UploadTrackForm />
                </Modal>
            </>
        );
    } else {
        return <Loader />;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
