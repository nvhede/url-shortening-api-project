import React, { useState, useEffect, Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import ImagePlaceholder from '../components/ImagePlaceholder'
import Button from '../components/Button'
import styles from './Header.module.css'


const Header = () => {
    const image = {
        url: '/public/images/logo.svg',
        height: 200,
        width: 200,
        alt: 'This is a logo of the page. Titled "Shortly"',
    }

    return (
        <header className={styles.header}>
            <ImagePlaceholder image={image} imageStyle={{marginLeft: 15}}/>
            <div className={styles.links}>
                <NavLink 
                    to={'/features'}
                    className={styles.link} 
                    activeClassName={styles.linkSelected}
                >
                    Features
                </NavLink>
                <NavLink 
                    to={'/pricing'}
                    className={styles.link} 
                    activeClassName={styles.linkSelected}
                >
                    Pricing
                </NavLink>
                <NavLink 
                    to={'/resources'}
                    className={styles.link} 
                    activeClassName={styles.linkSelected}
                >
                    Resources
                </NavLink>
            </div>
            <div className={styles.auth}>
                <NavLink 
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

Header.propTypes  = {

}

export default Header