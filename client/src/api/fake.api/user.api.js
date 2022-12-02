import { stylesObject as styles } from "./styles.api";
import { dawsObject as daws } from "./daws.api";
import { formatsObject as formats } from "./formats.api";

// const daws = {
//     ableton: {
//         _id: "1f8f56c9-37a3-4377-b083-a897205c03be",
//         name: "Ableton Live"
//     },
//     studioOne: {
//         _id: "5413a951-ba4b-4508-88dd-04dc290ed0e9",
//         name: "Studio One"
//     },
//     bitwig: {
//         _id: "7bd74c3d-96f9-4b5a-9f1f-9c0c96af1969",
//         name: "Bitwig Studio"
//     },
//     logic: {
//         _id: "c0e68e2f-f5fd-4aa8-aec9-39925fb03f05",
//         name: "Logic"
//     },
//     cubase: {
//         _id: "28f88340-e447-4e64-af67-8528e2dad926",
//         name: "Cubase"
//     },
//     fl: {
//         _id: "abf001ce-0732-4604-9518-0139de37a1f8",
//         name: "FL Studio"
//     },
//     reaper: {
//         _id: "496ca540-62fb-4c23-a835-542e5d1b7b5c",
//         name: "Reaper"
//     },
//     proTools: {
//         _id: "dee409a3-17f2-4a11-a624-df59b606f44f",
//         name: "Pro Tools"
//     }
// };

// const styles = {
//     house: {
//         _id: "4a90735d-1155-43f3-aa06-d20629c03101",
//         name: "house"
//     },
//     progressive: {
//         _id: "34a65a16-c408-4691-96d7-e650918ffc78",
//         name: "progressive"
//     },
//     techno: {
//         _id: "63c1fe98-0490-4ee5-86d7-77025d364bba",
//         name: "techno"
//     },
//     melodicTechno: {
//         _id: "bbf5ae28-6c46-43ee-8363-d912a504b0ef",
//         name: "melodic techno"
//     },
//     trance: {
//         _id: "44a8a93b-5262-4702-98f4-0708c54bcfbf",
//         name: "trance"
//     },
//     midtempo: {
//         _id: "35c97a13-0a32-46e4-90bb-19e9663b369b",
//         name: "midtempo"
//     },
//     ambient: {
//         _id: "60ccf23d-345b-456f-bdac-065f311d5c48",
//         name: "ambient"
//     },
//     chillout: {
//         _id: "9fd80e00-1f27-4734-9530-b60c53cb8c59",
//         name: "chillout"
//     },
//     dnb: {
//         _id: "adee6749-1f88-4cb8-b6f4-5b0905a3ba46",
//         name: "drum&bass"
//     },
//     industrial: {
//         _id: "7c278aea-45cd-45f3-abe3-94b7037219fe",
//         name: "industrial"
//     },
//     trap: {
//         _id: "672b6675-3934-4b1f-83dd-ddde8cdc3908",
//         name: "trap"
//     },
//     dubstep: {
//         _id: "e4e5e121-9743-49fd-8277-f340249f21dd",
//         name: "dubstep"
//     },
//     futureBass: {
//         _id: "5e53aa26-7c4a-4574-8d38-31f131d52fb4",
//         name: "future bass"
//     },
//     bassHouse: {
//         _id: "a26dc812-8a5f-466c-8ebc-3606746f27f4",
//         name: "bass house"
//     },
//     loFi: {
//         _id: "b9ee8531-703f-4167-96b7-864f2ac49c51",
//         name: "lo-fi"
//     },
//     edm: {
//         _id: "814020cd-fe2f-4af6-89b4-9e36e27a8c08",
//         name: "EDM"
//     },
//     organic: {
//         _id: "a28d0398-4900-472c-84d8-993c85b8e783",
//         name: "organic"
//     }
// };

// const formats = {
//     collaboration: {
//         _id: "96765671-7a14-4a2f-9aaf-9e9e495b28e4",
//         name: "collaboration"
//     },
//     remix: {
//         _id: "c9317dcd-e82d-4cd2-acb2-670557c20bd2",
//         name: "remix"
//     }
// };

