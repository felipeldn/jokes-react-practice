import React from 'react'

function Joke(props) {
    console.log(props)
    return (
        <div className="joke-card">
            <h2 style={{display: !props.question && "none"}}>Question: {props.question}</h2>
            <h3>Punchline: {props.punchline}</h3>
            <hr/>
        </div>
    )
}

export default Joke

