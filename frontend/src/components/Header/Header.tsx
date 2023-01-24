import Image from 'next/image'
import React from 'react'
import styles from './Header.module.scss'

function Header() {
    return (
        <header id={styles.header}>
            <h1>Plano de contas </h1>

            <Image
                src='/trending_up_green.svg'
                alt='Trending up'
                width={100}
                height={100}
            />
        </header>
    )
}

export default Header