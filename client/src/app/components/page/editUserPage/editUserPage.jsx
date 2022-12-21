import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { validator } from "../../../utils/validator";
import api from "../../../api";
import TextField from "../../common/form/textField/textField";
import SelectField from "../../common/form/selectField/selectField";
import RadioField from "../../common/form/radioField/radioField";
import MultySelectField from "../../common/form/multySelectField/multySelectField";
import { standardizationObject } from "../../../utils/standardizationObject";
import stylesCSS from "./editUserPage.module.css";
// import BackHistoryButton from "../../common/backButton";

const EditUserPage = () => {
    const { userId } = useParams();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        name: "",
        nickname: "",
        email: "",
        city: "",
        country: "",
        experience: "",
        styles: [],
        daw: [],
        workFormat: [],
        soundCloud: "",
        sex: ""
    });
    const [experience, setExperience] = useState([]);
    const [styles, setStyles] = useState([]);
    const [daws, setDaws] = useState([]);
    const [formats, setFormats] = useState([]);
    const [errors, setErrors] = useState({});

    const getExperienceById = (id) => {
        for (const elem of experience) {
            if (elem.value === id) {
                return { _id: elem.value, name: elem.label };
            }
        }
    };

    const getStyles = (elements) => {
        return getEntities(elements, styles);
    };

    const getDaws = (elements) => {
        return getEntities(elements, daws);
    };

    const getFormats = (elements) => {
        return getEntities(elements, formats);
    };

    function getEntities(elements, entities) {
        const entitiesArray = [];
        for (const elem of elements) {
            for (const entity in entities) {
                if (elem.value === entities[entity].value) {
                    entitiesArray.push({
                        _id: entities[entity].value,
                        name: entities[entity].label
                    });
                }
            }
        }
        return entitiesArray;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const { experience, styles, daw, formats } = data;
        api.users
            .update(userId, {
                ...data,
                experience: getExperienceById(experience),
                styles: getStyles(styles),
                daw: getDaws(daw),
                formats: getFormats(formats)
            })
            .then((data) => history.push(`/users/${data._id}`));
        console.log({
            ...data,
            experience: getExperienceById(experience),
            styles: getStyles(styles),
            daw: getDaws(daw),
            formats: getFormats(formats)
        });
    };

    const transformData = (data) => {
        return data.map((item) => ({ label: item.name, value: item._id }));
    };

    useEffect(() => {
        setIsLoading(true);
        api.users
            .getById(userId)
            .then(({ experience, styles, daw, workFormat, ...data }) => {
                setData((prevState) => ({
                    ...prevState,
                    ...data,
                    experience: experience._id,
                    styles: transformData(styles),
                    daw: transformData(daw),
                    workFormat: transformData(workFormat)
                }));
            });
        api.experience.fetchAll().then((data) => {
            const experienceList = standardizationObject(data);
            setExperience(experienceList);
        });
        api.styles.fetchAll().then((data) => {
            const stylesList = standardizationObject(data);
            setStyles(stylesList);
        });
        api.daws.fetchAll().then((data) => {
            const dawsList = standardizationObject(data);
            setDaws(dawsList);
        });
        api.formats.fetchAll().then((data) => {
            const formatsList = standardizationObject(data);
            setFormats(formatsList);
        });
    }, []);

    useEffect(() => {
        if (data._id) setIsLoading(false);
    }, [data]);

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Введите ваше имя"
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            const form = e.target.form;
            const indexField = Array.prototype.indexOf.call(form, e.target);
            form.elements[indexField + 1].focus();
        }
    };

    return (
        <div className="container mt-5">
            {/* <BackHistoryButton /> */}
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {!isLoading && Object.keys(styles).length > 0 ? (
                        <>
                            <button className={stylesCSS.icon__settings}>
                                <i
                                    className="bi bi-x-lg"
                                    onClick={() => history.goBack()}
                                ></i>
                            </button>
                            <h4 className="mb-2 form__header">
                                Редактирование профиля
                            </h4>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Имя"
                                    name="name"
                                    value={data.name}
                                    onChange={handleChange}
                                    error={errors.name}
                                    onKeyDown={handleKeyDown}
                                    autoFocus
                                />
                                <TextField
                                    label="Nickname"
                                    name="nickname"
                                    value={data.nickname}
                                    onChange={handleChange}
                                    error={errors.nickname}
                                    onKeyDown={handleKeyDown}
                                />
                                <TextField
                                    label="E-mail"
                                    name="email"
                                    value={data.email}
                                    error={errors.email}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                />
                                <TextField
                                    label="Город"
                                    name="city"
                                    value={data.city}
                                    error={errors.email}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                />
                                <TextField
                                    label="Страна"
                                    name="country"
                                    value={data.country}
                                    error={errors.email}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                />
                                <SelectField
                                    label="Опыт создания электронной музыки"
                                    name="experience"
                                    value={data.experience}
                                    onChange={handleChange}
                                    options={experience}
                                    error={errors.experience}
                                />
                                <MultySelectField
                                    label="Стили музыки:"
                                    name="styles"
                                    defaultValue={data.styles}
                                    options={styles}
                                    onChange={handleChange}
                                    error={errors.styles}
                                />
                                <MultySelectField
                                    label="DAW:"
                                    name="daws"
                                    defaultValue={data.daw}
                                    options={daws}
                                    onChange={handleChange}
                                    error={errors.daws}
                                />
                                <MultySelectField
                                    label="Формат работы:"
                                    name="formats"
                                    defaultValue={data.workFormat}
                                    options={formats}
                                    onChange={handleChange}
                                    error={errors.formats}
                                />
                                <TextField
                                    label="Ссылка на аккаунт SoundCloud"
                                    name="soundCloud"
                                    value={data.soundCloud}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                />
                                <RadioField
                                    label="Ваш пол:"
                                    name="sex"
                                    value={data.sex}
                                    onChange={handleChange}
                                    options={[
                                        { name: "Male", value: "male" },
                                        { name: "Female", value: "female" },
                                        { name: "Other", value: "other" }
                                    ]}
                                />
                                <button
                                    type="submit"
                                    disabled={!isValid}
                                    className="btn btn-primary w-100 mx-auto"
                                >
                                    Обновить
                                </button>
                            </form>
                        </>
                    ) : (
                        "Loading..."
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditUserPage;
