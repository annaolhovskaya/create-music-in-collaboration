import React, { useEffect, useState } from "react";
import RadioField from "../../common/form/radioField/radioField";
import TextField from "../../common/form/textField/textField";
import stylesCSS from "./uploadTrackForm.module.css";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getWorkformats } from "../../../store/workformats";
import { getAlbumIdByName } from "../../../store/albums";
import { getCurrentUserData } from "../../../store/users";
import { uploadTrack } from "../../../store/tracks";

const REMIX = "remixes";
const COLLAB = "collaborations";

const UploadTrackForm = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUserData());
    const [trackData, setTrackData] = useState({
        userId: currentUser._id,
        author: currentUser.nickname,
        title: "",
        file: "",
        album: "collaboration"
    });
    const [errors, setErrors] = useState({});
    const [isValueSet, setIsValueSet] = useState({
        disabled: false,
        sended: false
    });

    useEffect(() => {
        validate();
    }, [trackData]);

    const collabAlbumId = useSelector(getAlbumIdByName(COLLAB));
    const remixAlbumId = useSelector(getAlbumIdByName(REMIX));
    const formats = useSelector(getWorkformats());

    const validateSchema = yup.object().shape({
        title: yup.string().required("Название обязательно для заполнения")
    });

    const validate = () => {
        validateSchema
            .validate(trackData)
            .then(() => setErrors({}))
            .catch((err) => setErrors({ [err.path]: err.message }));

        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = validate();
        if (!isValid) return;

        const trackNote = {
            ...trackData,
            album: trackData.album === "remix" ? remixAlbumId : collabAlbumId
        };

        delete trackNote.file;

        const formData = new FormData();
        formData.append("file", trackData.file);

        dispatch(uploadTrack({ formData, trackNote }));
        setIsValueSet((prevState) => !prevState);
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
                error={errors.title}
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
            <div className="input-group">
                <input
                    type="file"
                    name="file"
                    accept=".mp3"
                    className="form-control"
                    id="inputGroupFile04"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                    onClick={() => setIsValueSet((prevState) => !prevState)}
                    onChange={handleChangeFile}
                />
                <button
                    className="btn btn-primary"
                    type="submit"
                    id="inputGroupFileAddon04"
                    disabled={!isValid}
                >
                    Отправить
                </button>
            </div>
            {isValueSet.sended && (
                <h6 className={stylesCSS.success}>Файл успешно загружен!</h6>
            )}
        </form>
    );
};

export default UploadTrackForm;
