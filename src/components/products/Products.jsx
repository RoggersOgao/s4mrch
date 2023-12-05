"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import styles from "./Product.module.scss";
import SiteContext from "../contexts/siteStates/SiteContext";
import {
  sideNavActive,
  sideNavNotActive,
} from "../contexts/siteStates/SiteDispatchActions";
import {
  BiDotsHorizontalRounded,
  BiExport,
  BiMenuAltLeft,
} from "react-icons/bi";
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
import { TbSettingsQuestion } from "react-icons/tb";
import Button from "../utilities/button/Button";
import { BsFilter, BsPlus } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import AddNew from "./addNew/AddNew";

function Products() {
  const { state, dispatch } = useContext(SiteContext);
  const [activeSection, setActiveSection] = useState("overview");
  const [active, setActive] = useState(false);
  const [isExportsDropdownActive, setIsExportsDropdownActive] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1250 });
  const exportsRef = useRef();
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
      if (exportsRef.current && !exportsRef.current?.contains(e.target)) {
        setIsExportsDropdownActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile, dispatch]);

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

                <h1 className={styles.title}>
                  Product Management{" "}
                  <i>
                    <TbSettingsQuestion />
                  </i>
                </h1>
              </div>
              <div className={styles.right}>
                <Button>
                  <p>Open Documentation</p>
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
                    onClick={() => handleClickActiveSection("overview")}
                    className={
                      activeSection === "overview" ? styles.selectedButton : ""
                    }
                  >
                    Overview
                  </li>

                  <li
                    onClick={() => handleClickActiveSection("new")}
                    className={
                      activeSection === "new" ? styles.selectedButton : ""
                    }
                  >
                    <i>
                      <BsPlus />{" "}
                    </i>
                    add new
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
                  <Button
                    onClick={() => {
                      setIsExportsDropdownActive(!isExportsDropdownActive);
                    }}
                  >
                    <BiExport /> Exports
                  </Button>

                  {isExportsDropdownActive && (
                    <div className={styles.dropdownItems}>
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
          {activeSection == "overview" && (
            <div className={styles.bottom}>products page</div>
          )}
          {activeSection == "new" && (
            <div className={styles.bottom}>
              <AddNew />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Products;
