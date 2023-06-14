import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const CreatePage = () => {

    const [opponent, setOpponent]       = useState('');
    const [score, setScore]         = useState('');
    const [location, setLocation] = useState('');
    const [surface, setSurface] = useState('');
    
    const redirect = useNavigate();

    const addMovie = async () => {
        const newMovie = { opponent, score, location, surface };
        const response = await fetch('/matches', {
            method: 'post',
            body: JSON.stringify(newMovie),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`document added`);
            redirect("/");
        } else {
            alert(`document not added status code = ${response.status}`);
            redirect("/");
        }
    };


    return (
        <>
        <article>
            <h2>Add to the collection</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which movie are you adding?</legend>
                    <label for="opponent">Opponent</label>
                    <input
                        type="text"
                        placeholder="Opponent's name"
                        value={opponent}
                        onChange={e => setOpponent(e.target.value)} 
                        id="opponent" />
                    
                    <label for="score">Score</label>
                    <input
                        type="number"
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

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addMovie}
                        id="submit"
                    >Add</button> to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default CreatePage;