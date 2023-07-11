import React, {useEffect, useState} from 'react';
import logo from './kirk.png';
import './App.css';

import Letter from './Letter.js';
import CharacterSelect from "./CharacterSelect";
import GuessInputMarker from "./GuessInputMarker";
import GuessLetterBox from "./GuessLetterBox";

function App() {

    const [crew, setCrew] = useState([]);
    const [selectedCrewPerson, setSelectedCrewPerson] =
        useState({firstName: "Simon", lastName: "Aust", middleName: "Anthony"});

    const [loading, setLoading] = useState(false);
    const [alphabet, setAlphabet] = useState([]);

    const [userGuess, setUserGuess] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState(false);
    const [falseAnswer, setFalseAnswer] = useState(false);

    function letterClickHandler(userGuessStr) {
        // setUserGuess((preArray) => [...preArray, letter])
        // console.log(`userGuess ${userGuess}`)
        console.log(`User clicked ${userGuessStr}`)
        console.log(`userGuess.length:${userGuess.length}`)
        console.log(`selectedCrewPerson.firstName.charAt(userGuess.length):${selectedCrewPerson.firstName.charAt(userGuess.length)}`)
        let crewPersonLetter = selectedCrewPerson.firstName.charAt(userGuess.length);
        if (crewPersonLetter.toLowerCase() === userGuessStr) {
            console.log("User guess was correct, placing letter")
            console.log(userGuess)
            setUserGuess(prevState => [...prevState, crewPersonLetter])
            setCorrectAnswer(true)
        } else {
            setFalseAnswer(true)
            setTimeout(() => setFalseAnswer(false), 1000);
        }
    }

    function selectClickHandler(crew) {
        console.log(`Select clicked: ${crew.firstName} ${crew.lastName} chosen`)
        setUserGuess([]);
        setSelectedCrewPerson(crew);
    }

    useEffect(() => {
        setLoading(true);

        const lowercaseAlphabet = Array.from({length: 26},
            (_, index) => String.fromCharCode(97 + index));
        setAlphabet(lowercaseAlphabet);

        fetch('api/crew')
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => {
                console.log(data)
                setCrew(data);
                // setSelectedCrewPerson(crew[0]);
                setTimeout(() => setLoading(false), 3000);
            })
            .catch(err => console.log(err))


    }, []);

    return (<div className="App">

            {loading && <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Making it so...
                </p>
            </header>}

            {!loading && <div>
                <CharacterSelect crew={crew} handleClick={selectClickHandler}/>
                <div className="spelling-input">
                    <div className="guessContainer">
                        {selectedCrewPerson.lastName.split('')
                            .map((char, index) => <div className="guessLetterBox">{char}</div>)}
                        <div className="guessLetterBox">,</div>
                    </div>
                    <div className="guessContainer">
                        {selectedCrewPerson.firstName.split('')
                            .map((char, index) =>
                                <GuessLetterBox
                                    index={index}
                                    character={userGuess[index] || null}
                                    cursor={!userGuess[index] && true}
                                    cursorBlink={!userGuess[index] && index === userGuess.length}
                                    correctAnswer={correctAnswer && userGuess[index]}
                                    falseAnswer={falseAnswer && index === userGuess.length}
                                />)}

                        {(selectedCrewPerson.middleName !== null) &&
                            <div className="flex">
                                <GuessLetterBox index={null}
                                                character={null}
                                                cursor={false}
                                                cursorBlink={false}
                                                correctAnswer={false}
                                                falseAnswer={false}/>
                                <GuessLetterBox
                                    index={null}
                                    character={selectedCrewPerson.middleName.charAt(0).toUpperCase()}
                                    cursor={false}
                                    cursorBlink={false}
                                    correctAnswer={false}
                                    falseAnswer={false}
                                />

                            </div>
                        }
                    </div>
                </div>

                <div className="alphabet">
                    <h2>Alphabet</h2>
                    <ul>
                        {alphabet.map((letter, index) => <li>
                            <Letter
                                index={index}
                                letter={letter}
                                handleClick={() => letterClickHandler(letter)}/>
                        </li>)}
                    </ul>
                </div>
            </div>}

        </div>

    );
}

export default App;
