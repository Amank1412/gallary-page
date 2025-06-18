import React from "react";
import "./GalleryGrid.css";

const images = [
  "https://placehold.co/300x200?text=Image+1",
  "https://placehold.co/300x200?text=Image+2",
  "https://placehold.co/300x200?text=Image+3",
  "https://placehold.co/300x200?text=Image+4",
  "https://placehold.co/300x200?text=Image+5",
  "https://placehold.co/300x200?text=Image+6",
];

const GalleryGrid = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
