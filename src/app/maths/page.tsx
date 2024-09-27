"use client";

import { Handlee } from "next/font/google";
import React, {useState} from "react"


const Maths: React.FC = () => {
    
    const [Numero1, setNumero1] = useState<string>("")
    const [Numero2, setNumero2] = useState<string>("")
    const [respSoma, setRespSoma] = useState<number | undefined>()
    const [respSub, setRespSub] = useState<number | undefined>()
    const [respDiv, setRespDiv] = useState<number | undefined>()
    const msgError = "Digite um número válido"
    
    

    const handleSoma = () => {
        const n1 = parseFloat(Numero1)
        const n2 = parseFloat(Numero2)
        
        if(!isNaN(n1) && !isNaN(n2)){
            setRespSoma(n1 + n2)
        }else{
            setRespSoma(undefined)
        }
    }

    const handleSub = () => {
        const n1 = parseFloat(Numero1)
        const n2 = parseFloat(Numero2)
        
        if(!isNaN(n1) && !isNaN(n2)){
            setRespSoma(n1 - n2)
        }else{
            setRespSoma(undefined)
        }
    }

    const handleDiv = () => {
        const n1 = parseFloat(Numero1)
        const n2 = parseFloat(Numero2)
        
        if(!isNaN(n1) && !isNaN(n2)){
            setRespSub(n1/n2)
        }else{
            setRespSub(undefined)
        }
    }

    return(
        <>
        
            <h1>Use client com controle de estado</h1>
            <h1>Soma</h1>
            
            <div>
                <label>Número 1</label>
                <input type="text" value={Numero1} onChange={(e) => setNumero1(e.target.value)}/>
            </div>
            <div>
                <label>Número 2</label>
                <input type="text" value={Numero2} onChange={(e) => setNumero2(e.target.value)}/>
            </div>
            <div>
                {!isNaN(respSoma ?? NaN) ? respSoma : msgError}
            <br />
                <button onClick={handleSoma}>SOMAR</button>

            </div>
            <br />

            <h1>Subtração</h1>
            
            <div>
                <label>Número 1</label>
                <input type="text" value={Numero1} onChange={(e) => setNumero1(e.target.value)}/>
            </div>
            <div>
                <label>Número 2</label>
                <input type="text" value={Numero2} onChange={(e) => setNumero2(e.target.value)}/>
            </div>
            <div>
                {!isNaN(respSub ?? NaN) ? respSoma : msgError}
            <br />
                <button onClick={handleSub}>SUBTRAIR</button>

            </div>
            <br />

            <h1>Divisão</h1>
            
            <div>
                <label>Número 1</label>
                <input type="text" value={Numero1} onChange={(e) => setNumero1(e.target.value)}/>
            </div>
            <div>
                <label>Número 2</label>
                <input type="text" value={Numero2} onChange={(e) => setNumero2(e.target.value)}/>
            </div>
            <div>
                {!isNaN(respDiv ?? NaN) ? respSoma : msgError}
            <br />
                <button onClick={handleDiv}>DIVIDIR</button>

            </div>
        </>
    )
}

export default Maths    