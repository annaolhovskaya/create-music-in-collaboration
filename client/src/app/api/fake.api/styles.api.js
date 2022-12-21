export const stylesObject = {
    house: {
        _id: "4a90735d-1155-43f3-aa06-d20629c03101",
        name: "house"
    },
    progressive: {
        _id: "34a65a16-c408-4691-96d7-e650918ffc78",
        name: "progressive"
    },
    techno: {
        _id: "63c1fe98-0490-4ee5-86d7-77025d364bba",
        name: "techno"
    },
    melodicTechno: {
        _id: "bbf5ae28-6c46-43ee-8363-d912a504b0ef",
        name: "melodic techno"
    },
    trance: {
        _id: "44a8a93b-5262-4702-98f4-0708c54bcfbf",
        name: "trance"
    },
    midtempo: {
        _id: "35c97a13-0a32-46e4-90bb-19e9663b369b",
        name: "midtempo"
    },
    ambient: {
        _id: "60ccf23d-345b-456f-bdac-065f311d5c48",
        name: "ambient"
    },
    chillout: {
        _id: "9fd80e00-1f27-4734-9530-b60c53cb8c59",
        name: "chillout"
    },
    dnb: {
        _id: "adee6749-1f88-4cb8-b6f4-5b0905a3ba46",
        name: "drum&bass"
    },
    industrial: {
        _id: "7c278aea-45cd-45f3-abe3-94b7037219fe",
        name: "industrial"
    },
    trap: {
        _id: "672b6675-3934-4b1f-83dd-ddde8cdc3908",
        name: "trap"
    },
    dubstep: {
        _id: "e4e5e121-9743-49fd-8277-f340249f21dd",
        name: "dubstep"
    },
    futureBass: {
        _id: "5e53aa26-7c4a-4574-8d38-31f131d52fb4",
        name: "future bass"
    },
    bassHouse: {
        _id: "a26dc812-8a5f-466c-8ebc-3606746f27f4",
        name: "bass house"
    },
    loFi: {
        _id: "b9ee8531-703f-4167-96b7-864f2ac49c51",
        name: "lo-fi"
    },
    edm: {
        _id: "814020cd-fe2f-4af6-89b4-9e36e27a8c08",
        name: "EDM"
    },
    organic: {
        _id: "a28d0398-4900-472c-84d8-993c85b8e783",
        name: "organic"
    }
};

export const styles = [
    {
        _id: "4a90735d-1155-43f3-aa06-d20629c03101",
        name: "house"
    },
    {
        _id: "34a65a16-c408-4691-96d7-e650918ffc78",
        name: "progressive"
    },
    {
        _id: "63c1fe98-0490-4ee5-86d7-77025d364bba",
        name: "techno"
    },
    {
        _id: "bbf5ae28-6c46-43ee-8363-d912a504b0ef",
        name: "melodic techno"
    },
    {
        _id: "44a8a93b-5262-4702-98f4-0708c54bcfbf",
        name: "trance"
    },
    {
        _id: "35c97a13-0a32-46e4-90bb-19e9663b369b",
        name: "midtempo"
    },
    {
        _id: "60ccf23d-345b-456f-bdac-065f311d5c48",
        name: "ambient"
    },
    {
        _id: "9fd80e00-1f27-4734-9530-b60c53cb8c59",
        name: "chillout"
    },
    {
        _id: "adee6749-1f88-4cb8-b6f4-5b0905a3ba46",
        name: "drum&bass"
    },
    {
        _id: "7c278aea-45cd-45f3-abe3-94b7037219fe",
        name: "industrial"
    },
    {
        _id: "672b6675-3934-4b1f-83dd-ddde8cdc3908",
        name: "trap"
    },
    {
        _id: "e4e5e121-9743-49fd-8277-f340249f21dd",
        name: "dubstep"
    },
    {
        _id: "5e53aa26-7c4a-4574-8d38-31f131d52fb4",
        name: "future bass"
    },
    {
        _id: "a26dc812-8a5f-466c-8ebc-3606746f27f4",
        name: "bass house"
    },
    {
        _id: "b9ee8531-703f-4167-96b7-864f2ac49c51",
        name: "lo-fi"
    },
    {
        _id: "814020cd-fe2f-4af6-89b4-9e36e27a8c08",
        name: "EDM"
    },
    {
        _id: "a28d0398-4900-472c-84d8-993c85b8e783",
        name: "organic"
    }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(stylesObject);
        }, 1000);
    });

export default {
    fetchAll
};
