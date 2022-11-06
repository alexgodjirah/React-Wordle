import React from 'react'

// Row component is used to contain each letter of the current guess.
export default function Row(props) {
    const { guess, currentGuess } = props;
    
    // This will put every letter in guess (array of object) to each box. 
    if (guess) {
        return (
            <div className='row list'>
                {
                    guess.map((g, i) => (
                        <div key={i} className={g.color}>{g.letter}</div>
                        ))
                    }
            </div>
        )
    }
    
    // This will show each letter we type inside the boxes.
    if (currentGuess) {
        const letters = currentGuess.split(''); // Since currentGuess is a string, we need to make it into an array of characters, using split('') method. 
        return (
            <div className='row current'>
                {
                    letters.map((char, i) => {
                        return <div className='filled' key={i}>{char}</div>
                    })
                }

                {
                    // This is used to keep the 5 boxes by setting it according to currentGuess length. For example, if we only type currentGuess with length of 2, we only get 2 boxes, so we need to have 3 other boxes by substract 5 with the length of currentGuess.
                    [...Array(5 - letters.length)].map((_, i) => {
                        return <div key={i}></div>
                    })
                }
            </div>
        )
    }
    
    return (
        <div className='row'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
