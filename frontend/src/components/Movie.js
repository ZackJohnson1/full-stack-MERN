import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Movie({ movie, onEdit, onDelete }) {
    return (
        <tr>
            <td>{movie.opponent}</td>
            <td>{movie.score}</td>
            <td>{movie.location}</td>
            <td><MdDeleteForever onClick={() => onDelete(movie._id)} /></td>
            <td><MdEdit onClick={() => onEdit(movie)} /></td>
        </tr>
    );
}

export default Movie;