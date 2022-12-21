import { stylesObject as styles } from "./styles.api";
import { dawsObject as daws } from "./daws.api";
import { formatsObject as formats } from "./formats.api";
import { experienceObject as experience } from "./experience.api";

const users = [
    {
        _id: "0a4c0c4b-6e22-4d98-ae0f-e953c860e49b",
        name: "Евсеев Тимофей",
        nickname: "Voyage",
        email: "evs.tim@mail.com",
        city: "Москва",
        country: "Россия",
        experience: experience.beginner,
        daw: [daws.ableton],
        styles: [styles.trance, styles.progressive],
        workFormat: [formats.collaboration, formats.remix],
        soundCloud: "https://soundcloud.com/",
        sex: "male",
        bookmark: false
    },
    {
        _id: "1641dfa0-0ff6-4920-8e47-a83390503deb",
        name: "Robert Oliver",
        nickname: "Double Trouble",
        email: "doubletrouble@gmail.com",
        city: "Sydney",
        country: "Australia",
        experience: experience.skilled,
        daw: [daws.studioOne],
        styles: [styles.house, styles.progressive],
        workFormat: [formats.collaboration, formats.remix],
        soundCloud: "https://soundcloud.com/",
        sex: "male",
        bookmark: false
    },
    {
        _id: "452deeb3-c91d-46e9-a1f1-ac0a6ead3820",
        name: "Heartbeats",
        nickname: "Heartbeats",
        email: "heartzzz@gmail.com",
        city: "Boston",
        country: "USA",
        experience: experience.beginner,
        daw: [daws.cubase],
        styles: [styles.melodicTechno, styles.progressive],
        workFormat: [formats.collaboration],
        soundCloud: "https://soundcloud.com/",
        sex: "other",
        bookmark: false
    },
    {
        _id: "646c4b93-5fdd-40e4-9d2f-df688b164e9e",
        name: "DJ Whistle",
        nickname: "DJ Whistle",
        email: "super_dj_whistle@yandex.ru",
        city: "Санкт-Петербург",
        country: "Россия",
        experience: experience.beginner,
        daw: [daws.logic, daws.reaper],
        styles: [styles.techno, styles.industrial],
        workFormat: [formats.collaboration, formats.remix],
        soundCloud: "https://soundcloud.com/",
        sex: "male",
        bookmark: false
    },
    {
        _id: "ff3cee42-88e8-46e1-9a87-492ca34d2762",
        name: "Donna Stevens",
        nickname: "Fluke",
        email: "fluke.donna@gmail.com",
        city: "Amsterdam",
        country: "Netherlands",
        experience: experience.expert,
        daw: [daws.ableton],
        styles: [styles.house, styles.edm],
        workFormat: [formats.remix],
        soundCloud: "https://soundcloud.com/",
        sex: "female",
        bookmark: false
    },
    {
        _id: "dd758ac8-9d05-4bc5-bc98-5a4084bd8b7e",
        name: "DJ Ambit",
        nickname: "DJ Ambit",
        email: "ambit_dj@mail.ru",
        city: "Екатеринбург",
        country: "Россия",
        experience: experience.beginner,
        daw: [daws.bitwig, daws.ableton],
        styles: [styles.bassHouse, styles.futureBass, styles.dnb],
        workFormat: [formats.collaboration, formats.remix],
        soundCloud: "https://soundcloud.com/",
        sex: "male",
        bookmark: false
    },
    {
        _id: "1b290b37-af77-419d-9d58-a1ed58a24ce9",
        name: "Сорокина Яна",
        nickname: "Ink",
        email: "ink_ink_yana@yandex.ru",
        city: "Казань",
        country: "Россия",
        experience: experience.skilled,
        daw: [daws.studioOne],
        styles: [styles.melodicTechno, styles.midtempo],
        workFormat: [formats.collaboration],
        soundCloud: "https://soundcloud.com/",
        sex: "female",
        bookmark: false
    },
    {
        _id: "bfadad10-545c-4956-b285-666f2d1ceb84",
        name: "Karen Brown",
        nickname: "Omen",
        email: "omen99@gmail.com",
        city: "Cleveland",
        country: "USA",
        experience: experience.expert,
        daw: [daws.ableton, daws.bitwig],
        styles: [styles.loFi, styles.trap],
        workFormat: [formats.collaboration],
        soundCloud: "https://soundcloud.com/",
        sex: "male",
        bookmark: false
    },
    {
        _id: "dd4b71a3-8334-4100-bcf9-e1e5060295c8",
        name: "DJ Quicksand",
        nickname: "DJ Quicksand",
        email: "quickdjsand@gmail.com",
        city: "Edmonton",
        country: "Canada",
        experience: experience.skilled,
        daw: [daws.logic],
        styles: [styles.industrial],
        workFormat: [formats.remix],
        soundCloud: "https://soundcloud.com/",
        sex: "other",
        bookmark: false
    },
    {
        _id: "8445f3fb-d2d1-481f-a9d0-01fdcc83a1bf",
        name: "Столяров Андрей",
        nickname: "Aftermath",
        email: "stolyarov.aftermath@gmail.com",
        city: "Харьков",
        country: "Украина",
        experience: experience.beginner,
        daw: [daws.fl],
        styles: [styles.trance, styles.edm],
        workFormat: [formats.collaboration],
        soundCloud: "https://soundcloud.com/",
        sex: "male",
        bookmark: false
    },
    {
        _id: "a28cd528-ec16-4655-9795-09d15f9e3563",
        name: "DJ Hannibalistic",
        nickname: "DJ Hannibalistic",
        email: "hannibal1993@gmail.com",
        city: "Prague",
        country: "Czech",
        experience: experience.expert,
        daw: [daws.reaper, daws.proTools],
        styles: [styles.ambient, styles.chillout],
        workFormat: [formats.collaboration, formats.remix],
        soundCloud: "https://soundcloud.com/",
        sex: "other",
        bookmark: false
    },
    {
        _id: "3936b91c-aec5-4b51-b4bf-32036ca8e26f",
        name: "DJ Bit",
        nickname: "DJ Bit",
        email: "bitkakbit@gmail.com",
        city: "Almaty",
        country: "Kazakhstan",
        experience: experience.expert,
        daw: [daws.ableton, daws.bitwig],
        styles: [styles.bassHouse, styles.futureBass, styles.techno],
        workFormat: [formats.collaboration],
        soundCloud: "https://soundcloud.com/",
        sex: "male",
        bookmark: false
    },
    {
        _id: "0451b735-1ccf-4c08-8840-260742ca8886",
        name: "Edward Roberts",
        nickname: "Wish",
        email: "wishandjoy@gmail.com",
        city: "Glasgow",
        country: "Scotland",
        experience: experience.beginner,
        daw: [daws.studioOne],
        styles: [styles.trance, styles.progressive],
        workFormat: [formats.remix],
        soundCloud: "https://soundcloud.com/",
        sex: "male",
        bookmark: false
    },
    {
        _id: "2e66ea64-ad02-4324-8334-367ac1ab3fd3",
        name: "DJ Clarity",
        nickname: "DJ Clarity",
        email: "claritygonesh@gmail.com",
        city: "New Delhi",
        country: "India",
        experience: experience.skilled,
        daw: [daws.ableton],
        styles: [styles.house, styles.organic],
        workFormat: [formats.collaboration, formats.remix],
        soundCloud: "https://soundcloud.com/",
        sex: "female",
        bookmark: false
    },
    {
        _id: "786e6046-08ab-41da-9654-24845c475468",
        name: "DJ Dimension",
        nickname: "DJ Dimension",
        email: "dimensiondj2003@yandex.ru",
        city: "Владивосток",
        country: "Россия",
        experience: experience.beginner,
        daw: [daws.fl],
        styles: [styles.edm, styles.futureBass],
        workFormat: [formats.remix],
        soundCloud: "https://soundcloud.com/",
        sex: "male",
        bookmark: false
    },
    {
        _id: "e2366ff4-2d13-4067-bf1b-9b7d9b9b52b8",
        name: "Степанов Никита",
        nickname: "Carnage",
        email: "carnagehallminsk@gmail.com",
        city: "Минск",
        country: "Беларусь",
        experience: experience.skilled,
        daw: [daws.bitwig, daws.ableton],
        styles: [styles.techno, styles.industrial],
        workFormat: [formats.collaboration],
        soundCloud: "https://soundcloud.com/",
        sex: "male",
        bookmark: false
    },
    {
        _id: "e6da8d20-a305-47e1-b6e0-e37f29a03f4c",
        name: "Martha Freeman",
        nickname: "Clover",
        email: "iamloverclover@gmail.com",
        city: "Akureyri",
        country: "Iceland",
        experience: experience.expert,
        daw: [daws.studioOne],
        styles: [styles.ambient, styles.melodicTechno, styles.loFi],
        workFormat: [formats.collaboration],
        soundCloud: "https://soundcloud.com/",
        sex: "female",
        bookmark: false
    },
    {
        _id: "1cd231c8-b389-4408-b44a-c44bc913ec84",
        name: "DJ Question Mark",
        nickname: "DJ Question Mark",
        email: "thisquiestiondj@gmail.com",
        city: "Valencia",
        country: "Venezuela",
        experience: experience.skilled,
        daw: [daws.bitwig],
        styles: [styles.dnb, styles.futureBass, styles.dubstep],
        workFormat: [formats.collaboration, formats.remix],
        soundCloud: "https://soundcloud.com/",
        sex: "male",
        bookmark: false
    },
    {
        _id: "feb845a3-159d-4e1e-b830-d7f9eec4ca83",
        name: "David Fernandez",
        nickname: "Phantom",
        email: "phantomelectricopera@gmail.com",
        city: "Valencia",
        country: "Spain",
        experience: experience.beginner,
        daw: [daws.ableton, daws.cubase],
        styles: [styles.trance, styles.techno, styles.melodicTechno],
        workFormat: [formats.collaboration],
        soundCloud: "https://soundcloud.com/",
        sex: "male",
        bookmark: false
    },
    {
        _id: "9dc9013b-638c-4356-a5a0-937a05d7f4df",
        name: "Филатова София",
        nickname: "Momentune",
        email: "momentomore@mail.ru",
        city: "Уфа",
        country: "Россия",
        experience: experience.beginner,
        daw: [daws.ableton],
        styles: [styles.house, styles.organic],
        workFormat: [formats.remix],
        soundCloud: "https://soundcloud.com/",
        sex: "female",
        bookmark: false
    }
];

if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("users")));
        }, 2000);
    });

const update = (id, data) =>
    new Promise((resolve) => {
        const users = JSON.parse(localStorage.getItem("users"));
        const userIndex = users.findIndex((u) => u._id === id);
        users[userIndex] = { ...users[userIndex], ...data };
        localStorage.setItem("users", JSON.stringify(users));
        resolve(users[userIndex]);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("users")).find(
                    (user) => user._id === id
                )
            );
        }, 1000);
    });

export default {
    fetchAll,
    getById,
    update
};
