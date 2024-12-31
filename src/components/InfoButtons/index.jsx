import { useState } from "react";
import TabPanel from "../TabPanel/TabPanel";
import Tab from "../TabPanel/Tab";
import Popup from "../Popup";
import AboutInfo from "../AboutInfo";
import EvInfo from "../EvInfo";
import "./InfoButtons.scss";
import info from "./info.svg";
import github from "./github.svg";

export default function InfoButtons() {
  const [isInfoPopupOpen, setInfoPopupOpen] = useState(false);

  return (
    <>
      <InfoPopup
        isOpen={isInfoPopupOpen}
        onClose={() => setInfoPopupOpen(false)}
      />
      <div className="info-container">
        <button onClick={() => setInfoPopupOpen(true)} className="info-item">
          <img src={info} alt="information" />
        </button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/please-the-turtle/exposure-calculator"
          className="info-item"
        >
          <img src={github} alt="github page" />
        </a>
      </div>
    </>
  );
}

function InfoPopup({ isOpen, onClose }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <TabPanel>
        <Tab title="About">
          <AboutInfo />
        </Tab>
        <Tab title="EV values">
          <EvInfo />
        </Tab>
      </TabPanel>
    </Popup>
  );
}
