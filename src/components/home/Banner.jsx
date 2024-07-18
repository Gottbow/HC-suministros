import React, { useState, useEffect, useRef } from "react";
import RightArrow from "../../assets/iconsjsx/RightArrow";
import LeftArrow from "../../assets/iconsjsx/LeftArrow";

// Hook para detectar el tamaño de la pantalla
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", documentChangeHandler);
    return () => mediaQueryList.removeEventListener("change", documentChangeHandler);
  }, [query]);

  return matches;
};

export default function Banner() {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Imágenes para pantallas grandes
  const largeSlides = [
    "/src/assets/banners/banner1.jpg",
    "/src/assets/banners/banner2.jpg",
    "/src/assets/banners/banner3.jpg",
    "/src/assets/banners/banner4.jpg",
    "/src/assets/banners/banner5.jpg",
    "/src/assets/banners/banner6.jpg",
  ];

  // Imágenes para pantallas pequeñas
  const smallSlides = [
    "/src/assets/bannersmob/bannermob1.jpg",
    "/src/assets/bannersmob/bannermob2.jpg",
    "/src/assets/bannersmob/bannermob3.jpg",
    "/src/assets/bannersmob/bannermob4.jpg",
    "/src/assets/bannersmob/bannermob5.jpg",
    "/src/assets/bannersmob/bannermob6.jpg",
  ];

  const slides = isSmallScreen ? smallSlides : largeSlides;

  const intervalRef = useRef(null);

  useEffect(() => {
    const resetInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(() => {
        handleNextSlide();
      }, 3000);
    };

    resetInterval();

    return () => clearInterval(intervalRef.current);
  }, [currentSlide, slides.length]);

  const handleNextSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setIsFading(false);
    }, 500);
  };

  const goToSlide = (index) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsFading(false);
    }, 500);
  };

  const goToPrevSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      setIsFading(false);
    }, 500);
  };

  const goToNextSlide = () => {
    handleNextSlide();
  };

  return (
    <>
      <div className="carousel relative">
        <div className={`carousel-image w-full h-full object-cover transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          <img className="mx-auto" src={slides[currentSlide]} alt="" />
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 md:w-10 rounded-full cursor-pointer hover:bg-opacity-80 ${
                index === currentSlide ? "bg-red-500 bg-opacity-90" : "bg-white bg-opacity-40"
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-20 text-white p-2 rounded-full"
          onClick={goToPrevSlide}
        >
          <LeftArrow />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-20 text-white p-2 rounded-full"
          onClick={goToNextSlide}
        >
          <RightArrow />
        </button>
      </div>
    </>
  );
}
