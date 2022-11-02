import React from 'react'
import Row from './Row'

// Grid component is used to contain all of the guess list.
export default function Grid(props) {
    const { guessList, currentGuess, turn } = props;

    return (
        <div>
            Grid
            {
                guessList.map((guess, i) => (
                    <Row key={i} guess={guess} />
                ))
            }
        </div>
    )
}
