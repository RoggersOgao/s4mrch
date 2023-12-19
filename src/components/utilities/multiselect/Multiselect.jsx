import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./Multiselect.module.scss";
import { AiFillCaretDown } from "react-icons/ai";

function Multiselect({ label_name, icon, id }) {

    const [active, setActive] = useState(false)
    const [sizeList, setSizeList] = useState([])

    function setSizesField(field,value) {
      setSizeList({
          ...sizeList,
          [field]:value
      });
    }


  const ddRef = useRef()

  

  console.log(sizeList)

 

  const sizes = [
    'EU-20',
    'EU-22',
    'EU-23',
    'EU-24',
    'EU-36',
    'EU-27',
    'EU-38',
    'EU-38.5',
    'EU-39',
    'EU-40',
    'EU-41',
    'EU-41.5',
    'EU-42',
    'EU-43',
  ]


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
    <div className={styles.multi_select_container}>
      <div className={styles.dropdown} ref={ddRef}>
        <label htmlFor={id}>
          {label_name} <span>{icon}</span>
        </label>
        <div className={styles.dropdown__label}>
          <button type="button" id={id} onClick={() => setActive(!active)}>
            Product size <AiFillCaretDown />
          </button>
        </div>

        {active && (
          <div className={styles.dropdown__list}>
            <ul className={styles.list}>
              {sizes.map((item,index)=>(
                <li onClick={() => setSizesField(index, item)} key={index} >{item}</li>
              ))}
              
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Multiselect;
