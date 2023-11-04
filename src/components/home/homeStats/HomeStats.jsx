'use client'
import React, {useEffect, useState} from 'react'
import styles from "./HomeStats.module.scss"
import Image from 'next/image';

import Box from '@/components/utilities/box/Box';
import { FaMoneyBill } from 'react-icons/fa';
import CandlestickChart from '../candlestickchart/CandlestickChart';
import Dashed from '../dashed/Dashed';
import { useMediaQuery } from 'react-responsive';

function HomeStats() {

  // profit
  const yesterdayProfit = 60
  const todayProfit = 50
  const improvementProfitPercentage = ((todayProfit - yesterdayProfit) / yesterdayProfit) * 100

  // sales
  const currentSales = 122
  const previousSales = 80

  const improvementSalesPercentage = ((currentSales - previousSales) / previousSales) * 100;

  // order 
  const todaysOrders = 12
  const previousOrders = 9

  const improvementOrderPercentage = ((todaysOrders - previousOrders) / previousOrders) * 100;

  // account balance
  const balance = 2000

  const [lightIcon, setLightIcon] = useState(false)
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  
  let timeOfDay;
  
  if (currentHour >= 6 && currentHour < 12) {
    timeOfDay = "morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }

  const prefersDarkScheme = useMediaQuery({
    query: '(prefers-color-scheme: dark)',
  });

  useEffect(() => {
    // Set the 'light' state based on the media query result
    if (prefersDarkScheme) {
      setLightIcon(false); // User prefers dark mode
    } else {
      setLightIcon(true); // User prefers light mode
    }
  }, [prefersDarkScheme]);
  
  
  console.log(`It's ${timeOfDay}`);
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.contentContainer}>
            <div className={styles.contentContainerLeft}>
              <div className={styles.title}>
                <h3>{`Good ${timeOfDay}`} Janez!</h3>
                <p>Brief summary on what&apos;s happening today!</p>
              </div>
              <div className={styles.stats}>
                <div className={styles.cont}>
                  <h1>202</h1>
                  <p>Today&apos;s visits</p>
                </div>
                <div className={styles.cont}>
                  <h1>$120</h1>
                  <p>Today&apos;s total sales</p>
                </div>
              </div>
            </div>
            <div className={styles.contentContainerRight}>
              <Image
                  src={lightIcon ? "/images/illustration2Light.svg" : "/images/illustration1.svg"}
                  alt="marchindise stats illustration"
                  width={120}
                  height={130}
                  className={styles.img}
              />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          
          <div className={styles.box}>
            <Box type="sales" improvementPercentage={improvementSalesPercentage} dataNum={currentSales}/>

          </div>
          <div className={styles.box}>
            <Box type="profit" improvementPercentage={improvementProfitPercentage}  dataNum={todayProfit}/>
          </div>
          <div className={styles.box}>
          <Box type="orders" improvementPercentage={improvementOrderPercentage}  dataNum={todaysOrders}/>
          </div>
          <div className={styles.box4}>
            <div className={styles.box4Left}>
              <div className={styles.box4LeftIcon}>
                <i><FaMoneyBill /></i>
              </div>
              <div className={styles.box4LeftText}>
                <h1>$2000</h1>
                <p>Available balance</p>
              </div>
            </div>
            <div className={styles.box4Right}>
              <Image
                src={lightIcon ? "/images/Asset2Light.svg" : "/images/Asset2.svg"}
                alt="money illustration"
                width={100}
                height={100}
                className={styles.box4RightImage}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomStat}>
        <div className={styles.bottomStatLeft}>
          {/* candlestick */}
          <CandlestickChart />
        </div>
        <div className={styles.bottomStatRight}>
          <Dashed />
          {/* line graph */}
        </div>
      </div>
    </div>
  )
}

export default HomeStats