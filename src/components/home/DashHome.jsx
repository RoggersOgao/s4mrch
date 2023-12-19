'use client'
import React, { useContext, useEffect, useState } from "react";
import styles from "./DashHome.module.scss";
import SiteContext from "../contexts/siteStates/SiteContext";
import {
  sideNavActive,
  sideNavNotActive,
  transactionActive,
  transactionNotActive,
} from "../contexts/siteStates/SiteDispatchActions";
import { BiDotsHorizontalRounded, BiMenuAltLeft } from "react-icons/bi";
import Button from "../utilities/button/Button";
import { BsQuestionCircle } from "react-icons/bs";
import { AiOutlineTransaction } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import cls from "classnames";
import HomeStats from "./homeStats/HomeStats";
// import TransactionDatatable from "./transactions/TransactionDatatable";
import TransactionsTable from "./transactions/TransactionsTable";
import { TRANSACTIONDATA } from "./transactions/transction";
import { TRANSACTIONCOLUMNS } from "./transactions/columns";
import { useMediaQuery } from "react-responsive";

function DashHome() {
  const { state, dispatch } = useContext(SiteContext);
  const [active, setActive] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1250 });

  useEffect(() => {
    if (isMobile) {
      // Handle mobile view (max-width: 1250px)
      setActive(true);
      dispatch(sideNavNotActive());
    } else {
      // Handle desktop view (min-width: 1251px)
      setActive(false);
      dispatch(sideNavActive());
    }
  }, [isMobile, dispatch]);
  
  const handleClose = () => {
    dispatch(transactionNotActive())
  }
  console.log(state)
  return (
    <div className={styles.container}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }} // Initial position off-screen
          animate={{ opacity: 1 }} // Animate to on-screen position
          exit={{ opacity: 0 }} // Animate off-screen when exiting
          transition={{ duration: 0.6 }}
          className={styles.backgroundColor}
          style={{
            display: active && state.sideNav_Active ? "block" : "none",
          }}
        ></motion.div>
      </AnimatePresence>
      <AnimatePresence initial={false}>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.6, delay: 1 }}
          className={styles.home}
          style={{
            marginLeft: active ? 0 : state.sideNav_Active ? "23.5rem" : 0,
            width: active
              ? "100%"
              : state.sideNav_Active
              ? "calc(100% - 23.5rem"
              : "100%",
          }}
        >
          <div className={styles.top}>
            <div className={styles.titleContainer}>
              <div className={styles.left}>

                {active && (
                  <div
                  className={styles.humburger}
                  onClick={() => dispatch(sideNavActive())}
                >
                  <i>
                    <BiMenuAltLeft size={34} />
                  </i>
                </div>
                )}
                
                <h1 className={styles.title}>Dashboard</h1>
              </div>
              <div className={styles.right}>
                <Button onClick={() => dispatch(transactionActive())}>
                  <AiOutlineTransaction className={styles.icon1} />
                  View Latest Transactions
                </Button>
                <Button>
                  <BsQuestionCircle className={styles.icon2} />
                  Inventory Insight
                </Button>
                <Button>
                  <BiDotsHorizontalRounded className={styles.icon3} />
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <HomeStats />
          </div>
        </motion.div>
      </AnimatePresence>

<AnimatePresence>
      {/* latest transctions datatable container */}
      {state.transactionsModalActive && (
        <motion.div
        style={{
          marginLeft: active ? 0 : state.sideNav_Active ? "23.5rem" : 0,
          width: active
            ? "100%"
            : state.sideNav_Active
            ? "calc(100% - 23.5rem"
            : "100%",
        }}
        initial={{
          opacity:0,
          x:1200
        }}
        animate={{
          opacity:1,
          x:0
        }}
        exit={{
          opacity:0,
          x:1200
        }}
        transition={{
          duration:.3
        }}
        className={styles.transactionDatatable}>
          <div className={styles.container}>
            <TransactionsTable
              DATA={TRANSACTIONDATA}
              COLUMNS={TRANSACTIONCOLUMNS}
              onClose={handleClose}
            />
          </div>
        </motion.div>
      )}
</AnimatePresence>
      {/* inventory inside data presentation and datatable */}
    </div>
  );
}

export default DashHome;
