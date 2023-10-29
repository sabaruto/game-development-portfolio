import styles from '../button.module.css';

function ContactButton(props: {imageName: string, text: string}) {
    return (
        <button className={styles.contactButton}>
            <span className={props.imageName}/>
            {props.text}
        </button>
    )
}

export default ContactButton;