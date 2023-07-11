import GuessInputMarker from "./GuessInputMarker";
import React from "react";

function GuessLetterBox({index, character, cursor, cursorBlink, correctAnswer, falseAnswer}) {
    return (
        <div
            key={index}
            id={`guessLetterBox${index}`}
            className={`guessLetterBox ${correctAnswer && "correctAnswer"} ${falseAnswer && "falseAnswer"}`}>

            {!cursor && <div>{character}</div>}
            {cursor &&  <GuessInputMarker blink={cursorBlink} />}
        </div>
    )
}

export default GuessLetterBox;