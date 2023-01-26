import Head from 'next/head'
import { Nunito, Quicksand } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/Header/Header'
import DateFilteringButtons from '@/components/DateFilteringButtons/DateFilteringButtons'
import { useState } from 'react'
import MainButtons from '../components/MainButtons/MainButtons'
import ReportTable from '@/components/ReportTable/ReportTable'
import useFetchReportTableData from '@/hooks/useFetchReportTableData'
import Offcanvas from '@/components/Offcanvas/Offcanvas'

export default function Home() {

  const [columns, data] = useFetchReportTableData()

  return (
    <>
      <Head>
        <title>Plano de contas</title>
        <meta name='description' content='Plano de contas' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <article>

        <Offcanvas />

        <Header />

        <DateFilteringButtons />

        <main className={styles.main}>
          <MainButtons />

          <ReportTable columns={columns} data={data} />
        </main>
      </article>
    </>
  )
}
