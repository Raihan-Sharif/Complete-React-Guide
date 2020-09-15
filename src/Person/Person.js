import React from 'react';

const person = (porps) => {
    return (
        <div>
            <p>I'm a {porps.name} and I am {porps.age} Years Old!</p>
            <p>{porps.children}</p>
        </div>
    )
};

export default person;