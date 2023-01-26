import React from 'react'
import GenReportButton from '../GenReportButton/GenReportButton'
import InfoCarousel from '../InfoCarousel/InfoCarousel'
import PlanDropDown from '../PlanDropDown/PlanDropDown'
import styles from './MainButtons.module.scss'

function MainButtons() {
    return (
        <section id={styles['main-buttons']}>
            {/* <GenReportButton /> */}

            <InfoCarousel />

            <PlanDropDown />
        </section>
    )
}

export default MainButtons