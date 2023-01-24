import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import axios from "axios";
import envFile from "../constants/config";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }: any) {
  return (
    <>
      <Head>
        <title>Pizza Delivery App</title>
        <meta name="description" content="Best Pizza in Lagos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList products={products} />
    </>
  );
}

export const getServerSideProps = async () => {
  const url = `${envFile.URL}/products`;
  const { data } = await axios.get(url);
  return {
    props: {
      products: data.products,
    },
  };
};
