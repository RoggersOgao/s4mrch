"use client";
import React, { useState, useRef, useEffect, useContext } from "react";
import styles from "./Nav.module.scss";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { GiShoppingCart } from "react-icons/gi";
import { PiCubeThin } from "react-icons/pi";
import { RiListCheck2 } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { TbBrandDenodo } from "react-icons/tb";
import { IoFastFoodSharp, IoLogOutOutline } from "react-icons/io5";
import { BiMessage } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import Image from "next/image";
import cls from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import SiteContext from "../contexts/siteStates/SiteContext";
import {
  sideNavActive,
  sideNavNotActive,
} from "../contexts/siteStates/SiteDispatchActions";
import Link from "next/link";
import { BsArrowBarLeft } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";

function Nav() {

  const router = usePathname()

  const { state, dispatch } = useContext(SiteContext);
  let active = state.sideNav_Active;

  const navRef = useRef();
  const isTabLand = useMediaQuery({ maxWidth: 1250 });
  const [activeNav, setActiveNav] = useState(router.split("/")[1])

  const handleClickActiveNav = (type) => {
    setActiveNav(type)
  }

  useEffect(() => {
    const handleMouseDown = (e) => {
      // Your "mousedown" event logic goes here
      const areaOfInterest = !navRef.current?.contains(e.target);
      if (areaOfInterest) {
        // Handle the click outside the area of interest here
        dispatch(sideNavNotActive());
      }
    };

    if (isTabLand) {
      // If max-width is less than or equal to 1250px, enable the "mousedown" event listener
      document.addEventListener("mousedown", handleMouseDown);
    } else {
      // If max-width is greater than 1250px, disable the "mousedown" event listener
      document.removeEventListener("mousedown", handleMouseDown);
    }
    return () => {
      // Cleanup: remove the event listener when the component unmounts
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [isTabLand, dispatch]);

  const data = [
    {
      icon: <IoFastFoodSharp />,
      item: "Change name",
    },
    {
      icon: <IoFastFoodSharp />,
      item: "Change name",
    },
  ];
  return (
    <AnimatePresence initial={false}>
      {active && (
        <motion.aside
          initial={{ opacity: 0, x: -300 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.3 }}
          className={styles.aside}
          ref={navRef}
        >
          <div className={styles.avatar}>
            <div
              className={styles.closeButton}
              onClick={() => dispatch(sideNavNotActive())}
            >
              <i>
                <BsArrowBarLeft />
              </i>
            </div>
            <div className={styles.avatarContainer}>
              <div className={styles.avatarContainerLeft}>
                <Image
                  src="/images/baby.jpg"
                  alt="Profile image"
                  width={50}
                  height={50}
                  className={styles.img}
                  priority
                />
              </div>
              <div className={styles.avatarContainerRight}>
                <h3>Roggers Ogao</h3>
                <p>Admin</p>
              </div>
            </div>
          </div>
          <ul className={styles.asideNavigation}>
            <div className={styles.sideNavigationTop}>
              <Link href="/">
                <li 
                onClick={()=> handleClickActiveNav("dashboard")}
                className={activeNav === 'dashboard' ? cls(styles.navItem, styles.activeNav) : styles.navItem}
                >
                  <i>
                    <HiOutlineHomeModern />
                  </i>
                  <p>Dashboard</p>
                </li>
              </Link>
              <Link href="/orders">
              <li
              onClick={()=> handleClickActiveNav("orders")}
              className={activeNav === 'orders' ? cls(styles.navItem, styles.activeNav) : styles.navItem}
              >
                <i>
                  <GiShoppingCart />
                </i>
                <p>Orders</p>
              </li>
              </Link>
              <Link href="/products">
              <li 
               onClick={()=> handleClickActiveNav("products")}
               className={activeNav === 'products' ? cls(styles.navItem, styles.activeNav) : styles.navItem}
              >
                <i>
                  <PiCubeThin />
                </i>
                <p>Products</p>
              </li>
              </Link>
              <Link href="/categories">
              <li 
               onClick={()=> handleClickActiveNav("categories")}
               className={activeNav === 'categories' ? cls(styles.navItem, styles.activeNav) : styles.navItem}
              >
                <i>
                  <RiListCheck2 />
                </i>
                <p>Categories</p>
              </li>
              </Link>

              <Link href="/messages">
              <li
               onClick={()=> handleClickActiveNav("messages")}
               className={activeNav === 'messages' ? cls(styles.navItem, styles.activeNav) : styles.navItem}
              >
                <i>
                  <BiMessage />
                </i>
                <p>Messages</p>
              </li>
              </Link>

              <Link href="/customers">
              <li 
               onClick={()=> handleClickActiveNav("customers")}
               className={activeNav === 'customers' ? cls(styles.navItem, styles.activeNav) : styles.navItem}
              >
                <i>
                  <AiOutlineUser />
                </i>
                <p>Customers</p>
              </li>
              </Link>
              <Link href="/brands">
              <li 
               onClick={()=> handleClickActiveNav("brands")}
               className={activeNav === 'brands' ? cls(styles.navItem, styles.activeNav) : styles.navItem}
              >
                <i>
                  <TbBrandDenodo />
                </i>
                <p>Brands</p>
              </li>
              </Link>
            </div>
            <div className={styles.sideNavigationBottom}>
              <Link href="/settings">
              <li 
               onClick={()=> handleClickActiveNav("settings")}
               className={activeNav === 'settings' ? cls(styles.navItem, styles.activeNav) : styles.navItem}
              >
                <i>
                  <CiSettings />
                </i>
                <p>Settings</p>
              </li>
              </Link>
              <li
               onClick={()=> handleClickActiveNav("logout")}
               className={activeNav === 'logout' ? cls(styles.navItem, styles.activeNav) : styles.navItem}
              >
                <i>
                  <IoLogOutOutline />
                </i>
                <p>Logout</p>
              </li>
            </div>
          </ul>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default Nav;
