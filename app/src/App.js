import React, {useEffect, useState} from 'react';
import logo from './kirk.png';
import './App.css';

import Letter from './Letter.js';
import CharacterSelect from "./CharacterSelect";

function App() {

    const [crew, setCrew] = useState([]);
    const [selectedCrewPerson, setSelectedCrewPerson] = useState({firstName: "Simon", lastName: "Aust"});

    const [loading, setLoading] = useState(false);
    const [alphabet, setAlphabet] = useState([]);

    const [userGuess, setUserGuess] = useState([]);

    function letterClickHandler(letter) {
        setUserGuess((preArray) => [...preArray, letter])
        // console.log(`userGuess ${userGuess}`)
        // console.log(`User clicked ${letter}`)
    }

    function selectClickHandler(crew) {
        console.log(`Select clicked: ${crew.firstName} ${crew.lastName} chosen`)
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
                <CharacterSelect crew={crew} handleClick={selectClickHandler} />
                <div className="spelling-input">
                    <div className="guessContainer">
                        {selectedCrewPerson.lastName.split('')
                            .map((char, index) => <div className="guessLetterBox">{char}</div>)}
                        <div className="guessLetterBox">,</div>
                    </div>
                    <div className="guessContainer">
                        {selectedCrewPerson.firstName.split('')
                            .map((char, index) =>
                                // <div key={index} className="guessLetterBox">{userGuess[index]}</div>)}
                            <div key={index} className="guessLetterBox"> X </div>)}
                        {(selectedCrewPerson.middleName !== null) &&
                            <div className="flex">
                                <div className="guessLetterBox"></div>
                                <div className="guessLetterBox">{selectedCrewPerson.middleName.charAt(0).toUpperCase()}</div>
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
                                handleClick={() => letterClickHandler(letter)} />
                        </li>)}
                    </ul>
                </div>
            </div>}

        </div>

    );
}

export default App;
