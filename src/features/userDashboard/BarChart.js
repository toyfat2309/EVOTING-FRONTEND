import React from 'react'
import { ArcElement, Chart as ChartJs, BarElement, CategoryScale, Tooltip, Legend, LinearScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { Box, Grid } from '@mui/material';

ChartJs.register(BarElement, CategoryScale, Tooltip, Legend, LinearScale);

const data = {
  labels: ['president', 'Governor', 'Lga',],
  datasets: [{
    barPercentage: 0.5,
    barThickness: 100,
    maxBarThickness: 8,
    label: 'Number Of Registered Voters',
    data: [1, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const BarChart = () => {
  return (
    <>
      <Grid container sx={{ mb:5,justifyContent:'center' }}>
        <Grid item xs={12} sm={10} sx={{pl:{xs:0,md:5}}}>
          <Bar data={data} style={{ width: '100%', height: '400px' }}>
          </Bar>
        </Grid>
      </Grid>
    </>
  )
}

export default BarChart