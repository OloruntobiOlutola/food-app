import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="Pizza" width="200" height="200" />
      <h1 className={styles.title}>Di Cerva Forci Pu</h1>
      <span className={styles.price}>$19.45</span>
      <p className={styles.desc}>
        compiled client and server successfully in 426 ms (216 modules)
      </p>
    </div>
  );
};

export default PizzaCard;
