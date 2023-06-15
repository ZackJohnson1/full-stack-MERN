import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MatchList from '../components/MatchList';

function LogPage({ setMatch }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [matches, setMatches] = useState([]);

    // RETRIEVE the entire list of movies
    const loadMatches = async () => {
        const response = await fetch('/matches');
        const matches = await response.json();
        setMatches(matches);
    } 
    

    // UPDATE a single movie
    const onEditMatch = async match => {
        setMatch(match);
        redirect("/update");
    }


    // DELETE a single movie  
    const onDeleteMatch = async _id => {
        const response = await fetch(`/matches/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/matches');
            const matches = await getResponse.json();
            setMatches(matches);
        } else {
            console.error(`Failed to delete movie with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the movies
    useEffect(() => {
        loadMatches();
    }, []);

    // DISPLAY the movies
    return (
        <>
            <h2>Completed Matches</h2>
            <p>Paragraph about this page.</p>
            <MatchList 
                matches={matches} 
                onEdit={onEditMatch} 
                onDelete={onDeleteMatch} 
            />
        </>
    );
}

export default LogPage;