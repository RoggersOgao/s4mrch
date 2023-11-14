"use client";

import React, { useEffect, useState, useContext } from "react";
import styles from "./Orders.module.scss";
import { useMediaQuery } from "react-responsive";
import SiteContext from "../contexts/siteStates/SiteContext";
import {
  sideNavActive,
  sideNavNotActive,
  transactionActive,
  transactionNotActive,
} from "../contexts/siteStates/SiteDispatchActions";
import { AnimatePresence, motion } from "framer-motion";
import { BiDotsHorizontalRounded, BiMenuAltLeft } from "react-icons/bi";
import Button from "../utilities/button/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";
import OrdersTable from "./table/OrdersTable";

function Orders() {
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
    dispatch(transactionNotActive());
  };

  return (
    <div className={styles.container}>
      <AnimatePresence initial={false}>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.6, delay: 1 }}
          className={styles.home}
          style={{
            marginLeft: active ? 0 : state.sideNav_Active ? "23.5rem" : 0,
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

                <h1 className={styles.title}>Orders</h1>
              </div>
              <div className={styles.right}>
                <Button onClick={() => dispatch(transactionActive())}>
                  <AiOutlinePlusCircle className={styles.icon1} />
                  Add New
                </Button>

                <Button>
                  <BiDotsHorizontalRounded className={styles.icon3} />
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <OrdersTable />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Orders;
