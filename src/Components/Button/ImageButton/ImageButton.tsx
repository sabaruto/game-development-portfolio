import { useNavigate } from "react-router-dom";

import styles from '../button.module.css'
import SetOrientationStyle from "../../../Common/Orientation/Orientation";
import { useContext } from "react";
import { OrientationContext } from "../../../App/App";
import ScreenType from "../../../enum/ScreenType";

function ImageButton(props: {imageName: string, url:string, text: string}) {

    const currentOrientation = useContext(OrientationContext)

    const imageButtonStyles = SetOrientationStyle(
        styles.imageButton,
        styles.imageButton,
        styles.image,
    )

    let navigate = useNavigate()

    function handleClick(event: any) {
        event.preventDefault();
        navigate(props.url)
    }
    return (
        <button 
        className={imageButtonStyles[useContext(OrientationContext)]} 
        onClick={handleClick}
        title={props.text}
        >
            <span className={props.imageName}></span>
            { currentOrientation !== ScreenType.MOBILE ? props.text : ""}
        </button>
    )
}

export default ImageButton;