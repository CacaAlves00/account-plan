import React, { useEffect } from 'react'
import styles from './PlanDropDown.module.scss'
import ReactDropdown from 'react-dropdown'
import { Plan, Plans, setPlan } from '@/redux/states/plan'
import 'react-dropdown/style.css'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import enumPlans2Array from './enumPlans2Array'


const options: Plan[] = enumPlans2Array()

function PlanDropDown() {

  const dispatch = useAppDispatch()
  const plan = useAppSelector((state) => state.plan.plan)

  return (
    <ReactDropdown
      className={styles['plan-drop-down']}
      menuClassName={styles['plan-drop-down-menu']}
      controlClassName={styles['plan-drop-down-control']}
      options={options}
      onChange={(option) => {
        const optionVal = option.value as Plan
        dispatch(setPlan(Plans[optionVal]))
      }}
      value={Plans[plan]}
    />
  )
}

export default PlanDropDown