import React, { useContext } from 'react';
import NavButton from '../../Components/Button/NavButton';
import Hero from '../../Components/Card/Hero';
import Game from '../../types/Game/Game';
import GameData from '../../data/games.json';
import styles from './home.module.css';
import { useNavigate } from 'react-router-dom';
import SetOrientationStyle from '../../Common/Orientation/Orientation';
import { OrientationContext } from '../../App/App';


const games: Game[] = GameData;

function modularAdd(value: number, diff: number): number {
    var newValue = value + diff;
    if (newValue >= games.length) {
        newValue = 0;
    }

    if (newValue < 0) {
        newValue = games.length - 1;
    }
    return newValue
}

function updateGameIndex(isRight: boolean, gameIndex: number, setGameIndex: (argO: number) => void, event: any) {
    event.preventDefault();

    console.log("Updating game index")
    console.log("Old game index: " + gameIndex)

    const diff = isRight ? 1 : -1;
    var newGameIndex = modularAdd(gameIndex, diff);

    setGameIndex(newGameIndex)
}


function Home() {
    const [gameIndex, setGameIndex] = React.useState(0);
    const homeStyles = SetOrientationStyle(
        styles.home,
        styles.home,
        styles.homeSmall,
    )
    let navigate = useNavigate();

    function handleNewGameClick(isRight: boolean) {
        return (e: any) => updateGameIndex(isRight, gameIndex, setGameIndex, e)
    }

    function handleNextPageClick(event: any) {
        event.preventDefault();
        navigate("/AboutMe")
    }

    setInterval(() => setGameIndex(modularAdd(gameIndex, 1)), 60 * 1000)

    return (
        <div className={homeStyles[useContext(OrientationContext)]}>
            <div className={styles.content}>
                <NavButton imageName='ai-arrow-left' onClick={handleNewGameClick(false)} />
                <Hero heroData={games[gameIndex]} />
                <NavButton imageName='ai-arrow-right' onClick={handleNewGameClick(true)} />
            </div>
            <NavButton imageName='ai-arrow-down' onClick={handleNextPageClick} />
        </div>
    )
}

export default Home;