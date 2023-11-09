import { useContext } from "react";
import SetOrientationStyle from "../../Common/Orientation/Orientation";
import ContactButton from "../Button/ContactButton";
import styles from './contactBar.module.css';
import { OrientationContext } from "../../App/App";

function ContactBar() {

    const contactBatStyles = SetOrientationStyle(
        styles.contactBar,
        styles.contactBar,
        styles.contactBarSmall,
    )
    return (
        <div className={contactBatStyles[useContext(OrientationContext)]}>
            <p>Contact Info:</p>
            <ContactButton imageName={"ai-phone-start"} text={"(+44) 7999-413-492"} />
            <ContactButton imageName={"ai-github"} text={"sabaruto"} />
            <ContactButton imageName={"ai-mail"} text={"theodoreaaronobelley@hotmail.co.uk"} />
        </div>
    )
}

export default ContactBar;