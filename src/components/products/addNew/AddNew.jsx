import React from "react";
import styles from "./AddNew.module.scss";
import { FaAngleDown } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";

function AddNew() {
  return (
    <div className={styles.container}>
      <div className={styles.addNewFormContainer}>
        <form className={styles.formContainer}>
          <div className={styles.left}>
            <div className={styles.formGroup}>
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                autoComplete="off"
                placeholder="Nike Air Force"
                className={styles.productName}
              />
            </div>
           {/* category group */}
           <div className={styles.categoryGroups}>
             {/* categories */}

             <div className={styles.formGroup}>
              <label htmlFor="category">
                Category{" "}
                <span>
                  <BsFillInfoCircleFill />
                </span>{" "}
              </label>
              <div className={styles.categoryDropdown}>
                <input
                  className={styles.dropdownButton}
                  id="category"
                  placeholder="shoes"
                />
                <span>
                  <FaAngleDown />
                </span>
                <div className={styles.dropdownList}>
                  <ul>
                    <li>Sneakers</li>
                    <li>Electronics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* sub category */}
            <div className={styles.formGroup}>
              <label htmlFor="subCategory">
                Sub Category{" "}
              </label>
              <div className={styles.categoryDropdown}>
                <input
                  className={styles.dropdownButton}
                  id="subCategory"
                  placeholder="sneakers"
                />
                <span>
                  <FaAngleDown />
                </span>
                <div className={styles.dropdownList}>
                  <ul>
                    <li>Sneakers</li>
                    <li>Electronics</li>
                  </ul>
                </div>
              </div>
            </div>
           </div>
            {/* brand  */}
            <div className={styles.formGroup}>
              <label htmlFor="brand">Brand</label>
              <div className={styles.brandDropdown}>
                <input
                  className={styles.dropdownButton}
                  id="brand"
                  placeholder="Nike"
                />
                <span>
                  <FaAngleDown />
                </span>

                <div className={styles.dropdownList}>
                  <ul>
                    <li>Nike</li>
                    <li>Puma</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* description */}

            <div className={styles.formGroup}>
              <label htmlFor="description">
                Description{" "}
                <span>
                  <BsFillInfoCircleFill />
                </span>
              </label>
              <textarea id="description" />
            </div>
          </div>
          <div className={styles.right}>right side</div>
        </form>
      </div>
    </div>
  );
}

export default AddNew;
