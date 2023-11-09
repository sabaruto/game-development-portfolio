import Nugget from '../../Button/Nugget';
import styles from '../card.module.css';
import Game from '../../../types/Game';
import { useNavigate } from 'react-router-dom';
import SetOrientationStyle from '../../../Common/Orientation/Orientation';
import { useContext } from 'react';
import { OrientationContext } from '../../../App/App';

function RowCards(props: {gameInfo: Game}) {
    const currentGame = props.gameInfo;
    const rowCardStyles = SetOrientationStyle(
        styles.rowCard,
        styles.rowCard,
        styles.rowCardSmall,
    )

    let navigate = useNavigate()

    function handleOnClick(event: any) {
        event.preventDefault();
        navigate(currentGame.url)
    }

    return (
        <button className={rowCardStyles[useContext(OrientationContext)]} onClick={handleOnClick}>
            <div className={styles.img}>
                <img src={process.env.PUBLIC_URL + "/images/" + currentGame.image} alt="fimbul Winter" />
                <div className={styles.cardTitle}>
                    <p>{currentGame.title}</p>
                </div>
            </div>
            <div className={styles.nuggets}>
                {currentGame.nuggets.map((text) =>
                    <Nugget text={text} key={text}/>
                )}
            </div>
        </button>
    )
}

export default RowCards;