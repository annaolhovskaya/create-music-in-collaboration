import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField/textField";
// import { validator } from "../../utils/validator";
import SelectField from "../common/form/selectField/selectField";
import RadioField from "../common/form/radioField/radioField";
import MultySelectField from "../common/form/multySelectField/multySelectField";
import CheckBoxField from "../common/form/checkBoxField";
import * as yup from "yup";
import { useExperience } from "../../hooks/useExperience";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getStyles } from "../../store/styles";
import { getDaws } from "../../store/daws";
import { getWorkformats } from "../../store/workformats";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        nickname: "",
        city: "",
        country: "",
        experience: "",
        styles: [],
        daw: [],
        workFormat: [],
        soundCloud: "",
        sex: "male",
        license: false
    });

    function transformData(data) {
        return data.map((item) => ({ label: item.name, value: item._id }));
    }

    const { experiences } = useExperience();
    const experiencesList = transformData(experiences);

    const styles = useSelector(getStyles());
    const stylesList = transformData(styles);

    const daws = useSelector(getDaws());
    const dawsList = transformData(daws);

    const formats = useSelector(getWorkformats());
    const formatsList = transformData(formats);

    const [errors, setErrors] = useState({});

    const { signUp } = useAuth();
    const history = useHistory();

    useEffect(() => {
        validate();
    }, [data]);

    const validateSchema = yup.object().shape({
        license: yup
            .boolean()
            .required(
                "Сервис доступен только после подтверждения лицензионного соглашения"
            )
            .oneOf(
                [true],
                "Сервис доступен только после подтверждения лицензионного соглашения"
            ),
        workFormat: yup
            .array()
            .test(
                "required",
                "Выберите предпочтительный формат работы",
                (value) => value.length > 0
            ),
        daw: yup
            .array()
            .test(
                "required",
                "Выберите ваши рабочие DAW",
                (value) => value.length > 0
            ),
        styles: yup
            .array()
            .test(
                "required",
                "Выберите стили вашей музыки",
                (value) => value.length > 0
            ),
        experience: yup
            .string()
            .required(
                "Обязательно укажите ваш опыт создания электронной музыки"
            ),
        country: yup
            .string()
            .required("Обязательно укажите из какой вы страны"),
        city: yup.string().required("Обязательно укажите из какого вы города"),
        nickname: yup.string().required("Обязательно укажите ваш nickname"),
        name: yup.string().required("Обязательно укажите ваше имя"),
        password: yup
            .string()
            .required("Пароль обязателен для заполнения")
            .matches(/(?=.*[A-Z])/, "Пароль должен содержать заглавную букву")
            .matches(/(?=.*[0-9])/, "Пароль должен содержать цифру")
            .matches(
                /(?=.*[!@#$%^&*])/,
                "Пароль должен содержать специальный символ !@#$%^&*"
            )
            .matches(
                /(?=.{8,})/,
                "Пароль должен состоять минимум из 8 символов"
            ),
        email: yup
            .string()
            .required("email обязателен для заполнения")
            .email("email введен не корректо")
    });

    // const validatorConfig = {
    //     email: {
    //         isRequired: {
    //             message: "email обязателен для заполнения"
    //         },
    //         isEmail: {
    //             message: "email введен не корректо"
    //         }
    //     },
    //     password: {
    //         isRequired: {
    //             message: "Пароль обязателен для заполнения"
    //         },
    //         isNoSpace: {
    //             message: "Пароль не может содержать пробелы"
    //         },
    //         isLanguage: {
    //             message:
    //                 "Пароль может содержать буквы только латинского алфавита"
    //         },
    //         isCapital: {
    //             message: "Пароль должен содержать хотя бы одну заглавную букву"
    //         },
    //         isContainDigit: {
    //             message: "Пароль должен содержать хотя бы одну цифру"
    //         },
    //         isSpecialSymbol: {
    //             message:
    //                 "Пароль должен содержать хотя бы один из специальных символов !@#$%^&*"
    //         },
    //         min: {
    //             message: "Пароль должен состоять минимум из 8 символов",
    //             value: 8
    //         }
    //     },
    //     experience: {
    //         isRequired: {
    //             message:
    //                 "Обязательно укажите ваш опыт создания электронной музыки"
    //         }
    //     },
    //     license: {
    //         isRequired: {
    //             message:
    //                 "Сервис доступен только после подтверждения лицензионного соглашения"
    //         }
    //     }
    // };

    const validate = () => {
        // const errors = validator(data, validatorConfig);
        validateSchema
            .validate(data)
            .then(() => setErrors({}))
            .catch((err) => setErrors({ [err.path]: err.message }));

        // setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    // function getEntities(elements, entities) {
    //     const entitiesArray = [];
    //     for (const elem of elements) {
    //         for (const entity in entities) {
    //             if (elem.value === entities[entity].value) {
    //                 entitiesArray.push({
    //                     _id: entities[entity].value,
    //                     name: entities[entity].label
    //                 });
    //             }
    //         }
    //     }
    //     return entitiesArray;
    // }

    function getArrayIds(data) {
        return data.map((item) => item.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;

        const newData = {
            ...data,
            styles: getArrayIds(data.styles),
            daw: getArrayIds(data.daw),
            workFormat: getArrayIds(data.workFormat)
        };

        try {
            await signUp(newData);
            history.push("/main");
        } catch (error) {
            console.log(error);
            setErrors(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="E-mail"
                name="email"
                value={data.email}
                error={errors.email}
                onChange={handleChange}
                autoFocus
            />
            <TextField
                label="Пароль"
                name="password"
                value={data.password}
                type="password"
                error={errors.password}
                onChange={handleChange}
            />
            <TextField
                label="Имя"
                name="name"
                value={data.name}
                error={errors.name}
                onChange={handleChange}
            />
            <TextField
                label="Nickname"
                name="nickname"
                value={data.nickname}
                error={errors.nickname}
                onChange={handleChange}
            />
            <TextField
                label="Город"
                name="city"
                value={data.city}
                error={errors.city}
                onChange={handleChange}
            />
            <TextField
                label="Страна"
                name="country"
                value={data.country}
                error={errors.country}
                onChange={handleChange}
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
                options={stylesList}
                onChange={handleChange}
                error={errors.styles}
            />
            <MultySelectField
                label="DAW:"
                name="daw"
                options={dawsList}
                onChange={handleChange}
                error={errors.daw}
            />
            <MultySelectField
                label="Формат работы:"
                name="workFormat"
                options={formatsList}
                onChange={handleChange}
                error={errors.workFormat}
            />
            <TextField
                label="Ссылка на аккаунт SoundCloud"
                name="soundCloud"
                value={data.soundCloud}
                onChange={handleChange}
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
            <CheckBoxField
                name="license"
                value={data.license}
                onChange={handleChange}
                error={errors.license}
            >
                Подтвердить <a>лицензионное соглашение</a>
            </CheckBoxField>
            <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary w-100 mx-auto my-3"
            >
                Submit
            </button>
        </form>
    );
};

export default RegisterForm;
