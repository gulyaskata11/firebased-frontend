import React from 'react'

function Person({name, height, mass}) {

    return (
        <div className='Person'>
            <h1>{name}</h1>
            <h2>{height}</h2>
            <h2>{mass}</h2>
        </div>

    )

}

export default Person;