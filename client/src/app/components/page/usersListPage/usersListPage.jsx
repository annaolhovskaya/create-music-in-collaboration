import React, { useState, useEffect } from "react";
import { paginate } from "../../../utils/paginate";
import GroupList from "../../common/groupList";
import Pagination from "../../common/pagination";
import User from "../../ui/user/user";
import stylesCSS from "./usersListPage.module.css";
import { useSelector } from "react-redux";
import { getStyles, getStylesLoadingStatus } from "../../../store/styles";
import { getDaws, getDawsLoadingStatus } from "../../../store/daws";
import {
    getWorkformats,
    getWorkformatsLoadingStatus
} from "../../../store/workformats";
import { getCurrentUserId, getUsers } from "../../../store/users";
import TextField from "../../common/form/textField/textField";

const UsersListPage = () => {
    const pageSize = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedStyle, setSelectedStyle] = useState();
    const [selectedDaw, setSelectedDaw] = useState();
    const [selectedFormat, setSelectedFormat] = useState();
    const [searchQuery, setSearchQuery] = useState("");

    const users = useSelector(getUsers());
    const currentUserId = useSelector(getCurrentUserId());

    const daws = useSelector(getDaws());
    const dawsLoading = useSelector(getDawsLoadingStatus());

    const styles = useSelector(getStyles());
    const stylesLoading = useSelector(getStylesLoadingStatus());

    const formats = useSelector(getWorkformats());
    const formatsLoading = useSelector(getWorkformatsLoadingStatus());

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedStyle, selectedDaw, selectedFormat, searchQuery]);

    const handleStyleSelect = (itemSelect) => {
        if (searchQuery !== "") setSearchQuery("");
        setSelectedStyle(itemSelect);
    };

    const handleDawSelect = (itemSelect) => {
        if (searchQuery !== "") setSearchQuery("");
        setSelectedDaw(itemSelect);
    };

    const handleFormatSelect = (itemSelect) => {
        if (searchQuery !== "") setSearchQuery("");
        setSelectedFormat(itemSelect);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleSearchQuery = (target) => {
        setSelectedStyle(undefined);
        setSelectedDaw(undefined);
        setSelectedFormat(undefined);
        setSearchQuery(target.value);
    };

    const getFilteredUsers = () => {
        const filtrationParams = [];
        if (selectedStyle) {
            filtrationParams.push((data) =>
                data.styles.includes(selectedStyle._id)
            );
        }
        if (selectedDaw) {
            filtrationParams.push((data) => data.daw.includes(selectedDaw._id));
        }
        if (selectedFormat) {
            filtrationParams.push((data) =>
                data.workFormat.includes(selectedFormat._id)
            );
        }

        return users.filter((user) =>
            filtrationParams.length > 0
                ? filtrationParams.every((param) => param(user))
                : user
        );
    };

    function filterUsers(data) {
        const filteredUsers = searchQuery
            ? data.filter(
                  (user) =>
                      user.name
                          .toLowerCase()
                          .indexOf(searchQuery.toLowerCase()) !== -1 ||
                      user.nickname
                          .toLowerCase()
                          .indexOf(searchQuery.toLowerCase()) !== -1
              )
            : selectedDaw || selectedFormat || selectedStyle
            ? getFilteredUsers()
            : data;
        return filteredUsers.filter((user) => user._id !== currentUserId);
    }

    const filteredUsers = filterUsers(users);

    const count = filteredUsers.length;
    const userCrop = paginate(filteredUsers, currentPage, pageSize);

    const clearFilter = () => {
        setSelectedDaw();
        setSelectedStyle();
        setSelectedFormat();
    };

    return (
        <div className={stylesCSS.content}>
            <div className={stylesCSS.filter}>
                {styles && !stylesLoading && (
                    <GroupList
                        title="стиль:"
                        items={styles}
                        selectedItem={selectedStyle}
                        onItemSelect={handleStyleSelect}
                    />
                )}
                <div className={stylesCSS.filter__column}>
                    {daws && !dawsLoading && (
                        <GroupList
                            title="DAW:"
                            items={daws}
                            selectedItem={selectedDaw}
                            onItemSelect={handleDawSelect}
                        />
                    )}
                    {formats && !formatsLoading && (
                        <GroupList
                            title="формат:"
                            items={formats}
                            selectedItem={selectedFormat}
                            onItemSelect={handleFormatSelect}
                        />
                    )}
                    <button
                        className={stylesCSS.btn__blue__small}
                        onClick={clearFilter}
                    >
                        Сбросить фильтры
                    </button>
                </div>
            </div>

            <div className={stylesCSS.all__content}>
                <div className={stylesCSS.search}>
                    <TextField
                        type="text"
                        placeholder="Поиск по имени..."
                        name="searchQuery"
                        onChange={handleSearchQuery}
                        value={searchQuery}
                    />
                </div>
                {userCrop.map((user) => (
                    <div className={stylesCSS.all__users__items} key={user._id}>
                        <User userId={user._id} />
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
};

export default UsersListPage;
