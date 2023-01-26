import React, { useState } from "react";
// import FileField from "../../common/form/fileField";
import RadioField from "../../common/form/radioField/radioField";
import TextField from "../../common/form/textField/textField";
import stylesCSS from "./uploadMixForm.module.css";
// import FileField from "../../common/form/fileField";
import { useDispatch, useSelector } from "react-redux";
import { getWorkformats } from "../../../store/workformats";
import PropTypes from "prop-types";
import { getAlbumIdByName } from "../../../store/albums";
import { uploadTrack } from "../../../store/tracks";
// import axios from "axios";

// const TRACKS_DIR_PATH = 'tracks/';
// const SERVER_URI = "http://localhost:8080/";
const REMIX = "remixes";
const COLLAB = "collaborations";

const UploadMixForm = ({ nickname }) => {
    const dispatch = useDispatch();
    const [trackData, setTrackData] = useState({
        author: nickname,
        title: "",
        file: "",
        album: "collaboration"
    });

    const collabAlbumId = useSelector(getAlbumIdByName(REMIX));
    const remixAlbumId = useSelector(getAlbumIdByName(COLLAB));

    const [isValueSet, setIsValueSet] = useState(false);
    const formats = useSelector(getWorkformats());

    const handleSubmit = async (event) => {
        event.preventDefault();

        const trackUpload = {
            ...trackData,
            album: trackData.album === "remix" ? remixAlbumId : collabAlbumId
        };
        console.log("uploadTrack", trackUpload);

        dispatch(uploadTrack(trackUpload));

        // const req = await axios.post(SERVER_URI + "api/uploadTrack", formData, {
        //     headers: {
        //         "Content-Type": "multipart/form-data"
        //     }
        // });

        // console.log("req ", req);
    };

    const handleChange = (target) => {
        setTrackData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleChangeFile = ({ target }) => {
        if (target.files) {
            setTrackData({ ...trackData, [target.name]: target.files[0] });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h5 className={stylesCSS.title}>Загрузка mp-3 файла</h5>
            <TextField
                label="Автор"
                name="author"
                value={trackData.author}
                onChange={handleChange}
                disabled={true}
            />
            <TextField
                label="Название"
                name="title"
                value={trackData.title}
                onChange={handleChange}
            />
            {formats && (
                <RadioField
                    label="Альбом"
                    name="album"
                    value={trackData.album}
                    options={formats.map((f) => {
                        return { name: f.name, value: f.name };
                    })}
                    onChange={handleChange}
                />
            )}
            {/* <FileField /> */}
            <div className="input-group">
                <input
                    type="file"
                    name="file"
                    accept=".mp3"
                    className="form-control"
                    id="inputGroupFile04"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                    onClick={() => setIsValueSet(true)}
                    onChange={handleChangeFile}
                />
                <button
                    className="btn btn-primary"
                    type="submit"
                    id="inputGroupFileAddon04"
                    disabled={!isValueSet}
                >
                    Отправить
                </button>
            </div>
        </form>
    );
};

UploadMixForm.propTypes = {
    nickname: PropTypes.string
};

export default UploadMixForm;
