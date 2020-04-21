import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Button, { TextSizes } from '../components/Button'
import Menu from '../components/Menu'
import styles from './Header.module.css'
import { ReactComponent as Logo } from '../images/logo.svg'


const Header = () => {

    const [showMenu, setMenuVisibility ] = useState(false)

    const toggleMenuVisibility = () => setMenuVisibility(!showMenu)
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
                <Button text={'Sign Up'} textSize={TextSizes.large} href={'/signup'}/>
            </div>
            <div className={styles.hamburgerIcon} onClick={toggleMenuVisibility}><FontAwesomeIcon icon={faBars}/></div>
            {showMenu && 
                <Menu isOpen={showMenu} toggleMenu={toggleMenuVisibility}/>
            }
        </header>
    )
}

export default Header