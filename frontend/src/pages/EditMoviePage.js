import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditMatchPage = ({ matchToEdit }) => {
 
    const [opponent, setOpponent]       = useState(matchToEdit.opponent);
    const [score, setScore]         = useState(matchToEdit.score);
    const [location, setLocation] = useState(matchToEdit.location);
    const [surface, setSurface] = useState(matchToEdit.surface);
    
    const redirect = useNavigate();

    const editMatch = async () => {
        const response = await fetch(`/matches/${matchToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                opponent: opponent, 
                score: score, 
                location: location,
                surface: surface
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`document edited`);
        } else {
            const errMessage = await response.json();
            alert(`document not edited; status ${response.status}. ${errMessage.Error}`);
        }
        redirect("/");
    }

    return (
        <>
        <article>
            <h2>Edit a match in the collection</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which match are you adding?</legend>
                    <label for="opponent">Opponent Name</label>
                    <input
                        type="text"
                        value={opponent}
                        onChange={e => setOpponent(e.target.value)} 
                        id="opponent" />
                    
                    <label for="score">Score</label>
                    <input
                        type="number"
                        value={score}
                        onChange={e => setScore(e.target.value)} 
                        id="score" />

                    <label for="location">Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={e => setLocation(e.target.value)} 
                        id="location" />

                    <label for="surface">Surface</label>
                    <input
                        type="text"
                        value={surface}
                        onChange={e => setSurface(e.target.value)} 
                        id="surface" />    

                    <label for="submit">
                    <button
                        onClick={editMatch}
                        id="submit"
                    >Save</button> updates to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditMatchPage;