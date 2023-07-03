import React from "react";

function CharacterSelect({crew, handleClick}) {
    return (
        <div className="characters">
            <label htmlFor="characters">Choose a character:</label>
            <select name="characters" id="characters">
                {crew.map((crewPerson, index) =>
                    <option key={index} value={crewPerson.lastName} onClick={() => handleClick(crewPerson)}>
                        {crewPerson.lastName}
                    </option>)}
            </select>
        </div>
    );
}

export default CharacterSelect;