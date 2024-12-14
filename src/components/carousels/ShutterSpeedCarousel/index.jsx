import Carousel from "../Carousel";

import "./ShutterSpeedCarousel.scss";

const speedValues = [
  "1/1000",
  "1/500",
  "1/250",
  "1/125",
  "1/60",
  "1/30",
  "1/15",
  "1/8",
  "1/2",
  "1",
  "2",
];

export default function ShutterSpeedCarousel() {
  return (
    <Carousel
      slides={speedValues.map((value, i) => {
        return (
          <div key={i} className="shutter-speed-slide">
            {value}
          </div>
        );
      })}
    />
  );
}
