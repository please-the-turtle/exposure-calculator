import { div } from "motion/react-client";
import "./Card.scss";

export default function Card({ children, header, icon }) {
  return (
    <div className="card">
      <div className="card-header">
        {icon && <img src={icon} />}
        {header}
      </div>
      {children}
    </div>
  );
}
