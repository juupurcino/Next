// Axios fazer requisições http

"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

import { api } from "@/constants/api";

interface IData {
    name: string, 
    imageUrl: string,,0

}

const axiosPage = () => {
    const [data, setData] = useState<IData[]>([]);
    const [erro, setErro] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("Não foi possivel buscar os dados");

    const [page, setpage] = useState<string>("")

    useEffect(() => {
        api.get(`/character?name=${page}`).then((res) => {
            setErro(false);
            setData(res.data.data);
        }).catch((error) =>{
            if(error.response.status === 404){
                setErrorMessage("Página não encontrada! ");
            }
            setErro(true);
        })
    }, [page])

    return(
        <div>
            <h1>Página com useEffect e Axios</h1>
            <input type="text" value={page} placeholder="Digite aqui" onChange={(e) => setpage(e.target.value)} />
            {erro && <h5>{errorMessage}</h5>}
            <div>
                {data.map((item, i) => {
                    return(
                        <div key={i}>
                            <h2>{item.name}</h2>
                            <img src={item.imageUrl} width={200} height={200} alt="sla"/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default axiosPage;