import React, { useState } from 'react';
import styles from "./input.module.scss"

//icons
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from "react-icons/ai";

function Input() {
  const [valor, setValor] = useState(0);
  const somar = () => setValor(prevValor => prevValor + 1)
  const subtrair = () => {
    if (valor < 1) {
      setValor(prevValor => prevValor)
    } else {
      setValor(prevValor => prevValor - 1)
    }
  }

  return (
    < div className={styles.input__container}>
      <span onClick={somar}><AiOutlinePlus /></span>
      <input defaultValue={valor} />
      <span onClick={subtrair}><AiOutlineMinus /></span>
    </div>
  );
}



export default Input;