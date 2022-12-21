import React, { useState, useEffect } from "react";
import { validator } from "../../../utils/validator";
import api from "../../../api";
import SelectField from "../form/selectField/selectField";
import TextAreaField from "../form/textAriaField/textAriaField";
import PropTypes from "prop-types";

const initialData = { userId: "", content: "" };

const AddCommentForm = ({ onSubmit }) => {
    const [data, setData] = useState(initialData);
    const [users, setUsers] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        userId: {
            isRequired: {
                message:
                    "Выберите пользователя от чьего имени будет оставлен комментарий"
            }
        },
        content: {
            isRequired: {
                message: "Пустой комментарий оставить нельзя"
            }
        }
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const clearForm = () => {
        setData(initialData);
        setErrors({});
    };

    const arrayOfUsers =
        users &&
        Object.keys(users).map((userId) => ({
            label: users[userId].name,
            value: users[userId]._id
        }));

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        onSubmit(data);
        console.log(data);
        clearForm();
    };

    return (
        <div>
            <h2>New comment</h2>
            <form onSubmit={handleSubmit}>
                <SelectField
                    onChange={handleChange}
                    options={arrayOfUsers}
                    name="userId"
                    value={data.userId}
                    defaultOption="Выберите пользователя"
                    error={errors.userId}
                />
                <TextAreaField
                    value={data.content}
                    onChange={handleChange}
                    name="content"
                    label="Сообщение"
                    error={errors.content}
                />
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary">Опубликовать</button>
                </div>
            </form>
        </div>
    );
};

AddCommentForm.propTypes = {
    onSubmit: PropTypes.func
};

export default AddCommentForm;
