import { useState } from 'react';

// useWordle() Hook will accept solution as an argument
const useWordle = (solution) => {
    const [turn, setTurn] = useState(0); // To set the turn.
    const [currentGuess, setCurrentGuess] = useState(''); // To track user input. Updated each time handleKeyUp() function is called.
    const [guessList, setGuessList] = useState([...Array(6)]); // To track each guess the user inputted in an array of object (with letter and color as key). Updated each time new guess entered and formatted by formatGuess() function.
    const [guessHistory, setGuessHistory] = useState([]); // To tack each guess the user inputted in an array of string. Used to make sure the user doesn't input the same guess.
    const [isCorrect, setIsCorrect] = useState(false); // To track the answer 


    // Format the guess into an array of objects (with letter and color as value).
    // e.g. [{ key: 'a', color: 'yellow' }].
    const formatGuess = () => {

    };

    // Add the new guess to the guessList state.
    // Update isCorrect state if the guess has the same value with solution.
    // Add one to the turn state.
    const addNewGuess = () => {

    };

    // Handle keyup event and track the current guess.
    // If user pressed enter, add new guess to the guessList state. 
    const handleKeyUp = () => {

    };
}

export default useWordle;