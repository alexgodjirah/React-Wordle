import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'

// Wordle component is created to contains the usage of useWordle hooks and show the game. 
export default function Wordle({ solution }) {
    const { handleKeyUp, currentGuess } = useWordle(solution);
    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

        // Clean up function.
        // Since we're using dependency array, we need to provide the clean up function, if not we will show the letter twice. NEED FURTHER RESEARCH.
        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [handleKeyUp])

  return (
    <div>
        <div>
            Solution: {solution}
        </div>

        <div>
            Current Guess: {currentGuess}    
        </div>
    </div>
  )
}
