import React, { useState } from 'react'
import styles from './Offcanvas.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { toggleOffcanvas } from '@/redux/states/offcanvas'
import Button from '../Button/Button'

function Offcanvas() {

    const offcanvasShowing = useAppSelector((state) => state.offcanvas.show)
    const dispatch = useAppDispatch()

    return (
        <div 
            id={styles['offcanvas']}
            style={{ width: offcanvasShowing ? '25vw' : '0' }}
            onMouseLeave={() => dispatch(toggleOffcanvas())}
        >
            <h2>Menu</h2>

            <Button
                onClick={() => {}}
                width='70%'
            >
                Gerar relatório
            </Button>

            <Button
                onClick={() => {}}
                width='70%'
            >
                Cadastrar plano
            </Button>

            <Button
                onClick={() => {}}
                width='70%'
            >
                Cadastrar conta
            </Button>

            <Button
                onClick={() => {}}
                width='70%'
            >
                Cadastrar cliente
            </Button>
        </div>
    )
}

export default Offcanvas