export const formatsObject = {
    collaboration: {
        _id: "96765671-7a14-4a2f-9aaf-9e9e495b28e4",
        name: "collaboration"
    },
    remix: {
        _id: "c9317dcd-e82d-4cd2-acb2-670557c20bd2",
        name: "remix"
    }
};

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(formatsObject);
        }, 2000);
    });

export default {
    fetchAll
};
