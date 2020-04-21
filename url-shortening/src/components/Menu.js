import React from 'react'
import PropTypes from 'prop-types'
import styles from './Menu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross } from '@fortawesome/free-solid-svg-icons'

const menuNotOpen = {
    position: 'fixed',
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#232127',
    height: '100%',
    paddingBottom: 150,
    paddingTop: 150,
    paddingLeft: 75,
    paddingRight: 75,
    zIndex: 100,
    top: 0,
    right: '-100%',
    transitionProperty: 'right',
    transitionDuration: '1s',
    transitionTimingFunction: 'ease',
}

const Menu = ({isOpen, toggleMenu}) => {
    const menuStyle = {
        ...menuNotOpen,
        ...(isOpen && {right: 0})
    }
    return (
        <div style={menuStyle}>
            <div className={styles.exit} onClick={toggleMenu}><FontAwesomeIcon icon={faCross}/></div>
            Hello Testing
        </div>
    )
}

Menu.propTypes = {
    isOpen: PropTypes.bool,
    toggleMenu: PropTypes.func
}

export default Menu