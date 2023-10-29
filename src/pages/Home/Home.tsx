import React from 'react';
import NavButton from '../../Components/Button/NavButton';
import Hero from '../../Components/Card/Hero';
import Game from '../../types/Game/Game';
import GameData from '../../data/games.json';
import styles from './home.module.css';
import { useNavigate } from 'react-router-dom';


const games: Game[] = GameData;


function Home() {
    const [gameIndex, setGameIndex] = React.useState(0);
    let navigate = useNavigate();

    function updateGameIndex(isRight: boolean, event: any) {
        event.preventDefault();

        console.log("Updating game index")
        console.log("Old game index: " + gameIndex)

        const diff = isRight ? 1 : -1;
        var newGameIndex = gameIndex + diff;

        console.log("New game index: " + newGameIndex)

        if (newGameIndex >= games.length) {
            newGameIndex = 0;
        }

        if (newGameIndex < 0) {
            newGameIndex = games.length - 1;
        }

        setGameIndex(newGameIndex)
    }

    function handleNewGameClick(isRight: boolean) {
        return (e: any) => updateGameIndex(isRight, e)
    }

    function handleNextPageClick(event: any) {
        event.preventDefault();
        navigate("/AboutMe")
    }

    return (
        <div className={styles.home}>
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