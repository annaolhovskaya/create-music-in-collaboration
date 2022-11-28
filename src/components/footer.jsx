import React from "react";
import MediaPlayer from "./mediaPlayer";

const Footer = () => {
    // const [tracks, setTracks] = useState();
    // useEffect(() => {
    //     api.tracks.fetchAll().then((data) => setTracks(data));
    // }, []);
    // if (tracks) {
    return (
        <div className="container">
            <div className="footer__inner">
                <MediaPlayer />
            </div>
        </div>
    );
    // }
    // return "Loading...";
};

export default Footer;
