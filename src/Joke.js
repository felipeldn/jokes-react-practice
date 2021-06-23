import React from 'react'

function Joke(props) {
    console.log(props)
    return (
        <div className="joke-card">
            <h2>{props.joke.question}</h2>
            <h3>{props.joke.punchline}</h3>
        </div>
    )
}

export default Joke
