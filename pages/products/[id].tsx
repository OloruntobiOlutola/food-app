import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import envFile from "../../constants/config";
import styles from "../../styles/Product.module.css";

const Product = ({ product }: any) => {
  const [size, setSize] = useState(0);
  const [extra, setExtra] = useState([]);
  const [price, setPrice] = useState(product.price[0]);

  const handleSizeChange = (index: number) => {
    const difference = product.price[index] - product.price[size];
    setSize(index);
    changePrice(difference);
  };

  const changePrice = (number: number) => {
    setPrice(price + number);
  };

  const handleCheck = (e: any, option: any) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
      setExtra((prev): any => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtra(extra.filter((extra: any) => extra._id !== option._id));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={product.image} fill={true} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{product.title}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.text}>{product.description}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSizeChange(0)}>
            <Image src="/img/size.png" alt="" fill={true} />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSizeChange(1)}>
            <Image src="/img/size.png" alt="" fill={true} />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSizeChange(2)}>
            <Image src="/img/size.png" alt="" fill={true} />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {product.extras.map((extra: any) => (
            <div className={styles.options} key={extra._id}>
              <input
                type="checkbox"
                name={extra.text}
                id={extra.text}
                className={styles.checkbox}
                onClick={(e) => handleCheck(e, extra)}
              />

              <label htmlFor={extra.text}>{extra.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input
            type="number"
            name="add"
            id="add"
            className={styles.quantity}
            defaultValue={1}
          />
          <button className={styles.button}>Add to</button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }: any) => {
  const url = `${envFile.URL}/products/${params.id}`;
  const { data } = await axios.get(url);
  return {
    props: {
      product: data.product,
    },
  };
};

export default Product;
