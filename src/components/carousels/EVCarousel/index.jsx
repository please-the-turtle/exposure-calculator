import Carousel from "../Carousel";

import "./EVCarousel.scss";
import ev15 from "./ev-icons/15.svg";
import ev12 from "./ev-icons/12.svg";
import ev11 from "./ev-icons/11.svg";
import ev8 from "./ev-icons/8.svg";
import ev7 from "./ev-icons/7.svg";
import ev6 from "./ev-icons/6.svg";
import ev5 from "./ev-icons/5.svg";
import ev3 from "./ev-icons/3.svg";

const evSlides = [
  {
    icon: ev3,
    value: "3",
    description: "Streetlights Fireworks",
  },
  {
    // icon: ev4,
    value: "4",
    description: "Floodlit buildings Bright streetlights",
  },
  {
    icon: ev5,
    value: "5",
    description: "Average home night interior",
  },
  {
    icon: ev6,
    value: "6",
    description: "Bright night interior Shady day interior",
  },
  {
    icon: ev7,
    value: "7",
    description: "Indoor sports Stage shows",
  },
  {
    icon: ev8,
    value: "8",
    description: "Floodlit stadium Bright day interior",
  },
  {
    // icon: ev9,
    value: "9",
    description: "Neon lights Spot-lit subjects",
  },
  {
    // icon: ev10,
    value: "10",
    description: "Immediately after sunset",
  },
  {
    icon: ev11,
    value: "11",
    description: "Open shade Sunsets",
  },
  {
    icon: ev12,
    value: "12",
    description: "Heavily overcast day",
  },
  {
    // icon: ev13,
    value: "13",
    description: "Bright cloudy day (no shadows)",
  },
  {
    // icon: ev14,
    value: "14",
    description: "Hazy sunshine (soft shadows)",
  },
  {
    icon: ev15,
    value: "15",
    description: "Bright sunny day (hard shadows)",
  },
  {
    // icon: ev16,
    value: "16",
    description: "Bright sun on sand or snow",
  },
];

function EVSlide({ value, icon, description }) {
  return (
    <div className="ev-slide">
      <div className="ev-slide-icon-container">
        <div className="ev-slide-icon-value">{value}</div>
        {/* {icon && <img src={icon} />} */}
      </div>
      <div className="ev-slide-description">{description}</div>
    </div>
  );
}

export default function EVCarousel(currentSlide, onSlideChange) {
  return (
    <Carousel
      currentSlide={currentSlide}
      onSlideChange={onSlideChange}
      slides={evSlides.map((slide, i) => {
        return (
          <EVSlide
            key={i}
            icon={slide.icon}
            value={slide.value}
            description={slide.description}
          />
        );
      })}
    />
  );
}
