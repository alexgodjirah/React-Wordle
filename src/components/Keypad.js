import React, { useEffect, useState } from 'react'

export default function Keypad(props) {
    const { usedKeys } = props;
    const [letters, setLetters] = useState(null);
    console.log(usedKeys);

    useEffect(() => {
        fetch('http://localhost:3001/letters')
            .then(res => res.json())
            .then(json => {
                setLetters(json);
            });
    }, [])
    
    return (
        <div className='keypad'>
            {
                letters
                    && letters.map(l => {
                        const color = usedKeys[l.key];
                        return (
                            <div key={l.key} className={color} >
                                {l.key}
                            </div>
                        )
                    })
            }
        </div>
    )
}
