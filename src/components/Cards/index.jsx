import React from 'react';
import styles from "./cards.module.scss"
import produto from "../../services/api.json"

import imagem from "./apple-watch.svg"

//icons
import { RiShoppingBag3Line } from 'react-icons/ri';

function Cards() {
    return (
        < div className={styles.card__container}>

            <div className={styles.card__imagem}>
                <img src={imagem} alt={produto.products.description} />
            </div>

            <div className={styles.card__titulopreco}>
                <h2>Apple Watch Series 4 GPS</h2>
                <p>R$399</p>
            </div>

            <p className={styles.card__descricao}>Redesigned from scratch and completely revised.</p>

            <button className={styles.card__comprar}>
                < RiShoppingBag3Line />
                <p>COMPRAR</p>
            </button>
        </div>

    );
}

export default Cards;