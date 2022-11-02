import React from 'react'

// Row component is used to contain each letter of the current guess.
export default function Row(props) {
    const { guess } = props;

    if (guess) {
        return (
            <div className='row'>
                {
                    guess.map((e, i) => (
                        <div key={i} className={e.color}>{e.letter}</div>
                    ))
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
