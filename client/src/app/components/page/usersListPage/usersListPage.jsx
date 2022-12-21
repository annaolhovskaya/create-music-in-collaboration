import React, { useState, useEffect } from "react";
import { paginate } from "../../../utils/paginate";
import BtnBlueSmall from "../../ui/btnBlueSmall/btnBlueSmall";
import GroupList from "../../common/groupList";
import Pagination from "../../common/pagination";
import User from "../../ui/user/user";
import stylesCSS from "./usersListPage.module.css";
import { useUsers } from "../../../hooks/useUsers";
import { useDaws } from "../../../hooks/useDaws";
import { useStyles } from "../../../hooks/useStyles";
import { useWorkFormats } from "../../../hooks/useWorkFormats";
import _ from "lodash";

const UsersListPage = () => {
    const pageSize = 7;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedStyle, setSelectedStyle] = useState();
    const [selectedDaw, setSelectedDaw] = useState();
    const [selectedFormat, setSelectedFormat] = useState();

    const { users } = useUsers();
    const { daws } = useDaws();
    const { styles } = useStyles();
    const { formats } = useWorkFormats();

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedStyle, selectedDaw, selectedFormat]);

    const handleStyleSelect = (itemSelect) => {
        setSelectedStyle(itemSelect);
    };

    const handleDawSelect = (itemSelect) => {
        setSelectedDaw(itemSelect);
    };

    const handleFormatSelect = (itemSelect) => {
        setSelectedFormat(itemSelect);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const getFilteredUsers = () => {
        return _.filter(users, function (user) {
            if (selectedDaw && selectedStyle && selectedFormat) {
                return (
                    user.daw.includes(selectedDaw._id) &&
                    user.styles.includes(selectedStyle._id) &&
                    user.workFormat.includes(selectedFormat._id)
                );
            } else if (selectedDaw && selectedStyle) {
                return (
                    user.daw.includes(selectedDaw._id) &&
                    user.styles.includes(selectedStyle._id)
                );
            } else if (selectedStyle && selectedFormat) {
                return (
                    user.styles.includes(selectedStyle._id) &&
                    user.workFormat.includes(selectedFormat._id)
                );
            } else if (selectedDaw && selectedFormat) {
                return (
                    user.daw.includes(selectedDaw._id) &&
                    user.workFormat.includes(selectedFormat._id)
                );
            } else if (selectedDaw) {
                return user.daw.includes(selectedDaw._id);
            } else if (selectedStyle) {
                return user.styles.includes(selectedStyle._id);
            } else if (selectedFormat) {
                return user.workFormat.includes(selectedFormat._id);
            }
            return user;
        });
    };

    const clearFilter = () => {
        setSelectedDaw();
        setSelectedStyle();
        setSelectedFormat();
    };

    if (users && styles && daws && formats) {
        const filteredUsers = getFilteredUsers();
        const count = filteredUsers.length;
        const userCrop = paginate(filteredUsers, currentPage, pageSize);

        return (
            <div className={stylesCSS.content}>
                <div className={stylesCSS.filter}>
                    <GroupList
                        title="стиль:"
                        items={styles}
                        selectedItem={selectedStyle}
                        onItemSelect={handleStyleSelect}
                    />
                    <div className={stylesCSS.filter__column}>
                        <GroupList
                            title="DAW:"
                            items={daws}
                            selectedItem={selectedDaw}
                            onItemSelect={handleDawSelect}
                        />
                        <GroupList
                            title="формат:"
                            items={formats}
                            selectedItem={selectedFormat}
                            onItemSelect={handleFormatSelect}
                        />
                        <button
                            className="btn btn-sm btn-primary"
                            onClick={clearFilter}
                        >
                            Сбросить фильтры
                        </button>
                    </div>
                </div>
                <div className={stylesCSS.all__content}>
                    {users &&
                        userCrop.map((user) => (
                            <div
                                className={stylesCSS.all__users__items}
                                key={user._id}
                            >
                                <User user={user} />
                                <BtnBlueSmall content="добавить в друзья" />
                            </div>
                        ))}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
};

export default UsersListPage;
