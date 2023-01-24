import React, { useEffect } from 'react'
import { DateFilter } from './../../pages/index'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import styles from './DateFilteringButtons.module.scss'
import { DateFilters, setDateFilter } from '@/redux/states/dateFilter'

function DateFilteringButtons() {

  const dateFilter = useAppSelector((state) => state.dateFilter.dateFilter)
  const dispatch = useAppDispatch()

  const setUpStyleAndClickCb = (df: DateFilters) => ({
    style: {
      backgroundColor: dateFilter === df ? 'rgb(133,187,101,70%)' : 'transparent'
    },

    onClick: () => dispatch(setDateFilter(df))
  })



  return (
  <nav id={styles['date-filtering-buttons']}>
    <button {...setUpStyleAndClickCb(DateFilters.MONTH)}>
      Mês
    </button>
    <button {...setUpStyleAndClickCb(DateFilters.YESTERDAY)}> 
    Ontem
    </button>
    <button {...setUpStyleAndClickCb(DateFilters.TODAY)}>
      Hoje
    </button>
  </nav >
)
}

export default DateFilteringButtons