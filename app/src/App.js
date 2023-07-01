import React, {useEffect, useState} from 'react';
import logo from './kirk.png';
import './App.css';

function App() {

    const [crew, setCrew] = useState([]);
    const [selectedCrewPerson, setSelectedCrewPerson] = useState({firstName: "Simon"});

    const [loading, setLoading] = useState(false);
    const [alphabet, setAlphabet] = useState([]);

    useEffect(() => {
        setLoading(true);

        const lowercaseAlphabet = Array.from({length: 26}, (_, index) =>
            String.fromCharCode(97 + index)
        );
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

    return (
        <div className="App">
            {loading && <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Loading...
                </p>
            </header>}
            <div className="characters">
                <label for="characters">Choose a character:</label>
                <select name="characters" id="characters">
                    {crew.map((crewPerson, index) =>
                        <option key={index} value={crewPerson.lastName}>{crewPerson.lastName}</option>
                    )}
                </select>
            </div>
            <div className="spelling-input">
                <div className="guessContainer">
                    {selectedCrewPerson.firstName.split('')
                        .map((char) => <div className="guessLetterBox"> _ </div>)}
                </div>
            </div>
            <div className="alphabet">
                <h2>Alphabet</h2>
                <ul>
                    {alphabet.map((letter, index) =>
                        <li>
                            <button key={index} className="letters">{letter}</button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default App;
