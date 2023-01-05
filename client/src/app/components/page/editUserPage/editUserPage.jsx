import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { validator } from "../../../utils/validator";
import TextField from "../../common/form/textField/textField";
import SelectField from "../../common/form/selectField/selectField";
import RadioField from "../../common/form/radioField/radioField";
import MultySelectField from "../../common/form/multySelectField/multySelectField";
import stylesCSS from "./editUserPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getStyles, getStylesLoadingStatus } from "../../../store/styles";
import { getDaws, getDawsLoadingStatus } from "../../../store/daws";
import {
    getWorkformats,
    getWorkformatsLoadingStatus
} from "../../../store/workformats";
import {
    getExperiences,
    getExperiencesLoadingStatus
} from "../../../store/experiences";
import { getCurrentUserData, updateUser } from "../../../store/users";

const EditUserPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();

    const experiences = useSelector(getExperiences());
    const experiencesLoading = useSelector(getExperiencesLoadingStatus());
    const experiencesList = transformDataList(experiences);

    const styles = useSelector(getStyles());
    const stylesLoading = useSelector(getStylesLoadingStatus());
    const stylesList = transformDataList(styles);

    const daws = useSelector(getDaws());
    const dawsLoading = useSelector(getDawsLoadingStatus());
    const dawsList = transformDataList(daws);

    const formats = useSelector(getWorkformats());
    const formatsLoading = useSelector(getWorkformatsLoadingStatus());
    const formatsList = transformDataList(formats);

    const currentUser = useSelector(getCurrentUserData());

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (
            !experiencesLoading &&
            !stylesLoading &&
            !dawsLoading &&
            !formatsLoading &&
            currentUser &&
            !data
        ) {
            setData({
                ...currentUser,
                daw: getEntitiesTransformListByIds(currentUser.daw, daws),
                styles: getEntitiesTransformListByIds(
                    currentUser.styles,
                    styles
                ),
                workFormat: getEntitiesTransformListByIds(
                    currentUser.workFormat,
                    formats
                )
            });
        }
    }, [
        experiencesLoading,
        stylesLoading,
        dawsLoading,
        formatsLoading,
        currentUser,
        data
    ]);

    useEffect(() => {
        if (data && isLoading) {
            setIsLoading(false);
        }
    }, [data]);

    function getEntitiesTransformListByIds(entitiesIds, entities) {
        const dawsArray = [];
        for (const entityId of entitiesIds) {
            for (const entity of entities) {
                if (entity._id === entityId) {
                    dawsArray.push(entity);
                    break;
                }
            }
        }
        return dawsArray.map((qual) => ({
            label: qual.name,
            value: qual._id
        }));
    }

    function getArrayId(data) {
        return data.map((item) => item.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(
            updateUser({
                ...data,
                daw: getArrayId(data.daw),
                styles: getArrayId(data.styles),
                workFormat: getArrayId(data.workFormat)
            })
        );
    };

    function transformDataList(data) {
        return data.map((item) => ({ label: item.name, value: item._id }));
    }

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
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {!isLoading ? (
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
                                    options={experiencesList}
                                    error={errors.experience}
                                />
                                <MultySelectField
                                    label="Стили музыки:"
                                    name="styles"
                                    defaultValue={data.styles}
                                    options={stylesList}
                                    onChange={handleChange}
                                    error={errors.styles}
                                />
                                <MultySelectField
                                    label="DAW:"
                                    name="daw"
                                    defaultValue={data.daw}
                                    options={dawsList}
                                    onChange={handleChange}
                                    error={errors.daws}
                                />
                                <MultySelectField
                                    label="Формат работы:"
                                    name="workFormat"
                                    defaultValue={data.workFormat}
                                    options={formatsList}
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
