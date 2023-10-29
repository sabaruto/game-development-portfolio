import { useContext } from 'react';
import { OrientationContext } from '../../../App';
import styles from '../card.module.css';
import Title from '../../../types/Info/Title';

function TitleCard(props: Title) {
    return (
        <div className={useContext(OrientationContext) ? styles.photoCardSmall : styles.photoCard}>
            <div className={styles.cardDetails}>
                <div className={styles.cardInfo}>
                    {props.description.map((para) => (
                        <p key={para}>{para}</p>
                    ))}
                </div>
            </div>
            <div className={styles.video}>
                <video loop autoPlay muted src={process.env.PUBLIC_URL + "/videos/" + props.video}/>
            </div>
        </div>)
}

export default TitleCard