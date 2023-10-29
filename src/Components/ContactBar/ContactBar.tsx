import ContactButton from "../Button/ContactButton";
import styles from './contactBar.module.css';

function ContactBar() {
    return (
        <div className={styles.contactBar}>
            <p>Contact Info:</p>
            <ContactButton imageName={"ai-phone-start"} text={"(+44) 7999-413-492"} />
            <ContactButton imageName={"ai-mail"} text={"theodoreaaronobelley@hotmail.co.uk"} />
            <ContactButton imageName={"ai-github"} text={"sabaruto"} />
        </div>
    )
}

export default ContactBar;