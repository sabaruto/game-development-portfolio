import { useContext } from 'react';
import SetOrientationStyle from '../../../Common/Orientation/Orientation';
import styles from '../button.module.css'
import { OrientationContext } from '../../../App/App';


function ExternalLink(props: {imageName: string, url: string, children: string}) {
    const linkStyles = SetOrientationStyle(
        styles.imageButton,
        styles.imageButton,
        styles.imageButtonSmall,
    )

    function handleClick(event: any) {
        event.preventDefault();
        window.open(props.url, "_blank", "noreferrer")
    }

    return (
        <button className={linkStyles[useContext(OrientationContext)]} onClick={handleClick}>
            <span className={props.imageName}></span>
            {props.children}
        </button>
    )
}

export default ExternalLink;