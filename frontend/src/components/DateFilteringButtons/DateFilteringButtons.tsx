import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import styles from './DateFilteringButtons.module.scss'
import { DateFilters, setDateFilter } from '@/redux/states/dateFilter'
import Button from '../Button/Button'

function DateFilteringButtons() {

  const dateFilter = useAppSelector((state) => state.dateFilter.dateFilter)
  const dispatch = useAppDispatch()

  const setUpStyleAndClickCb = (df: DateFilters) => ({
    backgroundColor: dateFilter === df ? 'rgb(133,187,101,70%)' : 'transparent',
    onClick: () => dispatch(setDateFilter(df))
  })



  return (
    <nav id={styles['date-filtering-buttons']}>
      <Button {...setUpStyleAndClickCb(DateFilters.MONTH)}>
        Mês
      </Button>
      <Button {...setUpStyleAndClickCb(DateFilters.YESTERDAY)}>
        Ontem
      </Button>
      <Button {...setUpStyleAndClickCb(DateFilters.TODAY)}>
        Hoje
      </Button>
    </nav >
  )
}

export default DateFilteringButtons