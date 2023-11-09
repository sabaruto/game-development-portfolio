import { useContext } from 'react';
import SetOrientationStyle from '../../../Common/Orientation';
import styles from '../button.module.css'
import { OrientationContext } from '../../../App/App';

function Nugget(props: {text: string}) {

    const nuggetStyles = SetOrientationStyle(
        styles.nugget,
        styles.nugget,
        styles.nuggetSmall,
    )
    return (
        <div className={nuggetStyles[useContext(OrientationContext)]}>
            {props.text}
        </div>
    )
}

export default Nugget;