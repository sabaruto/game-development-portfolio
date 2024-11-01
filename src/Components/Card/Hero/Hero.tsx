import { useContext } from "react";
import { OrientationContext } from "../../../App/App";
import HeroData from "../../../types/Game/Game";
import Nugget from "../../Button/Nugget";
import styles from "../card.module.css";
import SetOrientationStyle from "../../../Common/Orientation/Orientation";
import { useQuery } from "react-query";

function getVideoURL(videoName: string): () => Promise<string | Error> {
    return async () => {
        try {
            const response = await fetch(process.env.PUBLIC_URL + "/videos/" + videoName);
            const videoBlob = await response.blob();
            return URL.createObjectURL(videoBlob);
        } catch (error: any) {
            return error;
        }
    };
}

function Hero(props: { heroData: HeroData }) {
    const cardStyles = SetOrientationStyle(styles.card, styles.cardSmall, styles.cardExtraSmall);
    const videoPath = props.heroData.video;
    const { data, status } = useQuery({
        queryKey: videoPath,
        queryFn: getVideoURL(videoPath),
        suspense: true,
    });

    if (status === "error") {
        throw data;
    }

    if (status === "loading" || status === "idle") {
        throw new Promise((resolve) => setTimeout(resolve, 1)); // Simulate loading delay
    }

    const videoSource = data as string;
    return (
        <div className={cardStyles[useContext(OrientationContext)]}>
            <div className={styles.video}>
                <video loop controls autoPlay muted src={videoSource}></video>
            </div>
            <div className={styles.cardDetails}>
                <div className={styles.cardInfo}>
                    <h2>{props.heroData.title}</h2>
                    <p>{props.heroData.description}</p>
                </div>
                <div className={styles.nuggets}>
                    {" "}
                    {props.heroData.nuggets.map((text) => (
                        <Nugget text={text} key={text} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hero;
