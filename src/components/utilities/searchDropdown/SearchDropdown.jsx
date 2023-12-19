import React, { useState, useRef, useEffect, useCallback } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import styles from "./SearchDropdown.module.scss";
import { BsFillInfoCircleFill } from "react-icons/bs";

function SearchDropdown({label_name, icon, id, items, setField, field}) {
  const [active, setActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0])
  

  const ddRef = useRef()

 

  useEffect(() => {

    const handleMouseDown = (e) => {
      if(ddRef.current && !ddRef.current?.contains(e.target)){
        setActive(false)
      }

    }

    document.addEventListener("mousedown", handleMouseDown)

    return() => {
      document.removeEventListener("mousedown", handleMouseDown)
    }
  },[])

  return (
    <div className={styles.container} ref={ddRef}>
      <div className={styles.dropdown}>
        <label htmlFor={id}>{label_name} <span>{icon}</span></label>
        <div className={styles.dropdownLabel}>
          <button type="button" id={id} onClick={() => setActive(!active)}>
            {selectedItem} <AiFillCaretDown />
          </button>
        </div>

        {active && (
          <div className={styles.dropdownList}>
            <ul>
              {items.map((item,index)=> (
                <li onClick={() => {setSelectedItem(item), setField(field, item)}} key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchDropdown;
