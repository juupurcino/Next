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
        calculadora: "bg-cyan-900 w-3/5",
        operacao: "bg-slate-100 text-cyan-900 flex space-x-6 flex-row",
        imagem: "size-10"
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
            <div className={style.calculadora}>
                <h1>Calculadora</h1>
            </div>

            <div>
                <label>Digite o número 1</label>
                <br />
                <input type="text" value={Numero1} onChange={(e) => setNumero1(e.target.value)} />
                <br />
                <label>Digite o número 2</label>
                <br />
                <input type="text" value={Numero2} onChange={(e) => setNumero2(e.target.value)} />
            </div>

            <div className={style.operacao}>
                <Image src={mais} alt="Adição" className={style.imagem} onClick={() => { setOperacao('soma'); conta('soma'); }} />
                <Image src={menos} alt="Subtração" className={style.imagem} onClick={() => { setOperacao('subtracao'); conta('subtracao'); }} />
                <Image src={div} alt="Divisão" className={style.imagem} onClick={() => { setOperacao('divisao'); conta('divisao'); }} />
                <Image src={multi} alt="Multiplicação" className={style.imagem} onClick={() => { setOperacao('multiplicacao'); conta('multiplicacao'); }} />
            </div>

            <div>
                <h2>Resultado: {resultado !== undefined ? resultado : msgError}</h2>
            </div>
        </>
    );
};

export default Maths;
