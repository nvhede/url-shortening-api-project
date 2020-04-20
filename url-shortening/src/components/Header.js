import React from 'react'
import { NavLink, Link } from 'react-router-dom'


import Button from '../components/Button'
import styles from './Header.module.css'
import { ReactComponent as Logo } from '../images/logo.svg'


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.links}>
                <Link to={'/'} className={styles.logo}><Logo/></Link>
                <NavLink exact
                    to={'/features'}
                    className={styles.link} 
                    activeClassName={styles.linkSelected}
                >
                    Features
                </NavLink>  
                <NavLink exact
                    to={'/pricing'}
                    className={styles.link} 
                    activeClassName={styles.linkSelected}
                >
                    Pricing
                </NavLink>
                <NavLink exact
                    to={'/resources'}
                    className={styles.link} 
                    activeClassName={styles.linkSelected}
                >
                    Resources
                </NavLink>
            </div>
            <div className={styles.auth}>
                <NavLink exact
                    to={'/login'}
                    className={styles.link} 
                    activeClassName={styles.linkSelected}
                >
                    Login
                </NavLink>
                <Button text={'Sign Up'} href={'/signup'}/>
            </div>
        </header>
    )
}

export default Header