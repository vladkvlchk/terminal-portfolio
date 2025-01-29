"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const [text, setText] = useState("");

  const fullText = `> Welcome to my web developer portfolio
> Name: Vladyslav Kovalchuk
> Main stack: Typescript, React, Next, Shadcn, React-Query
> Last Projects:
  1. Shoe Shop
  2. Blockchain Chat Application
  3. TBA
> Contact: 
  Email - prostoandrei9@gmail.com
  Telegram - <a target="_blank" href="https://t.me/vlad_kvlchk" className="link">t.me/vlad_kvlchk</a>
  Github: <a target="_blank" href="https://github.com/vladkvlchk" className="link">github.com/vladkvlchk</a>

> About me: I'm desired with web development. 
  Mostly I like front-end part, but I also can implement backend or smartcontracts. 
  I expect to find a job opportunity to work with a team of professionals that will positively impact on my growing-up in Saas or/and Web3 development areas. 

Type 'help' for available commands.
`;

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typing);
      }
    }, 10);

    return () => clearInterval(typing);
  }, []);

  return (
    <main className={styles.console}>
      <div className="">
        <div className="h-max float-left mr-4 mb-4">
          <div className="bg-black h-3 w-14 translate-y-[70px] mx-auto"></div>
          <Image
            src={"/me_2.jpeg"}
            width={160}
            height={160}
            alt={"Vladyslav Kovalchuk"}
          />
        </div>
        <pre dangerouslySetInnerHTML={{ __html: text }}></pre>
      </div>
      <div className={styles.cursor}></div>
    </main>
  );
}
