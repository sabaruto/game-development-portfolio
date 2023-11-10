import React, { ForwardedRef, forwardRef, useContext } from 'react';

import ImageButton from '../Button/ImageButton';
import styles from './navbar.module.css'
import { OrientationContext } from '../../App/App';
import urls from '../../data/urls.json';
import SetOrientationStyle from '../../Common/Orientation/Orientation';

const Navbar = forwardRef(function Navbar(props: {title: string}, ref: ForwardedRef<HTMLDivElement>) {
    const navStyles = SetOrientationStyle(
        styles.navbar,
        styles.small,
        styles.extraSmall,
    )
    
    return (
        <div className={navStyles[useContext(OrientationContext)]} ref={ref}>
            <h1>{props.title}</h1>
            <div className={styles.buttons}>
                <ImageButton imageName="ai-home" text="Home" url={urls.home}/>
                <ImageButton imageName="ai-user" text="About Me" url={urls.aboutMe}/>
                <ImageButton imageName="ai-lab" text="Projects" url={urls.projectList}/>
                <ImageButton imageName="ai-monolog" text="Contact Info" url={urls.contactInfo}/>
            </div>
        </div>
    );
});

export default Navbar;