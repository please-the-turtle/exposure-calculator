import React, { useState } from "react";
import { motion } from "framer-motion";
import "./TabPanel.scss";
import { useTheme } from "../ThemeProvider";

export default function TabPanel({ children }) {
  const [activeTab, setActiveTab] = useState(0);
  const { theme } = useTheme();

  return (
    <div className="tab-panel-container">
      <div className="tab-panel-tabs-container">
        {React.Children.map(children, (child, i) => {
          let title = i;
          if (child.props.title) {
            title = child.props.title;
          }
          return (
            <motion.button
              className={`tab-button ${
                activeTab === i ? "tab-button-active" : ""
              }`}
              onClick={() => {
                setActiveTab(i);
              }}
              // style={activeTab === i ? { backgroundColor: theme.accent } : {}}
              animate={{backgroundColor: activeTab === i ? theme.accent : "#FFFFFFFF"}}
              transition={{
                duration: 0.3,
              }}
            >
              {title}
            </motion.button>
          );
        })}
      </div>
      <div className={`tab-panel-content-container`}>{children[activeTab]}</div>
    </div>
  );
}
