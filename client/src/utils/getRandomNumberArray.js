import _ from "lodash";

export function getRandomNumberArray(number, start, end) {
    return _.shuffle(_.range(0, number)).slice(start, end);
}
