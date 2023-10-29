import { useNavigate } from 'react-router-dom';
import Game from '../../types/Game/Game';
import GameData from '../../data/games.json';
import NavButton from '../../Components/Button/NavButton';
import styles from './projects.module.css'
import urls from '../../data/urls.json';
import RowCards from '../../Components/Card/RowCards';
import ContactBar from '../../Components/ContactBar';

const games: Game[] = GameData;


function ProjectList() {
    let navigate = useNavigate();

    function handleNextPageClick(event: any) {
        event.preventDefault();
        navigate(urls.aboutMe)
    }

    return (
        <div className={styles.projects}>
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