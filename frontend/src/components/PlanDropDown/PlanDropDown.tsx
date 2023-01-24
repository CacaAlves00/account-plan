import React, { useEffect } from 'react'
import styles from './PlanDropDown.module.scss'
import ReactDropdown from 'react-dropdown'
import enum2Array from '@/utils/enum2Array'
import { Plans } from '@/redux/states/plan'
import 'react-dropdown/style.css'

const options = enum2Array(Plans)

function PlanDropDown() {
  

  return (
    <ReactDropdown 
      className={styles['plan-drop-down']}
      menuClassName={styles['plan-drop-down-menu']}
      controlClassName={styles['plan-drop-down-control']}
      options={options} 
      onChange={(option) => console.log(option)} 
      value={options[0]} 
    />
  )
}

export default PlanDropDown