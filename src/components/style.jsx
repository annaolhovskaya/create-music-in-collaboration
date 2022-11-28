import React from "react";
import PropTypes from "prop-types";

const Style = ({ styles }) => {
    return (
        <div className="user__music__styles">
            {styles.map((style) => (
                <div className="music__styles__item" key={style._id}>
                    {style.name}
                </div>
            ))}
        </div>
    );
};

Style.propTypes = {
    styles: PropTypes.array.isRequired
};

export default Style;
