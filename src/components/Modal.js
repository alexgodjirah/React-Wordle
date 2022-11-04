import React from 'react'

export default function Modal(props) {
    const { isCorrect, turn, solution } = props;

    return (
        <div className='modal'>
            {
            isCorrect
                ? (
                    <div>
                        <h1>You Win!</h1>
                        <p className='solution'>{solution}</p>
                        <p>You found the solution in {turn} guesses :)</p>
                    </div>
                )
                : (
                    <div>
                        <h1>Nevermind!</h1>
                        <p className='solution'>{solution}</p>
                        <p>Better luck next time :)</p>
                    </div>
                )
            }
        </div>
    )
}
