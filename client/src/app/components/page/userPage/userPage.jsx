import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../../common/modal/modal";
// import FileField from "../../common/form/fileField/fileField";
// import RadioField from "../../common/form/radioField/radioField";
import UploadMixForm from "../../ui/uploadMixForm/uploadMixForm";
import UserCard from "../../ui/userCard/userCard";
import Comments from "../../ui/comments/comments";
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
                    <UploadMixForm nickname={user.nickname} userId={user._id} />
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
        return <Loader />;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
