import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Button, { TextSizes } from '../components/Button'
import styles from './Welcome.module.css'
import { ReactComponent as WorkingLogo } from '../images/illustration-working.svg'


const Welcome = () => 
<Layout>
    <div className={styles.container}>
       <div className={styles.info}>
        <h2 className={styles.title}>More than just shorter links</h2>
        <p className={styles.text}>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
        </p>
        <Button text={"Get Started"} textSize={TextSizes.jumbo} />
       </div>
       <div className={styles.logo}>
        <WorkingLogo/>
       </div>
    </div>
    <div className={styles.searchContainer}/>
    <div className={styles.container2}>
    </div>
</Layout>

export default Welcome