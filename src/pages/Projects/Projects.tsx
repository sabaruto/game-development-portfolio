import Passport from '../../Components/Card/Passport';
import TitleCard from '../../Components/Card/TitleCard';
import Block from '../../types/Info/Block';
import Title from '../../types/Info/Title';
import styles from './projects.module.css';
import Games from '../../data/games.json';
import Links from '../../Components/Card/Links';

// TODO Create a new type of block for link use

function Projects(props: { title: string}) {

    const currentGame = Games.find((game) => game.title === props.title)

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
        <div className={styles.base}>
            <TitleCard {...titleBlock} />
            {infoBlocks.map((infoBlock) => (
                <Passport {...infoBlock} key={infoBlock.title}/>
            ))}
            <Links sourceLink={sourceLink} buildLink={buildLink} />
        </div>
    )
}

export default Projects;