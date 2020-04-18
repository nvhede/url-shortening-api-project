import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './Button.module.css'

const Button = ({text, handleClick, href, disabled}) => {
    if (href) return (
        <Link 
            to={href} 
            className={styles.link} 
            onClick={handleClick}
            disabled={disabled}
        >
         {text}
        </Link>
    )

    return (
        <button 
            className={styles.button}
            disabled={disabled}
            type={handleClick ? 'button' : 'submit'}
            onClick={handleClick}

        >
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    handleClick: PropTypes.func,
    href: PropTypes.string,
    disabled: PropTypes.bool,
}

export default Button