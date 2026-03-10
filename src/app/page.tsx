import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
    <h1>{"This is home page"}</h1>
      
 
<Image src="/image/w1.jpg" alt="watch"  width={200} height={300}/>
<Image src="/image/w2.jpg" alt="watch"  width={200} height={300}/>

    </div>
  );
}
