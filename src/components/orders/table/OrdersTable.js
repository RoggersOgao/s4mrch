import React from "react";
import styles from "./OrdersTable.module.scss";
import Moment from "react-moment";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { LuArrowDownNarrowWide } from "react-icons/lu";

import { LuUser2 } from "react-icons/lu";
import Image from "next/image";

function OrdersTable() {
  const myDate = new Date();

  // function to convert the numbers to ksh currency
  const formatAsCurrency = (number) => {
    const formattedString = new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES'
    }).format(number);
  
    // Remove the currency prefix ("Ksh ")
    const amountWithoutPrefix = formattedString.replace(/^Ksh\s/, '');
  
    return amountWithoutPrefix;
  };

  return (
    <div className={styles.container}>
      <div className={styles.orderContainer}>
        <ul className={styles.orderList}>
          <li className={styles.orderListItem}>
            <div className={styles.content}>
              <div className={styles.imageItem}>
                <Image
                  src="/images/paymentMade.svg"
                  alt="payment"
                  width={50}
                  height={50}
                  className={styles.image}
                />
              </div>
              <div className={styles.orderStts}>
                <h3>SN000000001</h3>
                <p>Payment Completed</p>
              </div>
              <div className={styles.orderDateItem}>
                <h3>Order Date</h3>
                <p>
                  <Moment format="Do MMM - HH:mm">{myDate}</Moment>
                </p>
              </div>
              <div className={styles.orderPyAmnt}>
                <h3>Payable Amount</h3>
                <p>
                  <sup>ksh</sup>{formatAsCurrency(3335.56)}
                </p>
              </div>
              <div className={styles.orderCstmEmail}>
                <h3>Email</h3>
                <p>roggersog@gmail.com</p>
              </div>
              <div className={styles.orderOptions}>
                <h3>
                  <LuArrowDownNarrowWide />
                </h3>
              </div>
            </div>

            <div className={styles.orderDetailsContainer}>
              <div className={styles.orderDetailsContainerTop}>
                <div className={styles.customerName}>
                  <div className={styles.customerNameLeft}>
                    <i>
                      <LuUser2 />
                    </i>
                  </div>
                  <div className={styles.customerNameRight}>
                    <h3>Customer</h3>
                    <p>Roggers Ogao</p>
                  </div>
                </div>
                <div className={styles.orderStatus}>
                  <div className={styles.orderStatusLeft}>
                    <Image
                      src="/images/paymentMade.svg"
                      alt="payment"
                      width={35}
                      height={35}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.orderStatusRight}>
                    <h3>Order status</h3>
                    <p>Payment Completed</p>
                  </div>
                </div>
                <div className={styles.shippingFee}>
                  <h3>Shipping Fee</h3>
                  <p>
                    <sup>ksh</sup>{formatAsCurrency(300)}
                  </p>
                </div>
                <div className={styles.Address}>
                  <h3>Address</h3>
                  <p>456 Oak St Nairobi</p>
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
                    <tr>
                      <td>1</td>
                      <td>SHP000001</td>
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
                            <p>Nike</p>
                            <h3>Free Air Force</h3>
                            <div className={styles.productProperties}>
                              <p>S-42</p>
                              <p>Red</p>
                              <p>Other Props</p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className={styles.productUnitSize}>
                        <sup>ksh</sup>{formatAsCurrency(3035.56)}
                      </td>
                      <td>1</td>
                      <td className={styles.productPayableAmount}>
                        <sup>ksh</sup>{formatAsCurrency(3035.56)}
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="2">
                        <h3>Merchandise</h3>
                        <p>
                          <sup>ksh</sup>{formatAsCurrency(3035.56)}
                        </p>
                      </td>
                      <td>
                        <h3>Promo/Voucher</h3>
                        <p>
                          <sup>ksh</sup>0
                        </p>
                      </td>
                      <td colspan="3" className={styles.subTotal}>
                        <h3>SubTotal</h3>
                        <p>
                          <sup>ksh</sup>{formatAsCurrency(3335.56)}
                        </p>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OrdersTable;
