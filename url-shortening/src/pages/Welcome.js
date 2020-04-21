import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import styles from './Welcome.module.css'


const Welcome = () => 
<Layout>
    <div className={styles.container}>
       <div className={styles.info}>
        <h2 className={styles.title}>More than just shorter links</h2>
       </div>
    </div>
</Layout>

export default Welcome