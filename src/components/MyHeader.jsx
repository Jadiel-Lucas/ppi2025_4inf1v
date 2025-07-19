import { ShoppingBasket } from 'lucide-react';
import styles from './MyHeader.module.css';
import { Link } from 'react-router';
//import { AlarmClock } from 'lucide-react';*

export function MyHeader({ cart }) {
    /*return (
        <header className={styles.header}>
            <AlarmClock size={72} />
            <h1>Foco, Força, Fé</h1>
        </header>
    );*/

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.link}><h1>TJA Megastore</h1></Link>
            <Link to="/cart" className={styles.link}>
                <div className={styles.cartInfo}>
                    <ShoppingBasket size={32} />
                    <p>
                        Total: ${" "}
                        {cart
                            .reduce((total, product) => total + product.price * product.quantity, 0)
                            .toFixed(2)}
                    </p>

                </div>
            </Link>
        </div>
    );
}
