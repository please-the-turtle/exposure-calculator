import './Topbar.scss'
import info from './info.svg'
import github from './github.svg'

export default function Topbar() {
    return (
        <div className="topbar-container">
            <div className="topbar-info">
                <button className="topbar-info-button topbar-info-item">
                    <img src={info} alt="information" />
                </button>
                <a target="_blank" rel="noopener noreferrer" href="https://www.github.com" className="topbar-info-link topbar-info-item">
                    <img src={github} alt="github page" />
                </a>
            </div>
        </div>
    )
}