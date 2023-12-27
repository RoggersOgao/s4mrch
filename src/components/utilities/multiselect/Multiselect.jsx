import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./Multiselect.module.scss";
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai";

function Multiselect({ label_name, icon, id }) {
  const [active, setActive] = useState(false);
  const [sizes, setSizes] = useState([
    "EU-20",
    "EU-22",
    "EU-23",
    "EU-24",
    "EU-36",
    "EU-27",
    "EU-38",
    "EU-38.5",
    "EU-39",
    "EU-40",
    "EU-41",
    "EU-41.5",
    "EU-42",
    "EU-43",
  ]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const moveItem = (item, sourceList, destinationList, setSourceList, setDestinationList) => {
    const updatedSourceList = sourceList.filter((i) => i !== item);
    const updatedDestinationList = [...destinationList, item];

    setSourceList(updatedSourceList);
    setDestinationList(updatedDestinationList);
  };
  
  const ddRef = useRef();

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (ddRef.current && !ddRef.current?.contains(e.target)) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);


  return (
    <div className={styles.multi_select_container}>
      <div className={styles.dropdown} ref={ddRef}>
        <label htmlFor={id}>
          {label_name} <span>{icon}</span>
        </label>
        <div className={styles.dropdown__label}>
          <button type="button"
          style={{padding: selectedSizes.length == 0 ? "1.21rem" : "0.61rem"}}
          id={id} onClick={() => setActive(!active)}>

            {selectedSizes.length >= 1 ? (
              <ul onClick={(e) => e.stopPropagation()}>
          {selectedSizes.map((item) => (
            <li
              key={item}
            >
              {item} 
              
              <span 
              onClick={() => moveItem(item, selectedSizes, sizes, setSelectedSizes, setSizes)}
              ><AiOutlineClose /></span>
            </li>
          ))}
        </ul>
            ): "EU-40"}
          
             <AiFillCaretDown />

          </button>
        </div>

        {active && (
          <div className={styles.dropdown__list}
          style={{top: selectedSizes.length > 7 ? "11rem" : "7.5rem"}}
          >
            <ul className={styles.list}>
              {sizes.map((item, index) => (
                 <li key={index} onClick={() => moveItem(item, sizes, selectedSizes, setSizes, setSelectedSizes)}>
                 {item}
               </li>
              ))}
            </ul>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default Multiselect;
