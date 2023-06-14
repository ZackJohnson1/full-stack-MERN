import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

// Images array
const images = [
    {
        original: 'images/botany-at-UC-Santa-Barbara.jpeg',
        thumbnail: 'images/botany-at-UC-Santa-Barbara.jpeg',
        description: `University of California, Santa Barbara purple flower`,
        originalHeight: '450px',
    },
    {
        original: 'images/costa-rican-colones-money.JPG',
        thumbnail: 'images/costa-rican-colones-money.JPG',
        description: `10,000 Colones bills from Costa Rica`,
        originalHeight: '450px',
    },
    {
        original: 'images/golfing-in-the-redwoods.jpeg',
        thumbnail: 'images/golfing-in-the-redwoods.jpeg',
        description: `Golf course in Redwood Forrest`,
        originalHeight: '450px',
    },
    {
        original: 'images/half-pipe-in-Costa-rica.jpeg',
        thumbnail: 'images/half-pipe-in-Costa-rica.jpeg',
        description: `Skateboarding Half Pipe`,
        originalHeight: '450px',
    },
    {
        original: 'images/joshua-tree-national-park.jpeg',
        thumbnail: 'images/joshua-tree-national-park.jpeg',
        description: `Joshua Tree National Park`,
        originalHeight: '450px',
    },
    {
        original: 'images/mission-san-xavier-del-bac.jpeg',
        thumbnail: 'images/mission-san-xavier-del-bac.jpeg',
        description: `San Xavier Del Bac Mission, Tuscon, Arizona`,
        originalHeight: '450px',
    },
    {
        original: 'images/tennis-tournament-indian-wells-california.jpeg',
        thumbnail: 'images/tennis-tournament-indian-wells-california.jpeg',
        description: `Indian Wells Masters ATP 1000 Tennis Tournament`,
        originalHeight: '450px',
    },
    {
        original: 'images/track-world-championships-eugene-oregon.jpeg',
        thumbnail: 'images/track-world-championships-eugene-oregon.jpeg',
        description: `Track and Field World Championships, Hayward Field, Eugene, Oregon`,
        originalHeight: '450px',
    },
    {
        original: 'images/truck-in-Sierra-mountains.jpeg',
        thumbnail: 'images/truck-in-Sierra-mountains.jpeg',
        description: `My truck near Mammoth Mountain in the Eastern Sierras.`,
        originalHeight: '450px',
    },
    {
        original: 'images/off-roading-yucca-valley.jpeg',
        thumbnail: 'images/off-roading-yucca-valley.jpeg',
        description: `Offroading near Johnson Valley OHV`,
        originalHeight: '450px',
    },
];

// GalleryPage function
const GalleryPage = () => {
    return (
        <>
            <h2>Gallery</h2>
            <p>Gallery description</p>
            <article>
                <ImageGallery items={images} />
            </article>
        </>
    );
};

export default GalleryPage;
