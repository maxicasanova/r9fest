import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";

const useAudio = url => {

    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
        },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const Player = ({ url, init }) => {
    const [playing, toggle] = useAudio(url);

    useEffect(() => {
        init && toggle();
    },[init])
    
    return (
        <div>
            <Button onClick={toggle} sx={{backgroundColor:'#121212', paddingTop:'20px', display:'none'}}>
                {playing ? "Pause" : "Play"}
            </Button>
        </div>
    );
};

export default Player;