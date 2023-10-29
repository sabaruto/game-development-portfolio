import ExternalLink from '../../Button/ExternalLink';
import styles from '../card.module.css';

function Links(props: {sourceLink: string, buildLink: string}) {
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
        <div className={styles.linksCard}>
            <h2>External Links:</h2>
            <div className={styles.links}> 
            { linkElements.map((element) => element) }
            </div>

        </div>
    )
}

export default Links;