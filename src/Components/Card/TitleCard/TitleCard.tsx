import { useContext } from "react";
import { OrientationContext } from "../../../App/App";
import styles from "../card.module.css";
import Title from "../../../types/Info/Title";
import SetOrientationStyle from "../../../Common/Orientation";

function TitleCard(props: Title) {
    const cardStyles = SetOrientationStyle(styles.card, styles.cardSmall, styles.cardExtraSmall);
    const videoPath = require("../../../Assets/Videos/" + props.video);

    return (
        <div className={cardStyles[useContext(OrientationContext)]}>
            <div className={styles.video}>
                <video controls loop muted src={videoPath} />
            </div>
            <div className={styles.cardDetails}>
                <div className={styles.cardInfo}>
                    {props.description.map((para) => (
                        <p key={para}>{para}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TitleCard;
