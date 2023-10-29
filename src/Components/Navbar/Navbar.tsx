import React, { useContext } from 'react';

import ImageButton from '../Button/ImageButton';
import styles from './navbar.module.css'
import { OrientationContext } from '../../App';
import urls from '../../data/urls.json';

function Navbar(props: {title: string}) {
    return (
        <div className={useContext(OrientationContext) ? styles.small : styles.navbar}>
            <h1>{props.title}</h1>
            <div className={styles.buttons}>
                <ImageButton imageName="ai-home" text="Home" url={urls.home}/>
                <ImageButton imageName="ai-user" text="About Me" url={urls.aboutMe}/>
                <ImageButton imageName="ai-lab" text="Projects" url={urls.projectList}/>
                <ImageButton imageName="ai-monolog" text="Contact Info" url={urls.contactInfo}/>
            </div>
        </div>
    )
}

export default Navbar;