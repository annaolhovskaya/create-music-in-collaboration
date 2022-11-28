import React, { useState, useEffect } from "react";
import api from "../api";
import { paginate } from "../utils/paginate";
import BtnBlueSmall from "./btnBlueSmall";
import GroupList from "./groupList";
import Pagination from "./pagination";
import User from "./user";

const Users = () => {
    const pageSize = 7;
    const [users, setUsers] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [styles, setStyles] = useState();
    const [daws, setDaws] = useState();
    const [formats, setFormats] = useState();
    const [selectedStyle, setSelectedStyle] = useState();
    const [selectedDaw, setSelectedDaw] = useState();
    // const [itemSelect, setItemSelect] = useState([]);

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
        api.styles.fetchAll().then((data) => setStyles(data));
        api.daws.fetchAll().then((data) => setDaws(data));
        api.formats.fetchAll().then((data) => setFormats(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
        // if (selectedStyle) setItemSelect(itemSelect.push("style"));
        // if (selectedDaw) setItemSelect(itemSelect.push("daw"));
    }, [selectedStyle, selectedDaw]);

    const handleStyleSelect = (itemSelect) => {
        setSelectedStyle(itemSelect);
    };

    const handleDawSelect = (itemSelect) => {
        setSelectedDaw(itemSelect);
    };

    // useEffect(() => {
    //     api.styles.fetchAll().then((data) => setStyles(data));
    // }, []);

    // useEffect(() => {
    //     api.daws.fetchAll().then((data) => setDaws(data));
    // }, []);

    // useEffect(()=>{},[])

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const getFilteredUsers = () => {
        if (selectedStyle) {
            return users.filter((user) =>
                Object.values(user.styles).includes(selectedStyle)
            );
        } else if (selectedDaw) {
            return users.filter((user) =>
                Object.values(user.daw).includes(selectedDaw)
            );
        } else {
            return users;
        }
    };

    if (users && styles && daws && formats) {
        const filteredUsers = getFilteredUsers();

        const count = filteredUsers.length;
        // const count = users.length;
        const userCrop = paginate(filteredUsers, currentPage, pageSize);
        return (
            <div className="content">
                <div className="filter">
                    <GroupList
                        title="стиль:"
                        items={styles}
                        selectedItem={selectedStyle}
                        onItemSelect={handleStyleSelect}
                    />
                    <div className="filter__column">
                        <GroupList
                            title="DAW:"
                            items={daws}
                            selectedItem={selectedDaw}
                            onItemSelect={handleDawSelect}
                        />
                        <GroupList title="формат:" items={formats} />
                    </div>
                </div>
                <div className="all__content">
                    {users &&
                        userCrop.map((user) => (
                            <div className="all__users__items" key={user._id}>
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

export default Users;
