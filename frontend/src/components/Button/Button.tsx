import React, { MouseEventHandler } from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
    children: JSX.Element | string,
    backgroundColor?: string,
    width?: string,
    height?: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}

function Button({ children, backgroundColor, width, height, onClick }: ButtonProps) {
    return (
        <button
            className={styles['button']}
            style={{ 
                backgroundColor: backgroundColor,
                width: width,
                height: height
            }}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button