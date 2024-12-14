import { useState } from "react";
import "./Popup.scss";
import { motion, AnimatePresence, useMotionValueEvent } from "motion/react";

export default function Popup({ children, isOpen, onClose }) {
  const [drawChildren, setDrawChildren] = useState(false);

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
            onAnimationStart={() => setDrawChildren(false)}
            onAnimationComplete={() => setDrawChildren(true)}
            className="popup"
          >
            <div
              style={
                drawChildren
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
              className="popup-content-container"
            >
              {children}
            </div>
            <div className="popup-buttons-container">
              <button onClick={() => onClose()}>close</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
