import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './Button.module.css'

export const TextSizes = {
    small: .75,
    medium: 1,
    large: 1.25,
    jumbo: 1.75,
}


const Button = ({text, handleClick, textSize, href, disabled}) => {
    const textStyle = {
        fontSize: `${textSize}em`,
        fontWeight: 700,
    }

    if (href) return (
        <Link 
            to={href} 
            className={styles.link} 
            onClick={handleClick}
            disabled={disabled}
        >
         <span style={textStyle}>{text}</span>
        </Link>
    )
    
    return (
        <button 
            className={textSize === TextSizes.jumbo ? styles.jumbo : ''}
            disabled={disabled}
            type={handleClick ? 'button' : 'submit'}
            onClick={handleClick}
        >
            <span style={textStyle}>{text}</span>
        </button>
    )
}

Button.defaultProps = {
    textSize: TextSizes.small
}

Button.propTypes = {
    text: PropTypes.string,
    handleClick: PropTypes.func,
    href: PropTypes.string,
    disabled: PropTypes.bool,
}

export default Button