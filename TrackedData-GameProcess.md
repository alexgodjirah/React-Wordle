# Tracked Data
### Solution
---
* 5 letter string, e.g. `'drain'`

<br>

### Past Guess
---
* An array of past guess
* Each past guess is an array of letter objects `[{}, {}, {}, {}, {}]`.
* Each object represents a letter in the guess word `{letter: 'a', color: 'yellow'}`.

<br>

### Current Guess
---
* String `'hello'`.

<br>

### Keypad Letters
---
* Array of letter objects `[{key: a, color: 'green'}, {}, {}, ...]`.

<br>

### Number of Turns
---
* An integer 0 - 6.

<br>
<br>
<br>

# Game Process
### Entering Words
---
* User enters a letter & a square is filled with that letter.
* When a user hits delete, it deletes the previous letter.
* When a user hits enter, it submits the word.
    * If all squares are not filled with letters, then the word is not submitted.
    * If that word has already been used in a previous guess, then the word is not submitted.

<br>

### Checking Submitted Words
---
* Each letter is checked to see if it mathces to the solution.
* Each letter is assigned a color based on it's inclusion in the solution.
    * Exact matches (correct position in the solution) are green.
    * Partial matches (in the solution but not the corrent position) are yellow.
    * None-matches (not in the solution at) are grey.
* The guess is added th grid with the correct colors
* The current guess moves to the next row.
* The keypad letterare updated (colors).

<br>

### Ending the Game
---
* When the guessed word fully matches the solution:
    * Modal to say `'Well Done'`.
* When the user runs out of guesses:
    * Modal to say `'Unlucky'`.