import React from "react";
import { getRandomNumberArray } from "../utils/getRandomNumberArray";
import PropTypes from "prop-types";
import ContentWrapper from "./contentWrapper/contentWrapper";
import BtnBlue from "./btnBlue";

const RandomItemList = ({ entity, amountItems, children }) => {
    if (entity) {
        const randomNumberArray = getRandomNumberArray(
            entity.length,
            0,
            amountItems
        );
        const randomItems = randomNumberArray.map((number) => entity[number]);

        return (
            <ContentWrapper>
                {
                    randomItems.map((item) => (
                        <React.Children key={item._id} />
                    ))
                    // <User key={user._id} user={user} />
                }
                <BtnBlue content="показать больше" />
            </ContentWrapper>
        );
    }
    return "Loading...";
};

RandomItemList.propTypes = {
    entity: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    amountItems: PropTypes.number.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default RandomItemList;
