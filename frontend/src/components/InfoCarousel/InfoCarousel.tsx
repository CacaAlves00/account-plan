import React, { useState } from 'react'
import Image from 'next/image'
import number2MoneyStr from './../../utils/number2MoneyStr'
import styles from './InfoCarousel.module.scss'

type Info = {
    title: ('Faturamento bruto' | 'Faturamento líquido' | 'Contas a pagar'),
    value: number
}

function InfoCarousel() {

    const [info, setInfo] = useState<[Info, Info, Info]>([
        { title: 'Faturamento bruto', value: 233.11 },
        { title: 'Faturamento líquido', value: 230.04 },
        { title: 'Contas a pagar', value: 0.0 }
    ])

    const [infoShownIdx, setInfoShownIdx] = useState<(0 | 1 | 2 | number)>(0)

    return (
        <section id={styles['info-carousel']}>
            <div id={styles['top']}>
                <Image
                    src='/arrow_backward.svg'
                    alt='Trending up'
                    width={30}
                    height={30}
                    style={{ marginLeft: '0.6vw', cursor: 'pointer' }}
                    onClick={() => setInfoShownIdx((state) =>  
                        state === 0 ? 2 : state - 1)
                    }
                />


                <div id={styles['top-middle']}>

                    <h3>{info[infoShownIdx].title}</h3>

                    {
                        info[infoShownIdx].title !== 'Contas a pagar' ?
                            <Image
                                src='/trending_up_green.svg'
                                alt='Trending up'
                                width={30}
                                height={30}
                            /> :
                            <Image
                                src='/priority_high.svg'
                                alt='Trending up'
                                width={25}
                                height={25}
                            />
                    }

                </div>

                <Image
                    src='/arrow_forward.svg'
                    alt='Trending up'
                    width={30}
                    height={30}
                    onClick={() => setInfoShownIdx((state) =>  
                        state === 2 ? 0 : state + 1)
                    }
                    style={{ cursor: 'pointer' }}
                />
            </div>

            <div id={styles['bottom']}>
                <h3> { number2MoneyStr(info[infoShownIdx].value)}</h3>
            </div>
        </section>
    )
}

export default InfoCarousel