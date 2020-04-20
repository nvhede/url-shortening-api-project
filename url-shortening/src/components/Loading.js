import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './Loading.module.css'

const Loading = ({delayTime, children}) => {
    if (!delayTime) delayTime = 500

    const [isDelayed, setDelay] = useState(!!delayTime)

    useEffect(() => {
        let timeout

        if (isDelayed) {
            timeout = setTimeout(() => setDelay(false), delayTime)
        }

        return function cleanup() {
            if (timeout !== undefined) {
                clearTimeout(timeout)
            }
        }
    })

    const loadingStyle = {
        ...styles.loading,
        ...(isDelayed && {display: 'hidden'})
    }

    if (children) return children
    if (isDelayed) return null
    return (
        <span className={styles.loading}></span>
    )

}

Loading.propTypes = {
    delayTime: PropTypes.number,
    children: PropTypes.any,
}

export default Loading