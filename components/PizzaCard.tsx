import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = ({ product }: any) => {
  return (
    <div className={styles.container}>
      <Link href={`/products/${product.id}`}>
        <Image src={product.image} alt="Pizza" width="200" height="200" />
      </Link>
      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.price}>${product.price[0]}</span>
      <p className={styles.desc}>{product.description}</p>
    </div>
  );
};

export default PizzaCard;
