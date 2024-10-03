"use client"
import { Handlee } from "next/font/google";
import { useActionState, useState } from "react";


const GeneralFunction: React.FC = () => {

    const [numero1, setNumero1] = useState <string>("")
    const [numero2, setNumero2] = useState <string>("")
    
    const [respSoma, setRespsoma] = useState <number | undefined>()
    const [respSub, setRespSub] = useState <number | undefined>()
    const [respMult, setRespMult] = useState <number | undefined>()
    const [respDiv, setRespDiv] = useState <number | undefined>()

    const erro = "Digite corretamente, Sr. Usuario"

    const handleAll = ({a, b} : {a: string, b: string}) => {

        const n1 = parseFloat(a)
        const n2 = parseFloat(b)

        if (!isNaN(n1)  && !isNaN(n1)) {
            setRespDiv(n2 !==0 ? n1/n2 : undefined)
            setRespMult(n2 * n2)
            setRespSub(n1 - n2)
            setRespsoma(n1 + n2)
        }else{
            setRespDiv(undefined)
            setRespMult(undefined)
            setRespSub(undefined)
            setRespMult(undefined)
        }

    }

    return(
        <>

            <div className="bg-teal-300 w-2/3">
            <div>
                <input type="text" placeholder="Número 01" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>                
            </div>
            <div>
                <input type="text" placeholder="Número 02" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>                
            </div>
            <div>
                <button onClick={() => handleAll({a: numero1, b: numero2})}>Calcular todos</button>
            </div>
            <div>
                <div>
                    <h2>Soma</h2>
                    <p>{!isNaN(respSoma ?? NaN) ? respSoma : erro}</p>
                </div>
                <div>
                    <h2>Subtração</h2>
                    <p>{!isNaN(respSub ?? NaN) ? respSub : erro}</p>
                </div>
                <div>
                    <h2>Multiplicação</h2>
                    <p>{!isNaN(respMult ?? NaN) ? respMult : erro}</p>
                </div>
                <div>
                    <h2>Divisão</h2>
                    <p>{!isNaN(respDiv ?? NaN) ? respDiv?.toFixed(1) : erro}</p>
                </div>
            </div>
            </div>

        </>
    )

}

export default GeneralFunction;