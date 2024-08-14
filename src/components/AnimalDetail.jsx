import React from 'react';

function AnimalDetail({ animal }) {
    return (
        <div>
            <h2>{animal}</h2>
            <p>More details about {animal} will go here.</p>
        </div>
    );
}

export default AnimalDetail;
