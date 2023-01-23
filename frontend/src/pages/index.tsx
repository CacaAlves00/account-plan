import Head from 'next/head'
import { Inter, Nunito, Quicksand } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import Header from '@/components/Header/Header'
import NavButtons from '@/components/NavButtons/NavButtons'

const nunito = Nunito({ subsets: ['latin'] })
const quicksand = Quicksand({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Plano de contas</title>
        <meta name="description" content="Plano de contas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className={nunito.className}>

        <Header />

        <NavButtons />

        <main className={styles.main}>

        </main>
      </article>
    </>
  )
}
