import React from 'react';
import styles from "./input.module.scss"

//icons
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from "react-icons/ai";


function Input() {
    return (
        < div className={styles.input__container}>
          <span><AiOutlinePlus /></span>  
          <input placeholder='1'/>
          <span><AiOutlineMinus/></span>
        </div>

    );
}

export default Input;