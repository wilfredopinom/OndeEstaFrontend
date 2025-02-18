// src/components/Carousel.js
import { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    "https://img.daisyui.com/images/stock/photo-1494232410401-b3f8cf11e0bb.webp",
    "https://img.daisyui.com/images/stock/photo-1501594907350-7c7f6b6946a9.webp",
    "https://img.daisyui.com/images/stock/photo-1501594907320-5d8c3be24ec4.webp"
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative mb-12">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Galería de Imágenes</h3>
      
      <div className="relative w-full h-64 overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        />
        
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          &#10094;
        </button>
        
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          &#10095;
        </button>
      </div>
      
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
