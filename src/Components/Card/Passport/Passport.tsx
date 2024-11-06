import { useContext } from "react";
import { OrientationContext } from "../../../App/App";
import styles from "../card.module.css";
import Info from "../../../types/Info/Block/Block";
import SetOrientationStyle from "../../../Common/Orientation/Orientation";

function Passport(props: Info) {
    const imagePath = require("../../../Assets/Images/" + props.image);
    const photoCardStyles = SetOrientationStyle(styles.photoCard, styles.photoCardSmall, styles.photoCardExtraSmall);

    return (
        <div className={photoCardStyles[useContext(OrientationContext)]}>
            <div className={styles.cardDetails}>
                <div className={styles.cardInfo}>
                    <h2>{props.title}</h2>
                    {props.description.map((para) => (
                        <p key={para}>{para}</p>
                    ))}
                </div>
            </div>
            <div className={styles.photo}>
                <img src={imagePath} alt="Self" />
            </div>
        </div>
    );
}

export default Passport;
