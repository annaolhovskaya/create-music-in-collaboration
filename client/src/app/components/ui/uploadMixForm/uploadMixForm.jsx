import React, { useState } from "react";
// import FileField from "../../common/form/fileField";
import RadioField from "../../common/form/radioField/radioField";
import TextField from "../../common/form/textField/textField";
import stylesCSS from "./uploadMixForm.module.css";
import FileField from "../../common/form/fileField";
import { useSelector } from "react-redux";
import { getWorkformats } from "../../../store/workformats";

const UploadMixForm = () => {
    // const [selectedFile, setSelectedFile] = useState();

    const formats = useSelector(getWorkformats());

    const [data, setData] = useState({
        author: "",
        title: "",
        link: "",
        userId: "",
        album: "collaboration"
    });

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const isValid = validate();
    //     if (!isValid) return;
    //     const { experience, styles, daws, formats } = data;
    //     console.log({
    //         ...data,
    //         experience: getExperienceById(experience),
    //         styles: getStyles(styles),
    //         daws: getDaws(daws),
    //         formats: getFormats(formats)
    //     });
    // };

    return (
        <>
            <h5 className={stylesCSS.title}>Загрузка mp-3 файла</h5>
            <TextField
                label="Автор"
                name="author"
                value={data.author}
                onChange={handleChange}
            />
            <TextField
                label="Название"
                name="title"
                value={data.title}
                onChange={handleChange}
            />
            {formats && (
                <RadioField
                    label="Альбом"
                    name="album"
                    value={data.album}
                    options={formats.map((f) => {
                        return { name: f.name, value: f.name };
                    })}
                    onChange={handleChange}
                />
            )}
            <FileField />
        </>
    );
};

export default UploadMixForm;
