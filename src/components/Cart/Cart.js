import styles from "./Cart.module.css";
import Modal from "components/UI/UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: "2", price: "12.99" }].map(
        (item) => {
          <li>{item.name}</li>;
        }
      )}
    </ul>
  );

  return (
    <Modal>
      <div>{cartItems}</div>
      <div className={styles.total}>
        <div>Total Ammount</div>
        <div>35.62</div>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
