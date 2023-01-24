import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" fill={true} alt="Background" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Oh Yes, We did. The Lama Pizza is the best you can get around here
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}> Find our restaurant</h1>
          <p className={styles.text}>
            1614, Caroline St #125.
            <br /> NewYork, 85022
            <br /> (602) 654 6342
          </p>
          <p className={styles.text}>
            1614, Caroline St #125.
            <br /> NewYork, 85022
            <br /> (602) 654 6342
          </p>
          <p className={styles.text}>
            1614, Caroline St #125.
            <br /> NewYork, 85022
            <br /> (602) 654 6342
          </p>
          <p className={styles.text}>
            1614, Caroline St #125.
            <br /> NewYork, 85022
            <br /> (602) 654 6342
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Working Hours</h1>
          <p className={styles.text}>
            Monday - Friday
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            Saturday - Sunday
            <br /> 12:00 - 18:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
