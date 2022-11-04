import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid';
import Keypad from './Keypad';

// Wordle component is created to contains the usage of useWordle hooks and show the game. 
export default function Wordle({ solution }) {
    const { handleKeyUp, currentGuess, turn, guessList, isCorrect, usedKeys } = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

        // Clean up function.
        // Since we're using dependency array, we need to provide the clean up function, if not we will show the letter twice. NEED FURTHER RESEARCH.
        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [handleKeyUp]);

    useEffect(() => {
        console.log(turn, guessList, isCorrect, currentGuess);
    }, [turn, guessList, isCorrect])

  return (
    <div>
        <div>
            Solution: {solution}
        </div>

        <div>
            Current Guess: {currentGuess}    
        </div>

        <div>
            <Grid guessList={guessList} currentGuess={currentGuess} turn={turn} />
        </div>

        <div>
            <Keypad usedKeys={usedKeys} />
        </div>
    </div>
  )
}
