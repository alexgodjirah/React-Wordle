import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';

// Wordle component is created to contains the usage of useWordle hooks and show the game. 
export default function Wordle({ solution }) {
    const [showModal, setShowModal] = useState(false);
    
    const { handleKeyUp, currentGuess, turn, guessList, isCorrect, usedKeys } = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

        if (isCorrect) {
            setTimeout(() => setShowModal(true), 2000);
            window.removeEventListener('keyup', handleKeyUp);
        }

        if (turn > 5) {
            console.log('Unlucky, out of guesses')
            window.removeEventListener('keyup', handleKeyUp);
        }

        // Clean up function.
        // Since we're using dependency array, we need to provide the clean up function, if not we will show the letter twice. NEED FURTHER RESEARCH.
        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [handleKeyUp, isCorrect,turn]);

  return (
    <div>
        {/* <div>
            Solution: {solution}
        </div>

        <div>
            Current Guess: {currentGuess}    
        </div> */}

        <div>
            <Grid guessList={guessList} currentGuess={currentGuess} turn={turn} />
        </div>

        <div>
            <Keypad usedKeys={usedKeys} />
        </div>

        <div>
            {
                showModal
                    && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
            }
        </div>
    </div>
  )
}
