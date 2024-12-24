import "./Card.scss";

export default function Card({ children, header, topRight }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">{header}</div>
        <div className="card-top-right">{topRight}</div>
      </div>
      {children}
    </div>
  );
}
