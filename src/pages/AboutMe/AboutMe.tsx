import NavButton from '../../Components/Button/NavButton';
import styles from './aboutme.module.css';
import { useNavigate } from 'react-router-dom';
import urls from '../../data/urls.json';
import Passport from '../../Components/Card/Passport';
import Info from '../../types/Info/Block';

// TODO Fix card shrinking at large widths

const passportData: Info = {
    title: "About Me",
    description: [
        "Hi, I’m Theodore Aaron-Obelley, a software engineer with a passion for Game Development. I’ve been making games from secondary school, sending Game Maker executables to the student body, and never stopped tinkering with the medium.",
        "Below you can see a catalogue of my projects and some detailed information on their development. All of these are personal projects in varying stages of completion but all interesting explorations of games and their engines.",
        "If you have any questions or enquires please feel free to contact me."
    ],
    image: "photo.jpeg"
}

function AboutMe() {
    let navigate = useNavigate();

    function handleNextPage(isUp: boolean, event: any) {
        event.preventDefault();

        const url = isUp ? urls.home : urls.projectList;
        navigate(url)
    }

    function handleNextPageClick(isUp: boolean) {
        return (event: any) => handleNextPage(isUp, event)
    }
    return (
        <div className={styles.aboutMe}>
            <NavButton imageName='ai-arrow-up' onClick={handleNextPageClick(true)} />
            <Passport {...passportData} />
            <NavButton imageName='ai-arrow-down' onClick={handleNextPageClick(false)} />
        </div>
    )
}

export default AboutMe;