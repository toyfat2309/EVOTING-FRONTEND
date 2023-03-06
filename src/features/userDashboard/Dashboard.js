
import React from 'react'
import BarChart from './BarChart'
import Event from './Event'
import RegisteredVoters from './RegisteredVoters'

const Dashboard = () => {
  return (
    <div style={{color:'white'}}>
        <BarChart/>
        <RegisteredVoters/>
        <Event/>
    </div>
  )
}

export default Dashboard