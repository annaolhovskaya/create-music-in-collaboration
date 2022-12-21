const tracks = [
    {
        author: "Amonita",
        title: "Stay",
        link: "/static/media/Amonita-Stay.00692d4554b121b72878.mp3"
    },
    {
        author: "CamelPhat",
        title: "Silenced Argy",
        link: "/static/media/CamelPhat-Silenced Argy.e111fc232086a9c90cbc.mp3"
    },
    {
        author: "Cristoph",
        title: "Turning Away",
        link: "/static/media/Cristoph-Turning Away.0f1a82c46997bcf0d582.mp3"
    },
    {
        author: "David Rossi",
        title: "The Heights Garden State",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "Deviu",
        title: "Espeleteia",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "Double Touch",
        title: "True",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "Dowden",
        title: "Middle Earthrue",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "DSF",
        title: "Loving You",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "DSF",
        title: "Tell Me About It",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "Essco",
        title: "Submerge",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "Fabaria",
        title: "Peace Pill",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "Fernando Ferreyra",
        title: "The Color of Your Eyes Amulanga",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "Frank Klassen",
        title: "Alive",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "Golan Zocher",
        title: "Negev",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "Julia Gherber",
        title: "Lullaby",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(tracks);
        }, 1000);
    });

export default {
    fetchAll
};
