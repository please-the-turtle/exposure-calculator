import './Popup.scss'

export default function Popup({ children, isOpen, onClose }) {
    return (
        <div className={isOpen ? "popup-container" : "popup-container hidden"}>
            <div className="popup">
                <div className="popup-content-container">
                    {children}
                </div>
                <div className="popup-buttons-container">
                    <button onClick={() => onClose()}>Close</button>
                </div>
            </div>
        </div>
    )
}