import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './ImagePlaceholder.module.css'

const ImagePlaceholder = ({image, renderError}) => {
    const [isLoading, setLoading] = useState(false)
    const [hasError, setError] = useState(false)

    const handleError = () => {
        setLoading(false)
        setError(true)
    }

    const onLoad = () => setLoading(true)

    if (hasError) {
        return renderError || null
    }
    if (isLoading) {
        return <div className={styles.placeholder}/>
    }

    return (
        <img
            className={styles.image}
            url={image.url}
            onLoad={onLoad}
            onError={handleError}
            alt={image.alt}
            role={!!image.alt ? '' : 'presentation'}
        />
    )
}

ImagePlaceholder.propTypes = {
    image: PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number,
        url: PropTypes.string,
        alt: PropTypes.string,
    }).isRequired,
    renderError: PropTypes.func,
}

export default ImagePlaceholder
