import { useState } from "react";
import "./Popup.scss";
import { motion, AnimatePresence, useMotionValueEvent } from "motion/react";

export default function Popup({ children, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={"popup-container"}
        >
          <motion.div
            initial={{ scale: 0, translateY: "40vh" }}
            animate={{ scale: 1, translateY: "0" }}
            exit={{ scale: 0.5, translateY: "40vh" }}
            className="popup"
          >
            <div className="popup-content-container">{children}</div>
            <div className="popup-buttons-container">
              <button onClick={() => onClose()}>close</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
