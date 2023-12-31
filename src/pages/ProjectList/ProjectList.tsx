import { useNavigate } from 'react-router-dom';
import Game from '../../types/Game/Game';
import GameData from '../../data/games.json';
import NavButton from '../../Components/Button/NavButton';
import styles from './projectsList.module.css';
import urls from '../../data/urls.json';
import RowCards from '../../Components/Card/RowCards';
import ContactBar from '../../Components/ContactBar';
import SetOrientationStyle from '../../Common/Orientation/Orientation';
import { useContext } from 'react';
import { OrientationContext } from '../../App/App';

const games: Game[] = GameData;


function ProjectList() {
    const projectsStyle = SetOrientationStyle(
        styles.projects,
        styles.projects,
        styles.projectsSmall,
    )
    let navigate = useNavigate();

    function handleNextPageClick(event: any) {
        event.preventDefault();
        navigate(urls.aboutMe)
    }

    return (
        <div className={projectsStyle[useContext(OrientationContext)]}>
            <div className={styles.content}>
                <div className={styles.button}>
                    <NavButton imageName='ai-arrow-up' onClick={handleNextPageClick} />
                </div>
                
                <div className={styles.cards}>
                    {games.map((game) =>
                        <RowCards gameInfo={game} key={game.title}/>
                    )}
                </div>
            </div>
            
            <ContactBar />
        </div>
    )
}

export default ProjectList;