const users = [
    {
        _id: "0a4c0c4b-6e22-4d98-ae0f-e953c860e49b",
        name: "Евсеев Тимофей",
        nickname: "Voyage",
        city: "Москва",
        country: "Россия",
        daw: [daws.ableton],
        styles: [styles.trance, styles.progressive],
        workFormat: [formats.collaboration, formats.remix],
        soundCloud: "https://soundcloud.com/",
        bookmark: false
    },
    {
        _id: "1641dfa0-0ff6-4920-8e47-a83390503deb",
        name: "Robert Oliver",
        nickname: "Double Trouble",
        city: "Sydney",
        country: "Australia",
        daw: [daws.studioOne],
        styles: [styles.house, styles.progressive],
        workFormat: [formats.collaboration, formats.remix],
        soundCloud: "https://soundcloud.com/",
        bookmark: false
    },
    {
        _id: "452deeb3-c91d-46e9-a1f1-ac0a6ead3820",
        name: "Heartbeats",
        nickname: "Heartbeats",
        city: "Boston",
        country: "USA",
        daw: [daws.cubase],
        styles: [styles.melodicTechno, styles.progressive],
        workFormat: [formats.collaboration],
        soundCloud: "https://soundcloud.com/",
        bookmark: false
    },
    {
        _id: "646c4b93-5fdd-40e4-9d2f-df688b164e9e",
        name: "DJ Whistle",
        nickname: "DJ Whistle",
        city: "Санкт-Петербург",
        country: "Россия",
        daw: [daws.logic, daws.reaper],
        styles: [styles.techno, styles.industrial],
        workFormat: [formats.collaboration, formats.remix],
        soundCloud: "https://soundcloud.com/",
        bookmark: false
    },
    {
        _id: "ff3cee42-88e8-46e1-9a87-492ca34d2762",
        name: "Donna Stevens",
        nickname: "Fluke",
        city: "Amsterdam",
        country: "Netherlands",
        daw: [daws.ableton],
        styles: [styles.house, styles.edm],
        workFormat: [formats.remix],
        soundCloud: "https://soundcloud.com/",
        bookmark: false
    },
    {
        _id: "dd758ac8-9d05-4bc5-bc98-5a4084bd8b7e",
        name: "DJ Ambit",
        nickname: "DJ Ambit",
        city: "Екатеринбург",
        country: "Россия",
        daw: [daws.bitwig, daws.ableton],
        styles: [styles.bassHouse, styles.futureBass, styles.dnb],
        workFormat: [formats.collaboration, formats.remix],
        soundCloud: "https://soundcloud.com/",
        bookmark: false
    },
    {
        _id: "1b290b37-af77-419d-9d58-a1ed58a24ce9",
        name: "Сорокина Яна",
        nickname: "Ink",
        city: "Казань",
        country: "Россия",
        daw: [daws.studioOne],
        styles: [styles.melodicTechno, styles.midtempo],
        workFormat: [formats.collaboration],
        soundCloud: "https://soundcloud.com/",
        bookmark: false
    },
    {
        _id: "bfadad10-545c-4956-b285-666f2d1ceb84",
        name: "Karen Brown",
        nickname: "Omen",
        city: "Cleveland",
        country: "USA",
        daw: [daws.ableton, daws.bitwig],
        styles: [styles.loFi, styles.trap],
        workFormat: [formats.collaboration],
        soundCloud: "https://soundcloud.com/",
        bookmark: false
    },
    {
        _id: "dd4b71a3-8334-4100-bcf9-e1e5060295c8",
        name: "DJ Quicksand",
        nickname: "DJ Quicksand",
        city: "Edmonton",
        country: "Canada",
        daw: [daws.logic],
        styles: [styles.industrial],
        workFormat: [formats.remix],
        soundCloud: "https://soundcloud.com/",
        bookmark: false
    },
    {
        _id: "8445f3fb-d2d1-481f-a9d0-01fdcc83a1bf",
        name: "Столяров Андрей",
        nickname: "Aftermath",
        city: "Харьков",
        country: "Украина",
        daw: [daws.fl],
        styles: [styles.trance, styles.edm],
        workFormat: [formats.collaboration],
        soundCloud: "https://soundcloud.com/",
        bookmark: false
    },
    {
        _id: "a28cd528-ec16-4655-9795-09d15f9e3563",
        name: "DJ Hannibalistic",
        nickname: "DJ Hannibalistic",
        city: "Prague",
        country: "Czech",
        daw: [daws.reaper, daws.proTools],
        styles: [styles.ambient, styles.chillout],
        workFormat: [formats.collaboration, formats.remix],
        soundCloud: "https://soundcloud.com/",
        bookmark: false
    },
    {
        _id: "3936b91c-aec5-4b51-b4bf-32036ca8e26f",
        name: "DJ Bit",
        nickname: "DJ Bit",
        city: "Almaty",
        country: "Kazakhstan",
        daw: [daws.ableton, daws.bitwig],
        styles: [styles.bassHouse, styles.futureBass, styles.techno],
        workFormat: [formats.collaboration],
        soundCloud: "https://soundcloud.com/",
        bookmark: false
    },
    {
        _id: "0451b735-1ccf-4c08-8840-260742ca8886",
        name: "Edward Roberts",
        nickname: "Wish",
        city: "Glasgow",
        country: "Scotland",
        daw: [daws.studioOne],
        styles: [styles.trance, styles.progressive],
        workFormat: [formats.remix],
        soundCloud: "https://soundcloud.com/",
        bookmark: false
    },
    {
        _id: "2e66ea64-ad02-4324-8334-367ac1ab3fd3",
        name: "DJ Clarity",
        nickname: "DJ Clarity",
        city: "New Delhi",
        country: "India",
        daw: [daws.ableton],
        styles: [styles.house, styles.organic],
        workFormat: [formats.collaboration, formats.remix],
        soundCloud: "https://soundcloud.com/",
        bookmark: false
    },
    {
        _id: "786e6046-08ab-41da-9654-24845c475468",
        name: "DJ Dimension",
        nickname: "DJ Dimension",
        city: "Владивосток",
        country: "Россия",
        daw: [daws.fl],
        styles: [styles.edm, styles.futureBass],
        workFormat: [formats.remix],
        soundCloud: "https://soundcloud.com/",
        bookmark: false
    },
    {
        _id: "e2366ff4-2d13-4067-bf1b-9b7d9b9b52b8",
        name: "Степанов Никита",
        nickname: "Carnage",
        city: "Минск",
        country: "Беларусь",
        daw: [daws.bitwig, daws.ableton],
        styles: [styles.techno, styles.industrial],
        workFormat: [formats.collaboration],
        soundCloud: "https://soundcloud.com/",
        bookmark: false
    },
    {
        _id: "e6da8d20-a305-47e1-b6e0-e37f29a03f4c",
        name: "Martha Freeman",
        nickname: "Clover",
        city: "Akureyri",
        country: "Iceland",
        daw: [daws.studioOne],
        styles: [styles.ambient, styles.melodicTechno, styles.loFi],
        workFormat: [formats.collaboration],
        soundCloud: "https://soundcloud.com/",
        bookmark: false
    },
    {
        _id: "1cd231c8-b389-4408-b44a-c44bc913ec84",
        name: "DJ Question Mark",
        nickname: "DJ Question Mark",
        city: "Valencia",
        country: "Venezuela",
        daw: [daws.bitwig],
        styles: [styles.dnb, styles.futureBass, styles.dubstep],
        workFormat: [formats.collaboration, formats.remix],
        soundCloud: "https://soundcloud.com/",
        bookmark: false
    },
    {
        _id: "feb845a3-159d-4e1e-b830-d7f9eec4ca83",
        name: "David Fernandez",
        nickname: "Phantom",
        city: "Valencia",
        country: "Spain",
        daw: [daws.ableton, daws.cubase],
        styles: [styles.trance, styles.techno, styles.melodicTechno],
        workFormat: [formats.collaboration],
        soundCloud: "https://soundcloud.com/",
        bookmark: false
    },
    {
        _id: "9dc9013b-638c-4356-a5a0-937a05d7f4df",
        name: "Филатова София",
        nickname: "Momentune",
        city: "Уфа",
        country: "Россия",
        daw: [daws.ableton],
        styles: [styles.house, styles.organic],
        workFormat: [formats.remix],
        soundCloud: "https://soundcloud.com/",
        bookmark: false
    }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(users);
        }, 1000);
    });

export default {
    fetchAll
};
