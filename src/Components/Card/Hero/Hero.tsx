import { useContext } from 'react';
import { OrientationContext } from '../../../App';
import HeroData from '../../../types/Game/Game';
import Nugget from '../../Button/Nugget';
import styles from '../card.module.css';

function Hero(props: {heroData: HeroData}) {

    return (
        <div className={useContext(OrientationContext) ? styles.cardSmall : styles.card}>
            <div className={styles.video}>
                <video loop autoPlay muted src={process.env.PUBLIC_URL + "/videos/" + props.heroData.video} />
            </div>
            <div className={styles.cardDetails}>
                <div className={styles.cardInfo}>
                    <h2>{props.heroData.title}</h2>
                    <p>{props.heroData.description}</p>
                </div>
                <div className={styles.nuggets}> {
                    props.heroData.nuggets.map((text) =>
                        <Nugget text={text} key={text}/>
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default Hero;