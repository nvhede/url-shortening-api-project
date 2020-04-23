import React from 'react'
import Layout from '../components/Layout'
import Button, { TextSizes } from '../components/Button'
import styles from './Welcome.module.css'
import logo from '../images/illustration-working.svg'

// const dashboardSquare = ({icon, headerText, paragraphText}) => (

// )


const Welcome = () => 
<Layout>
    <div className={styles.mainContainer}>
       <div className={styles.infoContainer}>
        <h2 className={styles.title}>More than just shorter links</h2>
        <p className={styles.text}>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
        </p>
         <Button text={"Get Started"} textSize={TextSizes.jumbo} />
       </div>
      <div class={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="Logo featuring a woman working at her desk."/>
      </div>
    </div>
    <div className={styles.searchContainer}/>
    <div className={styles.dashboardContainer}>
        {/* <div className={}>
            <h2 className={}>Advanced Statistics</h2>
            <p className={}>
                Track how your links are performing across the web with our advanced
                 statistics dashboard.
            </p>
        </div>
        <div className={}>
            
        </div> */}
    </div>
    <div className={styles.boostContainer}>
        <h2 className={styles.boostTitle}>Boost your links today</h2>
        <Button text={"Get Started"} textSize={TextSizes.jumbo} />
 </div>
</Layout>

export default Welcome