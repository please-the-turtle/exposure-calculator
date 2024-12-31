import { useEffect, useRef, useState } from "react";
import Card from "../Card";
import Carousel from "../Carousel";
import {
  evItems,
  isoItems,
  apertureItems,
  shutterSpeedItems,
} from "../../slides";
import {
  getAperture,
  getShutterSpeed,
  findClosestInSlideItems,
  getEv,
} from "./math";
import Topbar from "../Topbar";
import InfoButtons from "../InfoButtons";
import Warning from "../Warning";
import "./App.scss";
import GradientBackground from "../GradientBackground";
import { ThemeProvider } from "../ThemeProvider";
import { darkCold } from "../ThemeProvider/themes";
import { div } from "motion/react-client";

export default function App() {
  const [evCurrentSlide, setEvCurrentSlide] = useState(11);
  const [isoCurrentSlide, setIsoCurrentSlide] = useState(3);
  const [apertureCurrentSlide, setApertureCurrentSlide] = useState(0);
  const [ssCurrentSlide, setSsCurrentSlide] = useState(0);

  const [theme, setTheme] = useState(darkCold);
  const [warning, setWarning] = useState();

  function getCurrentValues() {
    const aperture = apertureItems[apertureCurrentSlide].value;
    const shutterSpeed = shutterSpeedItems[ssCurrentSlide].value;
    const iso = isoItems[isoCurrentSlide].value;
    const ev = evItems[evCurrentSlide].value;

    return { aperture, shutterSpeed, iso, ev };
  }

  useEffect(() => {
    setTheme(evItems[evCurrentSlide].theme);
  }, [evCurrentSlide]);

  useEffect(() => {
    const { shutterSpeed, iso, ev } = getCurrentValues();
    const newAperture = getAperture(shutterSpeed, ev, iso);
    const newSlideIndex = findClosestInSlideItems(apertureItems, newAperture);
    setApertureCurrentSlide(newSlideIndex);
  }, [isoCurrentSlide, evCurrentSlide]);

  useEffect(() => {
    let { aperture, iso, ev } = getCurrentValues();
    let newShutterSpeed = getShutterSpeed(aperture, ev, iso);
    let newSlideIndex = findClosestInSlideItems(
      shutterSpeedItems,
      newShutterSpeed
    );

    const realEv = getEv(aperture, shutterSpeedItems[newSlideIndex].value, iso);
    if (Math.abs(ev - realEv) >= 1) {
      newShutterSpeed = getShutterSpeed(aperture, ev, iso);
      newSlideIndex = findClosestInSlideItems(
        shutterSpeedItems,
        newShutterSpeed
      );
    }

    setSsCurrentSlide(newSlideIndex);
  }, [apertureCurrentSlide]);

  useEffect(() => {
    const { shutterSpeed, iso, ev } = getCurrentValues();
    const newAperture = getAperture(shutterSpeed, ev, iso);
    const newSlideIndex = findClosestInSlideItems(apertureItems, newAperture);
    setApertureCurrentSlide(newSlideIndex);
  }, [ssCurrentSlide]);

  useEffect(() => {
    const { ev, aperture, shutterSpeed, iso } = getCurrentValues();
    const realEv = getEv(aperture, shutterSpeed, iso);
    if (ev - realEv < 0) {
      setWarning({
        message: "Underexposed",
        popupContent: <WarningContent currentValues={getCurrentValues()} />,
      });
    } else if (ev - realEv > 1) {
      setWarning({
        message: "Overexposed",
        popupContent: <WarningContent currentValues={getCurrentValues()} />,
      });
    } else {
      setWarning({});
    }
  }, [apertureCurrentSlide, ssCurrentSlide, evCurrentSlide, isoCurrentSlide]);

  return (
    <ThemeProvider theme={theme}>
      <div className="wrapper">
        <GradientBackground />
        <Topbar>
          <Warning
            message={warning?.message}
            popupContent={warning?.popupContent}
          />
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

function WarningContent({ currentValues }) {
  const [realEv, setRealEv] = useState();
  const [shutterSpeed, setShutterSpeed] = useState();

  useEffect(() => {
    const realEv = getEv(
      currentValues.aperture,
      currentValues.shutterSpeed,
      currentValues.iso
    );
    setRealEv(Math.round(realEv));
    setShutterSpeed(
      getShutterSpeed(
        currentValues.aperture,
        currentValues.ev,
        currentValues.iso
      ).toFixed(4)
    );
  }, []);

  return (
    <>
      <h3>
        The frame will be too {currentValues.ev < realEv ? "dark" : "bright"}.
      </h3>
      <p>
        <b>Your EV: </b>
        {currentValues.ev}
      </p>
      <p>
        <b>EV for current configuration: </b>
        {realEv}({currentValues.ev - realEv})
      </p>
      <p>
        <b>Shutter speed for correct exposure: </b>
        {shutterSpeed}s
      </p>
    </>
  );
}
