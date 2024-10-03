"use client";

// Externos
import { Handlee } from "next/font/google";
import React, { useState } from "react";
import Image from "next/image";

// Imagens
import mais from "../../../public/img/mais.png";
import menos from "../../../public/img/menos.png";
import multi from "../../../public/img/multiplicacao.png";
import div from "../../../public/img/divisao.png";

const Maths: React.FC = () => {
    const style = {
        operacao: "bg-slate-100 text-cyan-900 flex space-x-6 flex-row",
        imagem: "size-10",
        botoes: "bg-cyan-200 w-1/5 m-2 h-8 rounded-lg text-cyan-200 border-2 border-cyan-300",
        num: "text-5xl bg-neutral-100 w-11/12 rounded-lg h-16 flex justify-center items-center border-x-2 border-y border-neutral-300",
        botao_rosa: " text-5xl text-branco bg-pink-400 w-11/12 h-13 mb-[20px] mt-[1px] rounded-lg ml-[6px] justify-center items-center p-1 border-x-2 border-y border-pink-500",
        botao_amarelo: "text-5xl text-branco bg-yellow-300 w-11/12 h-16 mb-[5px] mt-[1px] rounded-lg ml-[6px] justify-center items-center p-1 border-x-2 border-y border-yellow-400"
    };

    const [Numero1, setNumero1] = useState<string>("");
    const [Numero2, setNumero2] = useState<string>("");
    const [operacao, setOperacao] = useState<string>("");
    const [resultado, setResultado] = useState<number | undefined>(undefined);

    const msgError = "Digite um número válido";

    const conta = (tipo: string) => {
        const n1 = parseFloat(Numero1);
        const n2 = parseFloat(Numero2);

        let res: number | undefined;

        switch (tipo) {
            case "soma":
                res = !isNaN(n1) && !isNaN(n2) ? n1 + n2 : undefined;
                break;
            case "subtracao":
                res = !isNaN(n1) && !isNaN(n2) ? n1 - n2 : undefined;
                break;
            case "divisao":
                res = !isNaN(n1) && !isNaN(n2) && n2 != 0 && n1 != 0 ? n1 / n2 : undefined;
                break;
            case "multiplicacao":
                res = !isNaN(n1) && !isNaN(n2) ? n1 * n2 : undefined;
                break;
            default:
                break;
        }

        setResultado(res);
    };

    return (
        <>
    <div className="flex flex-wrap justify-center items-center mt-8">
        <div className="bg-cyan-400 w-1/3 rounded-3xl shadow-lg border-2 border-cyan-300/100 p-10 ">

            <div className="bg-gray-950 h-24 border-x-4 border-y border-pink-400 rounded-2xl p-2 flex justify-end items-center ">

                <h2 className="text-4xl text-branco m-2 font-codeFont" >{resultado !== undefined ? resultado : msgError}</h2>

            </div>

            <div className="bg-cyan-200 mt-2 p-2 rounded-lg py-[0.5px] border-2 border-cyan-300">
                <div className="bg-gray-950 w-1/6 rounded-lg mx-6 my-2 ">
                    <h1>'</h1>
                </div>
            </div>

            <div className="flex justify-end mt-2">
                <div className="bg-yellow-300 w-12 rounded-lg h-6 border-y border-b-pink-400 ">
                    <h1 className="text-yellow-300">'</h1>
                </div>
            </div>

            <div className="flex flex-row justify-between">
                <div className={style.botoes + " ml-0"}><h1>'</h1></div>
                <div className={style.botoes}><h1>'</h1></div>
                <div className={style.botoes}><h1>'</h1></div>
                <div className={style.botoes}><h1>'</h1></div>
                <div className={style.botoes+ " mr-0"}><h1>'</h1></div>
            </div>

            <div className="flex flex-row">
                <div className="w-3/5 grid grid-cols-3 gap-4 ">
                    <button className={style.num}>7</button>
                    <button className={style.num}>8</button>
                    <button className={style.num}>9</button>
                    <button className={style.num}>4</button>
                    <button className={style.num}>5</button>
                    <button className={style.num}>6</button>
                    <button className={style.num}>3</button>
                    <button className={style.num}>2</button>
                    <button className={style.num}>1</button>
                    <button className={style.num}>0</button>
                    <button className={style.num}>.</button>
                    <button className={style.num}>±</button>
                </div>

                <div className="w-2/5 mt-1">
                    <div className="w-full grid grid-cols-2 gap-2">
                        <button className={style.botao_rosa} onClick={() => { setOperacao('soma'); conta('soma'); }}>+</button>
                        <button className={style.botao_rosa} onClick={() => { setOperacao('subtracao'); conta('subtracao'); }}>-</button>
                        <button className={style.botao_rosa} onClick={() => { setOperacao('divisao'); conta('divisao'); }}>%</button>
                        <button className={style.botao_rosa} onClick={() => { setOperacao('multiplicacao'); conta('multiplicacao'); }}>X</button>
                        <button className={style.botao_rosa}>√</button>
                        <button className={style.botao_rosa}>∧</button>
                        
                    </div>
                    <div className="grid grid-cols-2 gap-2" >
                        <button className={style.botao_amarelo}>=</button>
                        <button className={style.botao_amarelo}>+</button>
                    </div>
                </div>
            </div>

            

        </div>
    </div>

    <div>
                <input type="text" value={Numero1} onChange={(e) => setNumero1(e.target.value)} />
                <br />
                <input type="text" value={Numero2} onChange={(e) => setNumero2(e.target.value)} />
            </div>

            <div>
                <h2>Resultado: {resultado !== undefined ? resultado : msgError}</h2>
            </div>
        </>
    );
};

export default Maths;
