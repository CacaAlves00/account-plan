import React, { useState } from 'react'
import styles from './Offcanvas.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { toggleOffcanvas } from '@/redux/states/offcanvas'

function Offcanvas() {

    const offcanvasShowing = useAppSelector((state) => state.offcanvas.show)
    const dispatch = useAppDispatch()

    return (
        <div 
            id={styles['offcanvas']}
            style={{ width: offcanvasShowing ? '25vw' : '0' }}
            onMouseLeave={() => dispatch(toggleOffcanvas())}
        >
            Offcanvas
        </div>
    )
}

export default Offcanvas