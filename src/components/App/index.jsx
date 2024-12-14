import { useRef, useState } from "react";
import Card from "../Card";
import ApertureCarousel from "../carousels/ApertureCarousel";
import EVCarousel from "../carousels/EVCarousel";
import ISOCarousel from "../carousels/ISOCarousel";
import ShutterSpeedCarousel from "../carousels/ShutterSpeedCarousel";
import Topbar from "../Topbar";
import "./App.scss";

function App() {
  const evCurrentSlide = useState(0)
  const isoCurrentSlide = useState(0)
  const apertureCurrentSlide = useState(0)
  const ssCurrentSlide = useState(0)

  const onEvChange = () => {
    console.log(evRef.current.activeIndex);
  };

  return (
    <div className="wrapper">
      <Topbar />
      <main>
        <Card header="🔆 Brightness (EV)">
          <EVCarousel
            onSwiper={(swiper) => {
              evRef.current = swiper;
            }}
            onSlideChange={() => console.log('slide change')}
          />
        </Card>
        <Card header="🔆 ISO">
          <ISOCarousel
            onSwiper={(swiper) => {
              isoRef.current = swiper;
            }}
          />
        </Card>
        <Card header="🔆 Aperture">
          <ApertureCarousel
            onSwiper={(swiper) => {
              apertureRef.current = swiper;
            }}
          />
        </Card>
        <Card header="🔆 Shutter speed">
          <ShutterSpeedCarousel
            onSwiper={(swiper) => {
              ssRef.current = swiper;
            }}
          />
        </Card>
      </main>
    </div>
  );
}

export default App;
