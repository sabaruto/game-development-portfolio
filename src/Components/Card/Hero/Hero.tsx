import { useContext } from "react";
import { OrientationContext } from "../../../App/App";
import HeroData from "../../../types/Game/Game";
import Nugget from "../../Button/Nugget";
import styles from "../card.module.css";
import SetOrientationStyle from "../../../Common/Orientation/Orientation";

function Hero(props: { heroData: HeroData }) {
    const cardStyles = SetOrientationStyle(styles.card, styles.cardSmall, styles.cardExtraSmall);
    const videoPath = require("../../../Assets/Videos/" + props.heroData.video);

    return (
        <div className={cardStyles[useContext(OrientationContext)]}>
            <div className={styles.video}>
                <video controls muted src={videoPath}></video>
            </div>
            <div className={styles.cardDetails}>
                <div className={styles.cardInfo}>
                    <h2>{props.heroData.title}</h2>
                    <p>{props.heroData.description}</p>
                </div>
                <div className={styles.nuggets}>
                    {props.heroData.nuggets.map((text) => (
                        <Nugget text={text} key={text} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hero;
