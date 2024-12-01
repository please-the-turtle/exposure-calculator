import { useState } from 'react'
import Popup from '../Popup'
import './Topbar.scss'
import info from './info.svg'
import github from './github.svg'

export default function Topbar() {
    const [isInfoPopupOpen, setInfoPopupOpen] = useState(false)

    return (
        <>
            <InfoPopup isOpen={isInfoPopupOpen} onClose={() => setInfoPopupOpen(false)} />
            <div className="topbar-container">
                <div className="topbar-info">
                    <button onClick={() => setInfoPopupOpen(true)} className="topbar-info-button topbar-info-item">
                        <img src={info} alt="information" />
                    </button>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.github.com" className="topbar-info-link topbar-info-item">
                        <img src={github} alt="github page" />
                    </a>
                </div>
            </div>
        </>
    )
}

function InfoPopup({ isOpen, onClose }) {
    return (
        <Popup isOpen={isOpen} onClose={onClose}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta risus at ante dignissim consequat. In ut facilisis lacus. Curabitur vestibulum porttitor augue eu commodo. Pellentesque egestas feugiat augue at luctus. Cras vitae sem nec risus condimentum laoreet nec nec eros. Nullam mi magna, euismod sit amet condimentum ac, rhoncus dictum libero. Duis facilisis tortor massa, nec dapibus lorem iaculis imperdiet. Ut id nunc ac nisl lobortis sodales id vel sapien. In mollis maximus consequat.
            Fusce sollicitudin accumsan urna nec pulvinar. Ut felis felis, tristique eget cursus et, vestibulum vitae erat. Mauris blandit ipsum lorem, sed posuere nisi egestas ut. Aliquam aliquet tincidunt iaculis. Praesent iaculis ut lacus vitae sollicitudin. Praesent in sem cursus, hendrerit massa eget, volutpat nulla. Maecenas nec leo nibh. Pellentesque ut augue tempus, tempor nulla a, mollis neque. Vivamus sapien diam, venenatis sit amet gravida sit amet, vestibulum eget purus. Suspendisse commodo erat massa, luctus pellentesque est cursus id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce ipsum nulla, congue a pretium nec, vestibulum quis sapien. Praesent viverra volutpat aliquam. Duis porta vehicula erat, in finibus nibh elementum sed. Suspendisse quis bibendum magna. 
        </Popup>
    )
}