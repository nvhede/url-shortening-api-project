import React, { Fragment } from 'react'
import styles from './Welcome.module.css'

import Layout from '../components/Layout'
import Button, { TextSizes } from '../components/Button'

import brandRecognitionLogo from '../images/icon-brand-recognition.svg'
import detailedRecordsLogo from '../images/icon-detailed-records.svg'
import fullyCustomizableLogo from '../images/icon-fully-customizable.svg'
import logo from '../images/illustration-working.svg'

const DashboardSquare = ({icon, alt, headerText, paragraphText, alignment}) => {
    const getAlignmentClassName = (alignmentNumber) => {
        if (alignmentNumber === 2) {
            return styles.alignment2
        } else if (alignmentNumber === 3) {
            return styles.alignment3
        } else {
            return ''
        }
    } 

    const getLogoAlignmentClassName = (alignmentNumber) => {
        if (alignmentNumber === 2) {
            return styles.logoAlignment2
        } else if (alignmentNumber === 3) {
            return styles.logoAlignment3
        } else {
            return ''
        }
    } 

    return (
        <div className={styles.dashboardSquareContainer}>
            <div className={`${styles.dashboardSquareLogo} + ${getLogoAlignmentClassName(alignment)}`}>
                <img src={icon} alt={alt}/>
            </div>
            <div className={`${styles.dashboardSquareTextContainer} + ${getAlignmentClassName(alignment)}` }>
                <h3 className={styles.dashboardSquareTitle}>{headerText}</h3>
                <p className={styles.dashboardSquareText}>{paragraphText}</p>
            </div>  
        </div>
    )
}


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
            <div className={styles.dashboardInfoContainer}>
                <h1 className={styles.dashboardInfoTitle}>Advanced Statistics</h1>
                <p className={styles.dashboardInfoText}>
                    Track how your links are performing across the web with our advanced
                    statistics dashboard.
                </p>
            </div>
            <div className={styles.dashboardSquaresContainer}>
                <DashboardSquare 
                    icon={brandRecognitionLogo} 
                    alt="A circle logo displaying a graph"
                    headerText={'Brand Recognition'} 
                    paragraphText={"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."}
                    alignment={1}
                />
                <DashboardSquare 
                    icon={detailedRecordsLogo} 
                    alt="A circle logo displaying a droplet"
                    headerText={'Detailed Records'} 
                    paragraphText={"Gain insight into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."}
                    alignment={2}
                />
                <DashboardSquare 
                    icon={fullyCustomizableLogo} 
                    alt="A circle logo displaying a triplet of paintbrushes"
                    headerText={'Fully Customizable'} 
                    paragraphText={"Improve brand awareness and content discoverability through customizable links, supercharting audience engagement."}
                    alignment={3}
                />
            </div>
        </div>
        <div className={styles.boostContainer}>
            <h2 className={styles.boostTitle}>Boost your links today</h2>
            <Button text={"Get Started"} textSize={TextSizes.jumbo} />
        </div>  
    </Layout>

export default Welcome