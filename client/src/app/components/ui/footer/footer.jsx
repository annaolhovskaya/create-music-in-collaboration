import React from "react";
import MediaPlayer from "../../mediaPlayer";
import stylesCSS from "./footer.module.css";

const Footer = () => {
    // const [tracks, setTracks] = useState();
    // useEffect(() => {
    //     api.tracks.fetchAll().then((data) => setTracks(data));
    // }, []);
    // if (tracks) {
    return (
        <div className={stylesCSS.container_custom}>
            <div className={stylesCSS.footer__inner}>
                <MediaPlayer />
            </div>
        </div>
    );
    // }
    // return "Loading...";
};

export default Footer;
