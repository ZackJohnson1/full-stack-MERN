import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Match({ match, onEdit, onDelete }) {
    return (
        <tr>
            <td>{match.opponent}</td>
            <td>{match.score}</td>
            <td>{match.location}</td>
            <td>{match.surface}</td>
            <td><MdDeleteForever onClick={() => onDelete(match._id)} /></td>
            <td><MdEdit onClick={() => onEdit(match)} /></td>
        </tr>
    );
}

export default Match;