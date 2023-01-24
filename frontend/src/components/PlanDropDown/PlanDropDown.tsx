import React, { useEffect } from 'react'
import styles from './PlanDropDown.module.scss'
import ReactDropdown from 'react-dropdown'
import enum2Array from '@/utils/enum2Array'
import { Plans, setPlan } from '@/redux/states/plan'
import 'react-dropdown/style.css'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { EnumMember } from 'typescript'

const options = enum2Array(Plans)

function PlanDropDown() {
  
  const dispatch = useAppDispatch()
  const plan = useAppSelector((state) => state.plan.plan)

  return (
    <ReactDropdown 
      className={styles['plan-drop-down']}
      menuClassName={styles['plan-drop-down-menu']}
      controlClassName={styles['plan-drop-down-control']}
      options={options} 
      onChange={(option) => dispatch(setPlan(Plans[`${option.value}`]))} 
      value={Plans[plan]} 
    />
  )
}

export default PlanDropDown