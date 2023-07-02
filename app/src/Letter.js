import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faVolumeHigh} from '@fortawesome/free-solid-svg-icons'

function Letter({index, letter, handleClick}) {

    const [isPlaying, setIsPlaying] = useState(false);
    function handlePlayPauseClick() {
        console.log("Clicked play")
        //     play sound
        setIsPlaying(prevState => !prevState);
    }

    return (
        <>
            <div key={index} className="letters">
                <div className="letters-header"><span>{index + 1}</span></div>
                <button onClick={() => handleClick(letter)}>
                    <span>{letter.toUpperCase()}</span>
                    <span>{letter}</span>
                </button>
                <button className="letters-footer" onClick={handlePlayPauseClick}>
                    {!isPlaying && <FontAwesomeIcon icon={faPlay}/>}
                    {isPlaying && <FontAwesomeIcon icon={faVolumeHigh} bounce/>}
                </button>
            </div>
        </>
    )
}

export default Letter;