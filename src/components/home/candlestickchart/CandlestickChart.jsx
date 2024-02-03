"use client"

import React, {useState, useEffect} from 'react'
import styles from "./CandlestickChart.module.scss"
import ApexChart from 'react-apexcharts';
import { useMediaQuery } from 'react-responsive';


function CandlestickChart() {

  const [ light, setLight ] = useState()


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
        name: 'Profit',
        type: 'column',
        data: [440, 505, 414, 871, 227, 413, 201, 352, 752, 320, 257, 160]
      }, {
        name: 'Total Sales',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      },
  
    ],
    
      options: {
        chart: {
          height: 350,
          type: 'line',
          background: light ? '#fff' : '#2A2D3E'
        },
        stroke: {
          width: [0, 4]
        },
        title: {
          text: 'Sales Overview',
          style: {
            fontSize:  '12px',
            fontFamily:  undefined,
            color:  light ? "#585858" : '#bdbdbd'
          },
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1],
        },
        theme: {
          mode: light ? "light" : "dark",
          palette: 'palette1' // upto palette10
        },
        labels: ['01 Jan 2023', '02 Jan 2023', '03 Jan 2023', '04 Jan 2023', '05 Jan 2023', '06 Jan 2023', '07 Jan 2023', '08 Jan 2023', '09 Jan 2023', '10 Jan 2023', '11 Jan 2023', '12 Jan 2023'],
        grid: {
          show: true,
          borderColor: light ? '#EFF3F4' : '#363849',
          strokeDashArray: 0,
          position: 'back',
          xaxis: {
              lines: {
                  show: false
              }
          },   
          yaxis: {
              lines: {
                  show: true
              }
          },  
          row: {
              colors: undefined,
              opacity: 0.5
          },  
          column: {
              colors: undefined,
              opacity: 0.5
          },  
          padding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
          },  
      },
        xaxis: {
          type: 'datetime',
          labels: {
            show: true,
            rotate: -45,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: false,
            minHeight: undefined,
            maxHeight: 120,
            style: {
                colors: ["#bdbdbd", "#bdbdbd", "#bdbdbd","#bdbdbd","#bdbdbd","#bdbdbd","#bdbdbd","#bdbdbd","#bdbdbd","#bdbdbd","#bdbdbd","#bdbdbd"],
                fontSize: '10px',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        yaxis: [{
          title: {
            text: 'Profit',
            style: {
              fontSize:  '14px',
              fontWeight:  'bold',
              fontFamily:  undefined,
            },
          },
        
        }, {
          opposite: true,
          title: {
            text: 'Total Sales',
            style: {
              fontSize:  '14px',
              fontWeight:  'bold',
              fontFamily:  undefined,
            },
          }
        }]
      },
    
    
    };
  return (
    <div className={styles.container}>
        <ApexChart options={state.options} series={state.series} type="line" height={350} />
    </div>
  )
}

export default CandlestickChart