import React from 'react';
import Match from './Match';

function MatchList({ matches, onDelete, onEdit }) {
    return (
        <table id="matches">
            <caption>Add and Edit Matches</caption>
            <thead>
                <tr>
                    <th>Opponent</th>
                    <th>Score</th>
                    <th>Location</th>
                    <th>Surface</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {matches.map((match, i) => 
                    <Match 
                        match={match} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default MatchList;
