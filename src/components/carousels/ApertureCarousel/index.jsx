import Carousel from "../Carousel";

import "./ApertureCarousel.scss";

const apertureValues = [25, 50, 100, 200, 400, 800];

export default function ApertureCarousel(currentSlide, onSlideChange) {
  return (
    <Carousel
      currentSlide={currentSlide}
      onSlideChange={onSlideChange}
      slides={apertureValues.map((value, i) => {
        return (
          <div key={i} className="aperture-slide">
            {value}
          </div>
        );
      })}
    />
  );
}
