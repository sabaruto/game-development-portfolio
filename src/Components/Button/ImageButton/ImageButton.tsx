import { useNavigate } from "react-router-dom";

import styles from '../button.module.css'

function ImageButton(props: {imageName: string, url:string, text: string}) {

    let navigate = useNavigate()

    function handleClick(event: any) {
        event.preventDefault();
        navigate(props.url)
    }
    return (
        <button className={styles.imageButton} onClick={handleClick}>
            <span className={props.imageName}></span>
            {props.text}
        </button>
    )
}

export default ImageButton;