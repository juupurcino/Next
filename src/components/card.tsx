import Image from "next/image";
import type { Metadata } from "next";

//Imagens
import rosa from "@/assets/rosa.jpg";
import laranja from "@/assets/laranja.jpg";
import verde from "@/assets/verde.jpg";

export const Card = ({cor, imagem, titulo, texto, subtitulo, cor_texto} : {
    cor : string;
    cor_texto: string;
    imagem: string;
    titulo: string;
    subtitulo: string,
    texto: string;
}) => {

    const style = {

        card: "w-72 border shadow-2xl rounded-2xl text-center m-10 hover:scale-110 transition duration-500 ease-in-out",
        imagem: "w-full rounded-t-2xl h-48",
        buttom: `border shadow-2xl flex flex-row space-x-[0.5px] bg-gray-800 rounded-b-2xl`,
        info: `w-1/3  text-white  border-r-zinc-500 ${cor} p-2 `,
        h3: `${cor_texto} font-bold text-sm mt-6`,
        h2: "font-bold text-2xl",
        h4: "font-bold",
        p: "text-zinc-700 m-6",
        h5: "font-thin text-xs"
    }

    return (
        <>
    
          <div className={style.card}>
            <div>
              <Image src={imagem === "rosa" ? rosa : imagem === "verde" ? verde : laranja} alt="imagem" className={style.imagem} />
            </div>
            <div>
              <div>
                <h3 className={style.h3}>{subtitulo}</h3>
              </div>
              <div>
                <h2 className={style.h2}>{titulo}</h2>
              </div>
              <div>
                <p className={style.p}>{texto}</p>
              </div>


            <div className="">
                <div className={style.buttom}>
                    <div className={style.info + " rounded-bl-2xl"}>
                    <h4 className={style.h4}>4m</h4>
                    <h5 className={style.h5}>READ</h5>
                    </div>
                    <div className={style.info}>
                    <h4 className={style.h4}>4m</h4>
                    <h5 className={style.h5}>READ</h5>
                    </div>
                    <div className={style.info + " rounded-br-2xl"}>
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
