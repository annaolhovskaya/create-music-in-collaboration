import React, { useEffect, useState } from "react";
// import FileField from "../../common/form/fileField";
import RadioField from "../../common/form/radioField/radioField";
import api from "../../../api";
import TextField from "../../common/form/textField/textField";
import stylesCSS from "./uploadMixForm.module.css";
import FileField from "../../common/form/fileField";

const UploadMixForm = () => {
    const [formats, setFormats] = useState();
    // const [selectedFile, setSelectedFile] = useState();

    useEffect(() => {
        api.formats.fetchAll().then((data) => setFormats(data));
    }, []);

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
                    options={[
                        {
                            name: "collaboration",
                            value: formats.collaboration.name
                        },
                        {
                            name: "remix",
                            value: formats.remix.name
                        }
                    ]}
                    onChange={handleChange}
                />
            )}
            <FileField />
        </>
    );
};

export default UploadMixForm;
