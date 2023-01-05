const comments = [
    {
        _id: "30d2ab1f-477c-4a52-bf0c-2c8321be7e24",
        pageId: "0a4c0c4b-6e22-4d98-ae0f-e953c860e49b",
        userId: "0a4c0c4b-6e22-4d98-ae0f-e953c860e49b",
        content: "Lorem ipsum dolor",
        created_at: "1633576399367"
    },
    {
        _id: "a2734d85-0d14-4e71-bfeb-5ccb532e82bb",
        pageId: "0a4c0c4b-6e22-4d98-ae0f-e953c860e49b",
        userId: "0a4c0c4b-6e22-4d98-ae0f-e953c860e49b",
        content: "Lorem ipsum dolor and etc",
        created_at: "1633573058520"
    },
    {
        _id: "4a2e64d0-29d1-4c46-b5e6-a7a20aa04034",
        pageId: "1641dfa0-0ff6-4920-8e47-a83390503deb",
        userId: "0a4c0c4b-6e22-4d98-ae0f-e953c860e49b",
        content: "Lorem ipsum dolor and etc",
        created_at: "1633573058520"
    }
];

// if (!localStorage.getItem("comments")) {
//     localStorage.setItem("comments", JSON.stringify(comments));
// }

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(comments);
        }, 200);
    });

const fetchCommentsForUser = (userId) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("comments")).filter(
                    (c) => c.pageId === userId
                )
            );
        }, 200);
    });

const add = (data) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const comments = JSON.parse(localStorage.getItem("comments"));
            const newComment = {
                ...data,
                created_at: Date.now(),
                _id: Math.random().toString(36).substr(2, 9)
            };
            comments.push(newComment);
            localStorage.setItem("comments", JSON.stringify(comments));
            resolve(newComment);
        }, 200);
    });

const remove = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const comments = JSON.parse(localStorage.getItem("comments"));
            const newComments = comments.filter((x) => x._id !== id);
            localStorage.setItem("comments", JSON.stringify(newComments));
            resolve(id);
        }, 200);
    });

export default {
    fetchAll,
    fetchCommentsForUser,
    add,
    remove
};
