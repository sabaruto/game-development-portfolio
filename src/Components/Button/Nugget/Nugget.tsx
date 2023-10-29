import styles from '../button.module.css'

function Nugget(props: {text: string}) {
    return (
        <div className={styles.nugget}>
            {props.text}
        </div>
    )
}

export default Nugget;