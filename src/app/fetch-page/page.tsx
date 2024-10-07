// Fetch Page Buscar dados externos, como o de uma API

// useState: Guarda e atualiza informações (como um contador). É como uma caixa onde você guarda coisas (informações que mudam).
// useEffect: Faz coisas extras após o componente ser exibido (como buscar dados). É como um assistente que faz tarefas quando você precisa (como buscar informações da internet).

"use client"

import { useActionState, useEffect, useState } from "react";

import Image from "next/image";
import { api } from "@/constants/api";

interface IData {

    name: string,
    imageUrl: string,
    id: string
}

const FetchPage = () => {

    const [characters, setcharacters] = useState<IData[]>([])
    const [page, setpage] = useState<string>("")

    useEffect(() => {
      const load = async () => {
        const res = await fetch("https://api.disneyapi.dev/character");
        const data = await res.json();
        setcharacters(data.data);
        console.log(data);
      }
    
      load();

    }, [])

    return(

        <>
            <h1>Fetch nativo para resquisições get</h1>
            <input type="text" value={page} placeholder="Digite aqui" onChange={(e) => setpage(e.target.value)} />
            <div>
                {characters.map((item) => {
                    return (
                        <div key={item.id}>
                            <img src={item.imageUrl} alt="sla" width={200} height={200}/>
                            <h2>{item.name}</h2>
                        </div>
                    )
                })}
            </div>
        </>
    )
    
}

export default FetchPage;