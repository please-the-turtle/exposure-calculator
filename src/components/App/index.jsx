import { useEffect, useState } from "react";
import Card from "../Card";
import Carousel from "../Carousel";
import {
  evItems,
  isoItems,
  apertureItems,
  shutterSpeedItems,
} from "../../slides";
import { getAperture, getShutterSpeed, findClosestInSlideItems } from "./math";
import Topbar from "../Topbar";
import InfoButtons from "../InfoButtons";
import Warning from "../Warning";
import "./App.scss";
import GradientBackground from "../GradientBackground";
import { ThemeProvider } from "../ThemeProvider";
import { darkCold } from "../ThemeProvider/themes";

function App() {
  const [evCurrentSlide, setEvCurrentSlide] = useState(0);
  const [isoCurrentSlide, setIsoCurrentSlide] = useState(0);
  const [apertureCurrentSlide, setApertureCurrentSlide] = useState(0);
  const [ssCurrentSlide, setSsCurrentSlide] = useState(0);

  const [theme, setTheme] = useState(darkCold);
  const [warningMessage, setWarningMessage] = useState("Underexposed");

  function getCurrentValues() {
    const aperture = apertureItems[apertureCurrentSlide].value;
    const shutterSpeed = shutterSpeedItems[ssCurrentSlide].value;
    const iso = isoItems[isoCurrentSlide].value;
    const ev = evItems[evCurrentSlide].value;

    return { aperture, shutterSpeed, iso, ev };
  }

  useEffect(() => {
    const { shutterSpeed, iso, ev } = getCurrentValues();
    const newAperture = getAperture(shutterSpeed, ev, iso);
    const newSlideIndex = findClosestInSlideItems(apertureItems, newAperture);
    setApertureCurrentSlide(newSlideIndex);
    setTheme(evItems[evCurrentSlide].theme);
  }, [evCurrentSlide]);

  useEffect(() => {
    const { shutterSpeed, iso, ev } = getCurrentValues();
    const newAperture = getAperture(shutterSpeed, ev, iso);
    const newSlideIndex = findClosestInSlideItems(apertureItems, newAperture);
    setApertureCurrentSlide(newSlideIndex);
  }, [isoCurrentSlide]);

  useEffect(() => {
    const { aperture, iso, ev } = getCurrentValues();
    const newShutterSpeed = getShutterSpeed(aperture, ev, iso);
    const newSlideIndex = findClosestInSlideItems(
      shutterSpeedItems,
      newShutterSpeed
    );
    setSsCurrentSlide(newSlideIndex);
  }, [apertureCurrentSlide]);

  useEffect(() => {
    const { shutterSpeed, iso, ev } = getCurrentValues();
    const newAperture = getAperture(shutterSpeed, ev, iso);
    const newSlideIndex = findClosestInSlideItems(apertureItems, newAperture);
    setApertureCurrentSlide(newSlideIndex);
  }, [ssCurrentSlide]);

  return (
    <ThemeProvider theme={theme}>
      <div className="wrapper">
        <GradientBackground />
        <Topbar>
          <Warning message={warningMessage} popupInfo="So bad" />
          <InfoButtons />
        </Topbar>
        <main>
          <Card header="🔆 Brightness (EV)">
            <Carousel
              slides={evItems}
              currentSlide={evCurrentSlide}
              onSlideChange={setEvCurrentSlide}
            />
          </Card>
          <Card header="👁️ ISO">
            <Carousel
              slides={isoItems}
              currentSlide={isoCurrentSlide}
              onSlideChange={setIsoCurrentSlide}
            />
          </Card>
          <Card header="🫣 Aperture">
            <Carousel
              slides={apertureItems}
              currentSlide={apertureCurrentSlide}
              onSlideChange={setApertureCurrentSlide}
            />
          </Card>
          <Card header="⏲️ Shutter speed">
            <Carousel
              slides={shutterSpeedItems}
              currentSlide={ssCurrentSlide}
              onSlideChange={setSsCurrentSlide}
            />
          </Card>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
