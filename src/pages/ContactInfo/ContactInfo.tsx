import { Outlet } from "react-router-dom";
import ProjectList from "../ProjectList";

function ContactInfo() {

    setTimeout(() => {
        window.scrollTo({left: 0, top: document.body.scrollHeight, behavior: "smooth"})
    }, 100)


    return (
        <ProjectList />
    )
}

export default ContactInfo;