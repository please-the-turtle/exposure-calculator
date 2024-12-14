import "./Title.scss";

export default function Title({ text, icon }) {
  return (
    <div className="title-container">
      <div className="title-icon">
        <img src={icon} />
      </div>
      <div className="title-text">{text}</div>
    </div>
  );
}
