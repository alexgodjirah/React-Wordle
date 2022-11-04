import { useState } from 'react';

// useWordle() Hook will accept solution as an argument
const useWordle = (solution) => {
    const [turn, setTurn] = useState(0); // To set the turn.
    const [currentGuess, setCurrentGuess] = useState(''); // To track user input. Updated each time handleKeyUp() function is called.
    const [guessList, setGuessList] = useState([...Array(6)]); // To track each guess the user inputted in an array of object (with letter and color as key). Updated each time new guess entered and formatted by formatGuess() function.
    const [guessHistory, setGuessHistory] = useState([]); // To tack each guess the user inputted in an array of string. Used to make sure the user doesn't input the same guess.
    const [isCorrect, setIsCorrect] = useState(false); // To track the answer 
    const [usedKeys, setUsedKeys] = useState({}); // Keep tracks of all the keys we use and what the color should be (letter as key, color as value). {a: 'green', b: 'yellow', c: 'grey'}


    // Format the guess into an array of objects (with letter and color as value).
    // e.g. [{ key: 'a', color: 'yellow' }].
    const formatGuess = () => {
        let solutionArray = [...solution]; // Spread the solution into an array of characters. 
        let guessArray = [...currentGuess].map(e => ( // Spread the guess into an array of character.
            { letter: e, color: 'grey' } // Create an object from each array of characters with letter and color as the key and each letter (from currentGuess) and 'grey' as default value.
        ));

        // Find the green letter
        guessArray.forEach((e, i) => {
            if (solutionArray[i] === e.letter) {
                guessArray[i].color = 'green';
                solutionArray[i] = null; // To prevent double match.
            }
        });

        // Find the yellow letter
        guessArray.forEach((e, i) => {
            if (solutionArray.includes(e.letter) && e.color !== 'green') {
                guessArray[i].color = 'yellow';
                solutionArray[solutionArray.indexOf(e.letter)] = null;
            }
        });

        return guessArray;
    };

    // Add the new guess to the guessList state. Accept formatted guess as the argument. 
    // Update isCorrect state if the guess has the same value with solution.
    // Add one to the turn state.
    const addNewGuess = (formattedGuess) => {
        // If the guess is correct
        if (currentGuess === solution) {
            setIsCorrect(true);
        }

        // Add the currentGuess to the guessList state
        setGuessList(prevGuess => {
            let newGuessList = [...prevGuess];
            newGuessList[turn] = formattedGuess;
            return newGuessList;
        });

        // Add turn
        setTurn(prevTurn => prevTurn + 1);

        // Add the currentGuess to the guessHistory state
        setGuessHistory(prevGuess => {
            return [...prevGuess, currentGuess];
        });

        setUsedKeys(prevKeys => {
            let newKeys = {...prevKeys};
            
            formattedGuess.forEach((l) => {
                const currentColor = newKeys[l.letter];

                if (l.color === 'green') {
                    newKeys[l.letter] = 'green';
                    return;
                }

                if (l.color === 'yellow' && currentColor !== 'green') {
                    newKeys[l.letter] = 'yellow';
                    return;
                }

                if (l.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow') {
                    newKeys[l.letter] = 'grey';
                    return;
                }

            }); 
            return newKeys;
        })

        // Clear currentGuess state
        setCurrentGuess('');
    };

    // Handle keyup event and track the currentGuess state. Accept key as arguments. 
    // If user pressed enter, add new guess to the guessList state. 
    const handleKeyUp = ({ key }) => {
        // Submitting the guess
        if (key === 'Enter') {
            if (currentGuess === solution) {
                setIsCorrect(true);
            }
            
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

            const format = formatGuess();
            addNewGuess(format);
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
        turn, currentGuess, guessList, isCorrect, usedKeys, handleKeyUp, 
    }
}

export default useWordle;