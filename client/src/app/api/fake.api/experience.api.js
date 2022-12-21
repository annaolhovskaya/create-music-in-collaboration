export const experienceObject = {
    beginner: {
        _id: "c7907ba0-83a7-4930-b6a2-3646e5dc853d",
        name: "Новичок",
        icon: "bi bi-brightness-low"
    },
    skilled: {
        _id: "8c0401d6-d1dc-4691-afa4-4b2fffd4f8dc",
        name: "Опытный",
        icon: "bi bi-brightness-high"
    },
    expert: {
        _id: "c9317dcd-e82d-4cd2-acb2-670557c20bd2",
        name: "Эксперт",
        icon: "bi bi-brightness-high-fill"
    }
};

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(experienceObject);
        }, 1500);
    });

export default {
    fetchAll
};
