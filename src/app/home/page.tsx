import Image from "next/image";
import type { Metadata } from "next";

//Imagens
import rosa from "../../../public/img/rosa.jpg";
import laranja from "../../../public/img/laranja.jpg";
import verde from "../../../public/img/verde.jpg";

export const metadata: Metadata = {
  title: "Teste next.js",
  description: "Aula de programação de aplicativos",
};


export default function Home() {

  const dados: {imagem: string; titulo: string}[] = [

    {
      imagem: {rosa},
      dias: "4 days ago",
      titulo: "Post One",
      texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",

    }
  ]

  const style = {
    card: "w-72 border shadow-2xl rounded-2xl text-center m-10 hover:scale-110 transition duration-500 ease-in-out",
    imagem: "w-full rounded-t-2xl",
    buttom: "border shadow-2xl flex flex-row bg-pink-700 rounded-b-2xl",
    info: "w-1/3  text-white  border-r-zinc-500 p-2",
    h3: "text-pink-700 font-bold text-sm mt-6",
    h2: "font-bold text-2xl",
    h4: "font-bold",
    p: "text-zinc-700 m-6",
    h5: "font-thin text-xs"

  }

  return (
    <>

    <div className="flex flex-wrap justify-center">
      <div className={style.card}>
        <div>
          <Image src={rosa} alt="Adição" className={style.imagem} />
        </div>
        <div>
          <div>
            <h3 className={style.h3}>4 days ago</h3>
          </div>
          <div>
            <h2 className={style.h2}>Post One</h2>
          </div>
          <div>
            <p className={style.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>

          <div className={style.buttom}>
            <div className={style.info}>
              <h4 className={style.h4}>4m</h4>
              <h5 className={style.h5}>READ</h5>
            </div>
            <div className={style.info}>
              <h4 className={style.h4}>4m</h4>
              <h5 className={style.h5}>READ</h5>
            </div>
            <div className={style.info}>
              <h4 className={style.h4}>4m</h4>
              <h5 className={style.h5}>READ</h5>
            </div>
            
          </div>
        </div>
      </div>

      <div className={style.card}>
        <div>
          <Image src={rosa} alt="Adição" className={style.imagem} />
        </div>
        <div>
          <div>
            <h3 className={style.h3}>4 days ago</h3>
          </div>
          <div>
            <h2 className={style.h2}>Post One</h2>
          </div>
          <div>
            <p className={style.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>

          <div className={style.buttom}>
            <div className={style.info}>
              <h4 className={style.h4}>4m</h4>
              <h5 className={style.h5}>READ</h5>
            </div>
            <div className={style.info}>
              <h4 className={style.h4}>4m</h4>
              <h5 className={style.h5}>READ</h5>
            </div>
            <div className={style.info}>
              <h4 className={style.h4}>4m</h4>
              <h5 className={style.h5}>READ</h5>
            </div>
            
          </div>
        </div>

      </div>

      <div className={style.card}>
        <div>
          <Image src={rosa} alt="Adição" className={style.imagem} />
        </div>
        <div>
          <div>
            <h3 className={style.h3}>4 days ago</h3>
          </div>
          <div>
            <h2 className={style.h2}>Post One</h2>
          </div>
          <div>
            <p className={style.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>

          <div className={style.buttom}>
            <div className={style.info}>
              <h4 className={style.h4}>4m</h4>
              <h5 className={style.h5}>READ</h5>
            </div>
            <div className={style.info}>
              <h4 className={style.h4}>4m</h4>
              <h5 className={style.h5}>READ</h5>
            </div>
            <div className={style.info}>
              <h4 className={style.h4}>4m</h4>
              <h5 className={style.h5}>READ</h5>
            </div>
            
          </div>
        </div>

      </div>
      
      


    </div>

    </>
  );
}
