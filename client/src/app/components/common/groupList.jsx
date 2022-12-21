import React from "react";
// import stylesCSS from "./groupList.module.css";
import PropTypes from "prop-types";

const GroupList = ({ title, items, selectedItem, onItemSelect }) => {
    return (
        <div className="mx-auto mb-3">
            <p className="text-white mb-1">{title}</p>
            <ul className="list-group">
                {Object.keys(items).map((item) => (
                    <li
                        className={
                            "list-group-item" +
                            (selectedItem === items[item] ? " active" : "")
                        }
                        key={items[item]._id}
                        role="button"
                        onClick={() => onItemSelect(items[item])}
                    >
                        {items[item].name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

GroupList.propTypes = {
    title: PropTypes.string,
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    selectedItem: PropTypes.object,
    onItemSelect: PropTypes.func
};

export default GroupList;
