import Carousel from "../Carousel";

import "./ISOCarousel.scss"

const isoValues = [25, 50, 100, 200, 400, 800];

export default function ISOCarousel() {
  return (
    <Carousel
      slides={isoValues.map((value, i) => {
        return (
          <div key={i} className="iso-slide">
            {value}
          </div>
        );
      })}
    />
  );
}
