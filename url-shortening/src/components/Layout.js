import React from 'react'
import PropTypes from 'prop-types'
import styles from './Layout.module.css'

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <main>{children}</main>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.any
}

export default Layout 