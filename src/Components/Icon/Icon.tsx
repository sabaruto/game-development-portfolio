import styles from './icon.module.css';

function Icon(props: {imageName: string}) {
    return (
        <div className={styles.icon}>
            <span className={props.imageName}></span>
        </div>
    )
}

export default Icon;