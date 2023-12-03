"use client";

import React, { useEffect, useState, useContext, useRef } from "react";
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
import {
  BiDotsHorizontalRounded,
  BiExport,
  BiMenuAltLeft,
} from "react-icons/bi";
import Button from "../utilities/button/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsFilter, BsQuestionCircle } from "react-icons/bs";
import OrdersTable from "./table/OrdersTable";
import { FaTimesCircle } from "react-icons/fa";
import NewOrder from "./newOrder/NewOrder";
import { TbSettingsQuestion } from "react-icons/tb";
import { MdAttachFile } from "react-icons/md";

function Orders() {
  const { state, dispatch } = useContext(SiteContext);
  const [active, setActive] = useState(false);
  const [activeSection, setActiveSection] = useState("all");
  const [isActiveNewOrderModal, setIsActiveNewOrderModal] = useState(false);
  const [isExportsDropdownActive, setIsExportsDropdownActive] = useState(false);
  const exportsRef = useRef()


  const isMobile = useMediaQuery({ maxWidth: 1250 });

  const handleClickActiveSection = (type) => {
    setActiveSection(type);
  };

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

    const handleClickOutside = (e) => {
      if(
        exportsRef.current && 
        !exportsRef.current?.contains(e.target)
      ){
        setIsExportsDropdownActive(false)
      }

    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobile, dispatch]);

  const handleClose = () => {
    dispatch(transactionNotActive());
  };

  return (
    <>
      <AnimatePresence>
        {isActiveNewOrderModal && (
          <motion.div
            initial={{
              opacity: 0,
              x: 1200,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 1200,
            }}
            transition={{
              duration: 0.3,
            }}
            className={styles.addNewContainer}
          >
            <div
              className={styles.formContainer}
              style={{
                marginLeft: active ? 0 : state.sideNav_Active ? "23.5rem" : 0,
                width: active
                  ? "100%"
                  : state.sideNav_Active
                  ? "calc(100% - 23.5rem"
                  : "100%",
              }}
            >
              <div className={styles.formTopDescription}>
                <h1>Add New Order</h1>
                <p onClick={() => setIsActiveNewOrderModal(false)}>
                  <FaTimesCircle /> close
                </p>
              </div>
              <form className={styles.form}>
                <NewOrder />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

                  <h1 className={styles.title}>
                    Order Details{" "}
                    <i>
                      <TbSettingsQuestion />
                    </i>
                  </h1>
                </div>
                <div className={styles.right}>
                  <Button>
                    <p>Open Documentation</p>
                  </Button>
                  <Button onClick={() => setIsActiveNewOrderModal(true)}>
                    <AiOutlinePlusCircle className={styles.icon1} />
                    Add New
                  </Button>

                  <Button>
                    <BiDotsHorizontalRounded className={styles.icon3} />
                  </Button>
                </div>
              </div>
              <div className={styles.titleDescription}>
                <p>
                  In the order details section, you can review and manage all
                  orders with their details. You can view and edit information
                  such as Delivery Status. All changes made to this field are
                  updated in real time with your customers, Please be careful.
                </p>
              </div>

              <div className={styles.orderStatusFilters}>
                <div className={styles.cont}>
                  <ul className={styles.list}>
                    <li
                      onClick={() => handleClickActiveSection("all")}
                      className={
                        activeSection === "all" ? styles.selectedButton : ""
                      }
                    >
                      All Orders
                    </li>
                    <li
                      onClick={() =>
                        handleClickActiveSection("paymentCompleted")
                      }
                      className={
                        activeSection === "paymentCompleted"
                          ? styles.selectedButton
                          : ""
                      }
                    >
                      Payment Completed
                    </li>
                    <li
                      onClick={() => handleClickActiveSection("inRoute")}
                      className={
                        activeSection === "inRoute" ? styles.selectedButton : ""
                      }
                    >
                      In Route
                    </li>
                    <li
                      onClick={() => handleClickActiveSection("delivered")}
                      className={
                        activeSection === "delivered"
                          ? styles.selectedButton
                          : ""
                      }
                    >
                      Delivered
                    </li>
                    <li
                      onClick={() => handleClickActiveSection("completed")}
                      className={
                        activeSection === "completed"
                          ? styles.selectedButton
                          : ""
                      }
                    >
                      Completed
                    </li>
                    <li
                      onClick={() => handleClickActiveSection("canceled")}
                      className={
                        activeSection === "canceled"
                          ? styles.selectedButton
                          : ""
                      }
                    >
                      Canceled
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.searchAndExports}>
                <div className={styles.searchAndExportsLeft}>
                  <div className={styles.search}>
                    <input type="search" placeholder="Search" />
                  </div>
                </div>
                <div className={styles.searchAndExportsRight}>
                  <Button>
                    <BsFilter /> Filters
                  </Button>
                  <Button>
                    <MdAttachFile /> Attachments
                  </Button>
                  <div className={styles.exportsDropdown} ref={exportsRef}>
                    <Button onClick={()=> {setIsExportsDropdownActive(!isExportsDropdownActive)}}>
                      <BiExport /> Exports
                    </Button>

                    {isExportsDropdownActive && (

                      <div className={styles.dropdownItems} >
                        <ul>
                          <li>export as xlsx</li>
                          <li>export as excel</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <OrdersTable />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default Orders;
