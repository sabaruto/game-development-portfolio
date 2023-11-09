import Passport from '../../Components/Card/Passport';
import TitleCard from '../../Components/Card/TitleCard';
import Block from '../../types/Info/Block';
import Title from '../../types/Info/Title';
import styles from './projects.module.css';
import Games from '../../data/games.json';
import Links from '../../Components/Card/Links';
import SetOrientationStyle from '../../Common/Orientation/Orientation';
import { useContext } from 'react';
import { OrientationContext } from '../../App/App';

function Projects(props: { title: string}) {

    const currentGame = Games.find((game) => game.title === props.title)
    const baseStyles = SetOrientationStyle(
        styles.base,
        styles.base,
        styles.baseSmall,
    )

    var sourceLink = ""
    var buildLink = ""
    var titleBlock: Title = {
        description: [],
        video: ""
    }

    const infoBlocks: Block[] = []
    
    if (currentGame) {
        titleBlock = {
            description: currentGame.page.description,
            video: currentGame.video
        }
        sourceLink = currentGame.source;
        buildLink = currentGame.build;

        for (let infoIndex = 0; infoIndex < currentGame.page.extraInfo.length; infoIndex++) {
            const currentInfo = currentGame.page.extraInfo[infoIndex] 
            infoBlocks.push(currentInfo)
        }
    }

    return (
        <div className={baseStyles[useContext(OrientationContext)]}>
            <TitleCard {...titleBlock} />
            {infoBlocks.map((infoBlock) => (
                <Passport {...infoBlock} key={infoBlock.title}/>
            ))}
            <Links sourceLink={sourceLink} buildLink={buildLink} />
        </div>
    )
}

export default Projects;