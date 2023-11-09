import { useContext } from 'react';
import SetOrientationStyle from '../../../Common/Orientation/Orientation';
import ExternalLink from '../../Button/ExternalLink';
import styles from '../card.module.css';
import { OrientationContext } from '../../../App/App';

function Links(props: {sourceLink: string, buildLink: string}) {
    const linksCardStyles = SetOrientationStyle(
        styles.linksCard,
        styles.linksCard,
        styles.linksCardSmall,
    )

    const currentLinksCardStyle = linksCardStyles[useContext(OrientationContext)]
    var linkElements: JSX.Element[] = []

    if (props.sourceLink !== "") { 
        linkElements.push(<ExternalLink imageName='ai-github' url={props.sourceLink}>Source Code</ExternalLink>) 
    }

    if (props.buildLink !== "") {
        linkElements.push(<ExternalLink imageName='ai-joypad' url={props.buildLink}>Build</ExternalLink>)
    }

    if (linkElements.length < 1) {
        return <></>
    }

    return (
        <div className={currentLinksCardStyle}>
            <h2>External Links:</h2>
            <div className={styles.links}> 
            { linkElements.map((element) => element) }
            </div>
        </div>
    )
}

export default Links;