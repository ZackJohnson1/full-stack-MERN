// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage'
import LogPage from './pages/LogPage';
import CreatePage from './pages/CreatePage';
import EditMoviePage from './pages/EditMoviePage';
import OrderPage from './pages/OrderPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import StaffPage from './pages/StaffPage';
import TopicsPage from './pages/TopicsPage';


// Define the function that renders the content in routes using State.
function App() {

  const [match, setMatchToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Zachary J Johnson</h1>
            <p>This app uses MERN.</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    <Route path="/" element={<HomePage />} />
                    <Route path="/log" element={<LogPage setMatch={setMatchToEdit}/>} />
                    <Route path="/create" element={<CreatePage />} /> 
                    <Route path="/update" element={<EditMoviePage matchToEdit={match} />} />
                    <Route path="/contact" element={<ContactPage />} /> 
                    <Route path="/order" element={<OrderPage />} /> 
                    <Route path="/gallery" element={<GalleryPage />} /> 
                    <Route path="/staff" element={<StaffPage />} /> 
                    <Route path="topics" element={<TopicsPage />} />
                </Routes>
              </section>
          </main>

          <footer>
          <p><cite>&copy; Zachary J. Johnson 2023</cite></p>
        </footer>

      </BrowserRouter>
    </>
  );
}

export default App;