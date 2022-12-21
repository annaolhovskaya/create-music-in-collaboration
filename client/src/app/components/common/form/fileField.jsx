import React, { useRef, useState } from "react";

const FileField = () => {
    const inputRef = useRef(null);
    const [isValueSet, setIsValueSet] = useState(false);

    const handleSend = () => {
        const file = inputRef.current.files;
        console.log(file);
    };

    return (
        <div className="input-group">
            <input
                ref={inputRef}
                type="file"
                accept=".mp3"
                className="form-control"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
                onChange={() => setIsValueSet(true)}
            />
            <button
                className="btn btn-primary"
                type="button"
                id="inputGroupFileAddon04"
                onClick={handleSend}
                disabled={!isValueSet}
            >
                Отправить
            </button>
        </div>
        // <label htmlFor="file">Выберите файл</label>
        // <input
        //     ref={inputRef}
        //     type="file"
        //     onChange={() => setIsValueSet(true)}
        // />
        // <button onClick={handleSend} disabled={!isValueSet}>
        //     Отправить файл
        // </button>
    );
};

export default FileField;
