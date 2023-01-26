import Image from 'next/image'
import React from 'react'
import styles from './Header.module.scss'
import Offcanvas from '../Offcanvas/Offcanvas'
import { useAppDispatch } from '@/redux/hooks'
import { toggleOffcanvas } from '@/redux/states/offcanvas'

function Header() {

    const dispatch = useAppDispatch()

    return (
        <>
            <Offcanvas />

            <header id={styles.header}>


                <Image
                    id={styles['burger-menu']}
                    src='/menu.svg'
                    alt='Burger Menu'
                    width={50}
                    height={50}
                    onClick={() => dispatch(toggleOffcanvas())}
                />

                <h1>Plano de contas </h1>

                <Image
                    src='/trending_up_green.svg'
                    alt='Trending up'
                    width={100}
                    height={100}
                />
            </header>
        </>
    )
}

export default Header