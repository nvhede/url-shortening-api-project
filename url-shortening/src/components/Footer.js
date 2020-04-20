import React from 'react'
import styles from './Footer.module.css'
import { ReactComponent as Logo } from '../images/logo-light.svg'
import { ReactComponent as InstagramLogo } from '../images/icon-instagram.svg'
import { ReactComponent as PinterestLogo } from '../images/icon-pinterest.svg'
import { ReactComponent as TwitterLogo } from '../images/icon-twitter.svg'
import { ReactComponent as FacebookLogo } from '../images/icon-facebook.svg'


const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}><Logo/></div>
            <div className={styles.linksContainer}>
                <div className={styles.features}>
                    <div className={styles.header}>Features</div>
                    <div className={styles.link}>Link Shortening</div>
                    <div className={styles.link}>Branded Links</div>
                    <div className={styles.link}>Analytics</div>
                </div>
                <div className={styles.features}>
                    <div className={styles.header}>Resources</div>
                    <div className={styles.link}>Blog</div>
                    <div className={styles.link}>Developers</div>
                    <div className={styles.link}>Support</div>
                </div>
                <div className={styles.features}>
                    <div className={styles.headerCompany}>Company</div>
                    <div className={styles.link}>About</div>
                    <div className={styles.link}>Our Team</div>
                    <div className={styles.link}>Careers</div>
                    <div className={styles.link}>Contact Us</div>
                </div>
            </div>
            <div className={styles.socialMediaContainer}>
                <div className={styles.socialMediaIcon}><FacebookLogo/></div>
                <div className={styles.socialMediaIcon}><TwitterLogo/></div>
                <div className={styles.socialMediaIcon}><InstagramLogo/></div>
                <div className={styles.socialMediaIcon}><PinterestLogo/></div>
            </div>
        </div>
    )

}

export default Footer