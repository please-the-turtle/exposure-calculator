import { useState } from "react";
import Popup from "../Popup";
import { motion, AnimatePresence } from "motion/react";
import "./Warning.scss";
import dotsIcon from "./dots.svg";

export default function Warning({ message, popupContent }) {
  const [isInfoPopupOpen, setInfoPopupOpen] = useState(false);

  return (
    <>
      {popupContent && (
        <Popup isOpen={isInfoPopupOpen} onClose={() => setInfoPopupOpen(false)}>
          <h2 className="warning-popup-header">{message}</h2>
          <div className="warning-popup-content">{popupContent}</div>
        </Popup>
      )}
      <AnimatePresence>
        {message && (
          <motion.div
            key={message}
            initial={{ y: "-150%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-150%" }}
            className="warning-container"
          >
            <div className="warning">
              <p>🙀</p>
              <div className="warning-message">{message}</div>
              {popupContent && (
                <button
                  className="warning-info-button"
                  onClick={() => setInfoPopupOpen(true)}
                >
                  <img src={dotsIcon} alt="more info" />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
