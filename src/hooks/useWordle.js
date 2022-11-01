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

    // Handle keyup event and track the currentGuess state. Accept key as arguments. 
    // If user pressed enter, add new guess to the guessList state. 
    const handleKeyUp = ({ key }) => {
        // Submitting the guess
        if (key === 'Enter') {
            // Only add guess if turn is less than and equals to 5
            if (turn > 5) {
                console.log('You have used all of your turn.');
                return;
            }
            
            // No duplicate words.
            if (guessHistory.includes(currentGuess)) {
                console.log('You already tried this word.');
                return;
            }

            // The words must be 5 characters long.
            if (currentGuess.length !== 5) {
                console.log('Word must be 5 characters long.');
                return;
            }

            console.log(currentGuess);
        }

        
        // Deleting the inputted key
        if (key === 'Backspace') {
            setCurrentGuess(prev => prev.slice(0, -1));
            return; 
        }

        // Question: Is it good to use function inside a function? or should we import it? What is the best practice? 
        
        // Using GUARD CLAUSE TECHNIQUE, we create a filter for our inputted letter. 
        // Since the output of the keyup event listener is all button we inputted (literally all button name), we need to filter it out so that the user can only enter the alphabet letters. 
        if (!/^[A-Za-z]$/.test(key)) {
            return;
        }
        
        // Since our wordle only play with 5 letters, we need to filter it out so that the user doesn't enter more than 5 letters.
        if (currentGuess.length >= 5)  {
            return;
        }
        
        setCurrentGuess(prev => prev + key); // Used to track currentGuess by adding new letter (key) to the previous currentGuess. 
    };

    // What useWordle() hook will return?
    return {
        turn, currentGuess, guessList, isCorrect, handleKeyUp
    }
}

export default useWordle;