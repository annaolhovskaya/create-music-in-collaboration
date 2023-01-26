import { useState, useEffect } from "react";
import daws from "../mockData/daws.json";
import experiences from "../mockData/experiences.json";
import workformats from "../mockData/workformats.json";
import styles from "../mockData/styles.json";
import users from "../mockData/users.json";
import tracks from "../mockData/tracks.json";
import albums from "../mockData/albums.json";
import httpService from "../services/http.service";

export const useMockData = () => {
    const statusConsts = {
        idle: "Not Started",
        pending: "Im Process",
        successed: "Ready",
        error: "Error occured"
    };

    const [status, setStatus] = useState(statusConsts.idle);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(0);
    const [count, setCount] = useState(0);

    const summuryCount =
        daws.length +
        experiences.length +
        workformats.length +
        styles.length +
        users.length +
        tracks.length +
        albums.length;

    const incrementCount = () => {
        setCount((prevState) => prevState + 1);
    };

    const updateProgress = () => {
        if (count !== 0 && status === statusConsts.idle) {
            setStatus(statusConsts.pending);
        }

        const newProgress = Math.floor((count / summuryCount) * 100);

        if (progress < newProgress) {
            setProgress(() => newProgress);
        }

        if (newProgress === 100) {
            setStatus(statusConsts.successed);
        }
    };

    useEffect(() => {
        updateProgress();
    }, [count]);

    async function initialize() {
        try {
            for (const daw of daws) {
                await httpService.put("daw/" + daw._id, daw);
                incrementCount();
            }

            for (const exp of experiences) {
                await httpService.put("experience/" + exp._id, exp);
                incrementCount();
            }

            for (const format of workformats) {
                await httpService.put("workformat/" + format._id, format);
                incrementCount();
            }

            for (const style of styles) {
                await httpService.put("style/" + style._id, style);
                incrementCount();
            }

            for (const user of users) {
                await httpService.put("user/" + user._id, user);
                incrementCount();
            }

            for (const track of tracks) {
                await httpService.put("track/" + track._id, track);
                incrementCount();
            }

            for (const album of albums) {
                await httpService.put("album/" + album._id, album);
                incrementCount();
            }
        } catch (error) {
            setError(error);
            setStatus(statusConsts.error);
        }
    }
    return { error, initialize, status, progress };
};
