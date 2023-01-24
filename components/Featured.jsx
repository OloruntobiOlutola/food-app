import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  const [count, setCount] = useState(0);
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];

  const handleArrow = (side) => {
    if (side === "l") {
      setCount(count !== 0 ? count - 1 : 2);
    } else {
      setCount(count !== 2 ? count + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.containerArrow}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src="/img/arrowl.png" alt="left" fill="true" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * (count - 1)}vw)` }}
      >
        {images.map((img, count) => (
          <div className={styles.imageContainer} key={count}>
            <Image src={img} alt="" fill="true" />
          </div>
        ))}
      </div>
      <div
        className={styles.containerArrow}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image src="/img/arrowr.png" alt="" fill="true" />
      </div>
    </div>
  );
};

export default Featured;
