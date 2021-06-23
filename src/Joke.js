import React from 'react'

function Joke(props) {
    console.log(props)
    return (
        <div className="joke-card">
            <h2 style={{display: props.joke.question ? "block" : "none"}}>Question: {props.joke.question}</h2>
            <h3>{props.joke.punchline}</h3>
            <hr/>
        </div>
    )
}

export default Joke

