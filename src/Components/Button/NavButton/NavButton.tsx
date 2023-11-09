import { useContext } from 'react';
import SetOrientationStyle from '../../../Common/Orientation/Orientation';
import styles from '../button.module.css';
import { OrientationContext } from '../../../App/App';

function NavButton(props: {imageName: string, onClick: React.MouseEventHandler<HTMLButtonElement>}) {

    const navButtonStyles = SetOrientationStyle(
        styles.navButton,
        styles.navButton,
        styles.navButtonSmall,
    )
    return (
        <button title="Button" className={navButtonStyles[useContext(OrientationContext)]} onClick={props.onClick}>
            <span className={props.imageName}/>
        </button>
    )
}

export default NavButton;