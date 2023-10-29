import styles from '../button.module.css'


function ExternalLink(props: {imageName: string, url: string, children: string}) {

    function handleClick(event: any) {
        event.preventDefault();
        window.open(props.url, "_blank", "noreferrer")
    }

    return (
        <button className={styles.imageButton} onClick={handleClick}>
            <span className={props.imageName}></span>
            {props.children}
        </button>
    )
}

export default ExternalLink;