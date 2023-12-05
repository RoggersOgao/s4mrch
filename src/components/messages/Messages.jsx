"use client"
import React, { useContext, useEffect, useState } from "react";
import styles from "./Messages.module.scss";
import SiteContext from "../contexts/siteStates/SiteContext";
import { sideNavActive, sideNavNotActive } from "../contexts/siteStates/SiteDispatchActions";
import { BiMenuAltLeft } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";

function Messages() {
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
  }, [isMobile]);

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
              </div>
              <div className={styles.right}></div>
            </div>
          </div>
          <div className={styles.bottom}>messages page</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Messages;
