import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./components/banner/Banner";
import Offer from "./components/offer/Offer";


export default function Home() {
  return (   
    <div>
      <Banner/>
      <Offer/>
      </div>
  );
}
