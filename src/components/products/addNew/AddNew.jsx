"use client";
import React, { useEffect, useState } from "react";
import styles from "./AddNew.module.scss";
import { FaAngleDown } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import SearchDropdown from "@/components/utilities/searchDropdown/SearchDropdown";
import Fashion from "../fashion/Fashion";
import Multiselect from "@/components/utilities/multiselect/Multiselect";

function AddNew() {
  const [form, setForm] = useState({});

  function setField(field, value) {
    setForm({
      ...form,
      [field]: value,
    });
  }
  useEffect(() => {
    setForm({
      category: "Fashion",
      gender: "Male",
      sub_category: "Sneakers",
    });
  }, []);

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
              <div className={styles.category}>
                <SearchDropdown
                  setField={setField}
                  label_name={"Categoy"}
                  field="category"
                  id="category"
                  items={["Fashion", "Hardware"]}
                  icon={<BsFillInfoCircleFill />}
                />
              </div>
              {/* Gender */}
              {form.category == "Fashion" && (
                <div className={styles.gender}>
                  <SearchDropdown
                    setField={setField}
                    label_name="Gender"
                    field="gender"
                    id="gender"
                    items={["Male", "Female"]}
                  />
                </div>
              )}

              {/* sub category */}
              <div className={styles.subCategory}>
                <SearchDropdown
                  setField={setField}
                  label_name="Sub Categoy"
                  field="sub_category"
                  id="subCategory"
                  items={["Sneakers", "shoes"]}
                />
              </div>
            </div>
            {/* brand  */}
            <div className={styles.formGroup}>
              <SearchDropdown
                setField={setField}
                label_name="Brand"
                field="brand"
                id="brand"
                items={["Nike", "Balenciaga"]}
              />
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
          <div className={styles.right}>
            {form.category == "Fashion" && (
              <>
                <div className={styles.imagesContainer}>
                  <Fashion />

                  <p className={styles.description}>
                    You need to add at least 4 images. Pay attention to the
                    quality of the pictures you add, comply with the background
                    color standards. Pictures must be in certain dimensions.
                    Notice that the product shows all the details.
                  </p>
                </div>
                <div className={styles.fashionProps}>
                  <div className={styles.sizeContainer}>
                    <div className={styles.formGroup}>
                      <Multiselect
                        label_name="Product Size"
                        id="size"
                        icon={<BsFillInfoCircleFill />}
                      />
                    </div>
                  </div>
                  <div className={styles.colorProps}>
                    <SearchDropdown
                      setField={setField}
                      label_name={"Color"}
                      field="color"
                      id="color"
                      items={["Black", "white"]}
                      icon={<BsFillInfoCircleFill />}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNew;
