import { useContext } from 'react';
import { OrientationContext } from '../../../App';
import styles from '../card.module.css';
import Info from '../../../types/Info/Block/Block';

function Passport(props: Info) {
    return (
        <div className={useContext(OrientationContext) ? styles.photoCardSmall: styles.photoCard}>
            <div className={styles.cardDetails}>
                <div className={styles.cardInfo}>
                    <h2>{props.title}</h2>
                    {props.description.map((para) => (
                        <p key={para}>{para}</p>
                    ))}
                </div>
            </div>
            <div className={styles.photo}>
                <img src={process.env.PUBLIC_URL + "/images/" + props.image} alt="Self"/>
            </div>
        </div>
    )
}

export default Passport;