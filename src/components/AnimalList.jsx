import React from 'react';

function AnimalList({ animals, setSelectedAnimal }) {
    return (
        <ul>
            {animals.map((animal, index) => (
                <li key={index} onClick={() => setSelectedAnimal(animal)}>
                    {animal}
                </li>
            ))}
        </ul>
    );
}

export default AnimalList;
