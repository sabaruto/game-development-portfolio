import styles from '../button.module.css';

function NavButton(props: {imageName: string, onClick: React.MouseEventHandler<HTMLButtonElement>}) {
    return (
        <button title="Button" className={styles.navButton} onClick={props.onClick}>
            <span className={props.imageName}/>
        </button>
    )
}

export default NavButton;