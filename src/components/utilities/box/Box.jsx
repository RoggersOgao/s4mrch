"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./Box.module.scss";
import { PiHandCoins } from "react-icons/pi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { WiDirectionUpRight, WiDirectionDownRight } from "react-icons/wi";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GiProfit } from "react-icons/gi";

function Box({ type, improvementPercentage, dataNum }) {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef();
  const dotsRef = useRef();

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (
        active &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        dotsRef.current &&
        !dotsRef.current.contains(e.target)
      ) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [active]);

  let data;
  switch (type) {
    case "sales":
      data = {
        topIcon: <PiHandCoins />,
        dots: <BiDotsHorizontalRounded />,
        sales: `${dataNum}`,
        color: "rgba(255, 145, 0)",
        backgroundColor: "rgba(255, 145, 0, 0.346)",
        text: "This weeks sales",
        stat:
          improvementPercentage.toFixed(2) > 0
            ? `+${improvementPercentage.toFixed(2)}`
            : `${improvementPercentage.toFixed(2)}`,
        dropdownList: [
          {
            link: "/",
            name: "view details",
            icon: <FaEye />,
          },
        ],
      };
      break;
    case "profit":
      data = {
        topIcon: <GiProfit />,
        dots: <BiDotsHorizontalRounded />,
        sales: `$${dataNum}`,
        color: "rgba(39, 196, 245)",
        backgroundColor: "rgba(39, 196, 245, 0.346)",
        text: "Today's profit",
        stat:
          improvementPercentage.toFixed(2) > 0
            ? `+${improvementPercentage.toFixed(2)}`
            : `${improvementPercentage.toFixed(2)}`,
        dropdownList: [
          {
            link: "/",
            name: "view details",
            icon: <FaEye />,
          },
        ],
      };
      break;
    case "orders":
      data = {
        topIcon: <MdShoppingCartCheckout />,
        dots: <BiDotsHorizontalRounded />,
        sales: `${dataNum}`,
        color: "rgba(238, 42, 42)",
        backgroundColor: "rgba(238, 42, 42, 0.346)",
        text: "Today's orders",
        stat:
          improvementPercentage.toFixed(2) > 0
            ? `+${improvementPercentage.toFixed(2)}`
            : `${improvementPercentage.toFixed(2)}`,
        dropdownList: [
          {
            link: "/",
            name: "view details",
            icon: <FaEye />,
          },
        ],
      };
      break;

    default:
  }

  return (
    <div className={styles.box}>
      <div className={styles.spanIcon}>{data.topIcon}</div>
      <div className={styles.boxTop}>
        <div
          className={styles.boxTopLeft}
          style={{ backgroundColor: data.backgroundColor }}
        >
          <i style={{ color: data.color }}>{data.topIcon}</i>
        </div>
        <div
          className={styles.boxTopRight}
          onClick={() => setActive(!active)}
          ref={dotsRef} // Reference for three dots
        >
          <i>{data.dots}</i>
        </div>
      </div>
      <div className={styles.boxBottom}>
        <div className={styles.boxBottomLeft}>
          <h1>{data.sales}</h1>
          <p>{data.text}</p>
        </div>
        <div className={styles.boxBottomRight}>
          <div className={styles.statCalc}>
            <div className={styles.caret}>
              <i
                style={{
                  color:
                    improvementPercentage > 0
                      ? "rgb(9, 186, 0)"
                      : "rgba(238, 42, 42)",
                }}
              >
                {improvementPercentage > 0 ? (
                  <WiDirectionUpRight />
                ) : (
                  <WiDirectionDownRight />
                )}
              </i>
            </div>
            <div className={styles.percentageCalc}>
              <p
                style={{
                  color:
                    improvementPercentage > 0
                      ? "rgb(9, 186, 0)"
                      : "rgba(238, 42, 42)",
                }}
              >
                {data.stat}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className={styles.dropdown}
          >
            <div className={styles.dropcont} ref={dropdownRef}>
              <ul className={styles.dropdownList}>
                {data.dropdownList.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <li className={styles.dropdownListItem}>
                      {item.icon} {item.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Box;
