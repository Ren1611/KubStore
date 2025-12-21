import { useState } from "react";
import SlideItem from "./SlideItem";

const slides = [
  {
    id: 1,
    title: "New Season Arrivals",
    text: "Check out all the new trends",
    image: "/slider1.png",
  },
  {
    id: 2,
    title: "Summer Sale",
    text: "Up to 50% off",
    image: "/slider2.png",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }

  function prevSlide() {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }

  return (
    <div className="slider">
      <SlideItem slide={slides[current]} />

      <button onClick={prevSlide}>←</button>
      <button onClick={nextSlide}>→</button>
    </div>
  );
};

export default Slider;
