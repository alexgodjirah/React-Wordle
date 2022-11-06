import React from 'react'
import Row from './Row'

// Grid component is used to contain all of the guess list.
export default function Grid(props) {
    const { guessList, currentGuess, turn } = props;

    return (
        <div>
            {
                guessList.map((guess, i) => {
                    if (turn === i) { // To put every currentGuess into separate according to the turn and index for each guess. 
                        return <Row key={i} currentGuess={currentGuess} />
                    }
                    return <Row key={i} guess={guess} /> // This is to create "history" for each entered guess. 
                })
            }
        </div>
    )
}
