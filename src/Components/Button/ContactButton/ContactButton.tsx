import { useContext } from 'react';
import SetOrientationStyle from '../../../Common/Orientation/Orientation';
import styles from '../button.module.css';
import { OrientationContext } from '../../../App/App';

function ContactButton(props: {imageName: string, text: string}) {
    const contactButtonStyles = SetOrientationStyle(
        styles.contactButton,
        styles.contactButton,
        styles.contactButtonSmall,
    )

    return (
        <button className={contactButtonStyles[useContext(OrientationContext)]}>
            <span className={props.imageName}/>
            {props.text}
        </button>
    )
}

export default ContactButton;