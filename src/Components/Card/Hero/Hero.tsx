import { useContext } from 'react';
import { OrientationContext } from '../../../App/App';
import HeroData from '../../../types/Game/Game';
import Nugget from '../../Button/Nugget';
import styles from '../card.module.css';
import SetOrientationStyle from '../../../Common/Orientation/Orientation';

function Hero(props: {heroData: HeroData}) {

    const cardStyles = SetOrientationStyle(
        styles.card,
        styles.cardSmall,
        styles.cardExtraSmall,
    )

    return (
        <div className={cardStyles[useContext(OrientationContext)]}>
            <div className={styles.video}>
                <video loop controls autoPlay muted src={process.env.PUBLIC_URL + "/videos/" + props.heroData.video} />
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