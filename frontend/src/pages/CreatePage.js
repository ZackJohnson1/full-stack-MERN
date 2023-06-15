import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const CreatePage = () => {

    const [opponent, setOpponent]       = useState('');
    const [score, setScore]         = useState('');
    const [location, setLocation] = useState('');
    const [surface, setSurface] = useState('');
    const [winners, setWinners] = useState('');
    const [unforcedErrors, setUnforcedErrors] = useState('');
    
    const redirect = useNavigate();

    const addMatch = async () => {
        const newMatch = { opponent, score, location, surface, winners, unforcedErrors };
        const response = await fetch('/matches', {
            method: 'post',
            body: JSON.stringify(newMatch),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Match added`);
            redirect("/");
        } else {
            alert(`Match not added status code = ${response.status}`);
            redirect("/");
        }
    };


    return (
        <>
        <article>
            <h2>Add a tennis match to the Log</h2>
            <p>This page allows you to record information about your most recent tennis matches and add them to a log.</p>
            <p>Please record who you played, the score, the number of winners and unforced errors, the location, the surface and lastly, the date the match was played.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Please enter the relevant information about the match you want to log.</legend>
                    <label for="opponent">Who did you play?</label>
                    <input
                        type="text"
                        placeholder="Opponent's name"
                        value={opponent}
                        onChange={e => setOpponent(e.target.value)} 
                        id="opponent" />
                    
                    <label for="score">Score</label>
                    <input
                        type="text"
                        value={score}
                        placeholder="Score of the Match"
                        onChange={e => setScore(e.target.value)} 
                        id="score" />

                    <label for="location">location</label>
                    <input
                        type="text"
                        placeholder="where did the match take place"
                        value={location}
                        onChange={e => setLocation(e.target.value)} 
                        id="location" />

                    <label for="surface">surface</label>
                    <input
                        type="text"
                        placeholder="What surface was the match played on?"
                        value={surface}
                        onChange={e => setSurface(e.target.value)} 
                        id="surface" />

                    <label for="winners">winners</label>
                    <input
                        type="number"
                        placeholder="How many winners did you hit?"
                        value={winners}
                        onChange={e => setWinners(e.target.value)} 
                        id="winners" />

                    <label for="unforcedErrors">unforced errors</label>
                    <input
                        type="number"
                        placeholder="How many unforced errors did you have?"
                        value={unforcedErrors}
                        onChange={e => setUnforcedErrors(e.target.value)} 
                        id="unforcedErrors" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addMatch}
                        id="submit"
                    >Add</button> to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default CreatePage;