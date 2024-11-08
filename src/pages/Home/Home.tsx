import { useContext, useEffect, useState } from "react";
import NavButton from "../../Components/Button/NavButton";
import Hero from "../../Components/Card/Hero";
import Game from "../../types/Game/Game";
import GameData from "../../data/games.json";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import SetOrientationStyle from "../../Common/Orientation/Orientation";
import { OrientationContext } from "../../App/App";
const games: Game[] = GameData;

function modularAdd(value: number, diff: number): number {
    var newValue = value + diff;
    if (newValue >= games.length) {
        newValue = 0;
    }

    if (newValue < 0) {
        newValue = games.length - 1;
    }
    return newValue;
}

function Home() {
    const [gameIndex, setGameIndex] = useState(0);
    const homeStyles = SetOrientationStyle(styles.home, styles.home, styles.homeSmall);
    const navigate = useNavigate();
    const style = homeStyles[useContext(OrientationContext)];

    function updateGameIndex(isRight: boolean, event: any) {
        event.preventDefault();

        console.log("Updating game index");
        console.log("Old game index: " + gameIndex);

        const diff = isRight ? 1 : -1;
        const newGameIndex = modularAdd(gameIndex, diff);
        setGameIndex(newGameIndex);
    }

    function handleNewGameClick(isRight: boolean) {
        return (e: any) => {
            updateGameIndex(isRight, e);
        };
    }

    function handleNextPageClick(event: any) {
        event.preventDefault();
        navigate("/AboutMe");
    }

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setGameIndex(modularAdd(gameIndex, 1));
        }, 60 * 1000);

        //Clearing the interval
        return () => clearInterval(interval);
    }, [gameIndex]);

    return (
        <div className={style}>
            <div className={styles.content}>
                <NavButton imageName="ai-arrow-left" onClick={handleNewGameClick(false)} />
                <Hero heroData={games[gameIndex]} />
                <NavButton imageName="ai-arrow-right" onClick={handleNewGameClick(true)} />
            </div>
            <NavButton imageName="ai-arrow-down" onClick={handleNextPageClick} />
        </div>
    );
}

export default Home;
