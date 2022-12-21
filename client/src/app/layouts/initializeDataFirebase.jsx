import React from "react";
import { useMockData } from "../utils/mockData";

const InitializeDataFirebase = () => {
    const { error, initialize, status, progress } = useMockData();

    const handleClick = () => {
        initialize();
    };
    return (
        <div className="container mt-5">
            <h1>Initialize Data in Firebase</h1>
            <ul>
                <li>Status: {status}</li>
                <li>Propgress: {progress}%</li>
                {error && <li>Error: {error}</li>}
            </ul>
            <button className="btn btn-primary" onClick={handleClick}>
                Start initialize
            </button>
        </div>
    );
};

export default InitializeDataFirebase;
