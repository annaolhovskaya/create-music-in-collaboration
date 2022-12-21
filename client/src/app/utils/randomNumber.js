import _ from "lodash";

export function randomNumber(start, end) {
    const number = _.random(start, end);
    return number;
}
