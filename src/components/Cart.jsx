import styles from "./Cart.module.css";

export function Cart({ cart, updateQuantity, clearCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cart}>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.list}>
            {cart.map((product) => (
              <li key={product.id} className={styles.item}>
                <img src={product.thumbnail} alt={product.title} />
                <div className={styles.details}>
                  <h3>{product.title}</h3>
                  <p className={styles.description}>{product.description}</p>
                  <p>R$ {product.price.toFixed(2)}</p>
                  <div className={styles.controls}>
                    <button onClick={() => updateQuantity(product.id, -1)}>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => updateQuantity(product.id, 1)}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.summary}>
            <p><strong>Total:</strong> R$ {total.toFixed(2)}</p>
            <button onClick={clearCart} className={styles.clearButton}>
              Remover todos os produtos
            </button>
          </div>
          <div className={styles.actions}>
            <button className={styles.backButton} onClick={() => window.history.back()}>
              ← Voltar
            </button>
            <button className={styles.continueButton}>
              Continuar
            </button>
          </div>
        </>
      )}
    </div>
  );
}