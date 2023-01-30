import React from 'react';
import styles from "./cardcarrinho.module.scss"
import produto from "../../services/api.json"

import imagem from "./apple-watch.svg"

//icons
import { BsTrash } from "react-icons/bs";
import Input from '../Input+-';


function CardCarrinho() {
    return (
        < div className={styles.card__container}>
            <div className={styles.card__divimagem}>
                <img src={imagem} alt={produto.products.description} />
            </div>
            <BsTrash className={styles.card__icon} />
            <h2>Apple Watch Series 4 GPS</h2>
            <div className={styles.card__preco}>
                <Input />
                <p>R$399</p>
            </div>
        </div>

    );
}

export default CardCarrinho;