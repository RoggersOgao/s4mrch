"use client"
import React, { useState, useEffect } from "react";
import ApexChart from "react-apexcharts";
import { useMediaQuery } from "react-responsive";
import styles from "./Dashed.module.scss"

function Dashed() {
  const [light, setLight] = useState();

  const prefersDarkScheme = useMediaQuery({
    query: '(prefers-color-scheme: dark)',
  });

  useEffect(() => {
    // Set the 'light' state based on the media query result
    if (prefersDarkScheme) {
      setLight(false); // User prefers dark mode
    } else {
      setLight(true); // User prefers light mode
    }
  }, [prefersDarkScheme]);

  const state = {
          
    series: [{
      name: 'Income',
      type: 'column',
      data: [1.4, 2, 2.5, 1.5, 2.5]
    }, {
      name: 'Cashflow',
      type: 'column',
      data: [1.1, 3, 4.9, 6.5, 8.5]
    }, {
      name: 'Revenue',
      type: 'line',
      data: [20, 29, 37, 36, 44]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
        background: light ? '#fff' : '#2A2D3E'
      },
      theme: {
        mode: light ? "light" : "dark",
        palette: 'palette1' // upto palette10
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [1, 1, 4]
      },
      title: {
        text: 'Stock Analysis (2019 - 2023)',
        align: 'left',
        offsetX: 0,
        style:{
            fontSize:  '12px',
            fontFamily:  undefined,
            color:  light ? "#585858" : '#999999'
        }
      },
      xaxis: {
        categories: [2019, 2020, 2021, 2022, 2023],
        labels:{
            style: {
                colors: ["#5e6277", "#5e6277", "#5e6277","#5e6277","#5e6277","#5e6277","#5e6277","#5e6277","#5e6277","#5e6277","#5e6277","#5e6277"],
                fontSize: '10px',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#008FFB'
          },
          labels: {
            style: {
              colors: '#008FFB',
            }
          },
          title: {
            text: "Income (thousand crores)",
            style: {
              color: '#008FFB',
            }
          },
          tooltip: {
            enabled: true
          }
        },
        {
          seriesName: 'Income',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#00E396'
          },
          labels: {
            style: {
              colors: '#00E396',
            }
          },
          title: {
            text: "Operating Cashflow (thousand crores)",
            style: {
              color: '#00E396',
            }
          },
        },
        {
          seriesName: 'Revenue',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#FEB019'
          },
          labels: {
            style: {
              colors: '#FEB019',
            },
          },
          title: {
            text: "Revenue (thousand crores)",
            style: {
              color: '#FEB019',
            }
          }
        },
      ],
      tooltip: {
        fixed: {
          enabled: true,
          position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60
        },
      },
      grid:{
        borderColor: light ? '#EFF3F4' : '#363849',
      },
      legend: {
        horizontalAlign: 'left',
        offsetX: 40
      }
    },
  
  
  };

  return (
    <div className={styles.container}> 
      <ApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={350}
      />
    </div>
  );
}

export default Dashed;
