"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./OrdersTable.module.scss";
import Moment from "react-moment";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { LuArrowDownNarrowWide } from "react-icons/lu";
import { data } from "./data";
import { LuUser2 } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function OrdersTable() {
  const myDate = new Date();

  const [activeList, setActiveList] = useState(Array(data.length).fill(false));
  const [activeIndex, setActiveIndex] = useState(null);
  const collapsibleRef = useRef(null);

  const handleCloseCollapsible = (index) => {
    setActiveList((prevActiveList) =>
      prevActiveList.map((active, i) => (i === index ? !active : false))
    );
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        collapsibleRef.current &&
        !collapsibleRef.current?.contains(event.target) &&
        activeIndex !== null
      ) {
        // Clicked outside the active collapsible section
        setActiveList(Array(data.length).fill(false));
        setActiveIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeIndex]);

  // function to convert the numbers to ksh currency
  const formatAsCurrency = (number) => {
    const formattedString = new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
    }).format(number);

    // Remove the currency prefix ("Ksh ")
    const amountWithoutPrefix = formattedString.replace(/^Ksh\s/, "");

    return amountWithoutPrefix;
  };

  function switchOrderState(type) {
    switch (type) {
      case "processing":
        return {
          data: {
            image: "/images/paymentMade.svg",
          },
        };
      case "accepted":
        return {
          data: {
            image: "/images/orderAccepted.svg",
          },
        };
      case "inRoute":
        return {
          data: {
            image: "/images/DeliveryInRoute.svg",
          },
        };
      case "delivered":
        return {
          data: {
            image: "/images/shipmentDelivered.svg",
          },
        };
      case "completed":
        return {
          data: {
            image: "/images/done.svg",
          },
        };
      default:
        return null; // or handle default case appropriately
    }
  }
  

  return (
    <div className={styles.container}>
      <div className={styles.orderContainer}>
        <ul className={styles.orderList}>
          {data.map((item, index) => (
            <li className={styles.orderListItem} key={index}>
              <div className={styles.content}>
                <div className={styles.imageItem}>
                  <Image
                    src={switchOrderState(item.orderStatus)?.data?.image}
                    alt="payment"
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                </div>
                <div className={styles.orderStts}>
                  <h3>{item.orderNo}</h3>
                  <p>{item.orderStatus}</p>
                </div>
                <div className={styles.orderDateItem}>
                  <h3>Order Date</h3>
                  <p>
                    <Moment format="Do MMM - HH:mm">{item.orderDate}</Moment>
                  </p>
                </div>
                <div className={styles.orderPyAmnt}>
                  <h3>Payable Amount</h3>
                  <p>
                    <sup>ksh</sup>
                    {formatAsCurrency(item.payableAmount)}
                  </p>
                </div>
                <div className={styles.orderCstmEmail}>
                  <h3>Email</h3>
                  <p>{item.email}</p>
                </div>
                <div className={styles.orderOptions}>
                  <h3 onClick={() => handleCloseCollapsible(index)}>
                    <LuArrowDownNarrowWide />
                  </h3>
                </div>
              </div>

              {/* beginning of the active collapsible */}
              <AnimatePresence>
                {activeList[index] && (
                  <motion.div
                    initial={{
                      scaleX: 0,
                      opacity: 0
                    }}
                    animate={{ scaleX: 1, opacity:1 }}
                    transition={{ delay: .3 }}
                    exit={{ scaleX: 0, opacity:0 }}
                    style={{transformOrigin:"center"}}
                    ref={collapsibleRef}
                    className={styles.orderDetailsContainer}
                  >
                    <div className={styles.orderDetailsContainerTop}>
                      <div className={styles.customerName}>
                        <div className={styles.customerNameLeft}>
                          <i>
                            <LuUser2 />
                          </i>
                        </div>
                        <div className={styles.customerNameRight}>
                          <h3>Customer</h3>
                          <p>{item.customer}</p>
                        </div>
                      </div>
                      <div className={styles.orderStatus}>
                        <div className={styles.orderStatusLeft}>
                          <Image
                            src={switchOrderState(item.orderStatus)?.data?.image}
                            alt="payment"
                            width={35}
                            height={35}
                            className={styles.image}
                          />
                        </div>
                        <div className={styles.orderStatusRight}>
                          <h3>Payment Status</h3>
                          <p>{item.orderStatus}</p>
                        </div>
                      </div>
                      <div className={styles.paymentMethod}>
                        <h3>Payment Method</h3>
                        <p>{item.paymentMethod}</p>
                      </div>
                      <div className={styles.shippingFee}>
                        <h3>Shipping Fee</h3>
                        <p>
                          <sup>ksh</sup>
                          {formatAsCurrency(item.shippingFee)}
                        </p>
                      </div>
                      <div className={styles.Address}>
                        <h3>Address</h3>
                        <p>{item.billingAddress}</p>
                      </div>
                      <div className={styles.moreActions}>
                        <h3>
                          <BiDotsHorizontalRounded />
                        </h3>
                      </div>
                    </div>
                    <div className={styles.orderDetailsContainerBottom}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Shipment ID</th>
                            <th>Product Details</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {item.products.map((product, productIndex) => (
                            <tr key={productIndex}>
                              <td>{productIndex + 1}</td>
                              <td>{item.shipmentID}</td>
                              <td>
                                <div className={styles.productContainer}>
                                  <div className={styles.productContainerLeft}>
                                    <Image
                                      src="/images/airforce.jpeg"
                                      alt="product name"
                                      width={50}
                                      height={50}
                                      className={styles.image}
                                    />
                                  </div>
                                  <div className={styles.productContainerRight}>
                                    <p>{product.productBrand}</p>
                                    <h3>{product.productName}</h3>
                                    <div className={styles.productProperties}>
                                      <p>{product.productDetails.size}</p>
                                      <p>{product.productDetails.color}</p>
                                      <p>Other Props</p>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className={styles.productUnitSize}>
                                <sup>ksh</sup>
                                {formatAsCurrency(product.unitPrice)}
                              </td>
                              <td>{product.quantity}</td>
                              <td className={styles.productPayableAmount}>
                                <sup>ksh</sup>
                                {formatAsCurrency(product.amount)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colSpan="2">
                              <h3>Merchandise</h3>
                              <p>
                                <sup>ksh</sup>
                                {formatAsCurrency(13500)}
                              </p>
                            </td>
                            <td>
                              <h3>Promo/Voucher</h3>
                              <p>
                                <sup>ksh</sup>
                                {item.promoValue}
                              </p>
                            </td>
                            <td>
                              <h3>Discount</h3>
                              <p>
                                <sup>ksh</sup>
                                {item.discountValue}
                              </p>
                            </td>
                            <td colSpan="2" className={styles.subTotal}>
                              <h3>SubTotal</h3>
                              <p>
                                <sup>ksh</sup>
                                {formatAsCurrency(item.payableAmount)}
                              </p>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {/* the active state ends */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OrdersTable;
