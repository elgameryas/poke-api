import React from 'react'

function Pokemon ({ pokemon, img }) {
    return (
    <div className="pokemon">
        <h2>{pokemon}</h2> <br/>
        <img src={img} />
    </div>
    )
}

export default Pokemon;