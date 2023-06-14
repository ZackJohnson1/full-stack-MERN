import React, { useState } from 'react';
import StaffRow from "../components/StaffRow.js"

const StaffPage = () => {
  const [results, setResults] = useState([]);

  const fetchData = (url) => {
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then(data => {
        setResults(data.results);
      })
      .catch((error) => {
        alert(`There was a problem with the fetch operation: ${error.message}`);
      });
  }

  return (
    <>
      <h2>Staff Information</h2>
      <article>
        <p>This page allows you to fetch random staff data. You can either request data from the browser or directly from the server. The staff data will then populate in the table below.</p>
        <button onClick={() => fetchData('https://randomuser.me/api/?results=10')}>Fetch Data from Browser</button>
        <button onClick={() => fetchData('https://randomuser.me/api/?results=10')}>Fetch Data from Server</button>
        <table>
          <thead>
            <tr>
              <th>Portrait</th>
              <th>Name/Email</th>
              <th>Telephone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {results.map((person, i) => <StaffRow person={person} key={i} />)}
          </tbody>
        </table>
      </article>
    </>
  );
} 

export default StaffPage;
