// Fetch Page Buscar dados externos, como o de uma API

// useState: Guarda e atualiza informações (como um contador). É como uma caixa onde você guarda coisas (informações que mudam).
// useEffect: Faz coisas extras após o componente ser exibido (como buscar dados). É como um assistente que faz tarefas quando você precisa (como buscar informações da internet).

"use client"

import { useActionState, useEffect, useState } from "react";

import Image from "next/image";
import { api } from "@/constants/api";

interface IData {

    name: string,
    image: string,
    id: string
}

const FetchPage = () => {

    const [characters, setcharacters] = useState<IData[]>([])

    useEffect(() => {
      const load = async () => {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        setcharacters(data.results);
        console.log(data);
      }
    
      load();

    }, [])

    return(

        <>
            <h1>Fetch nativo para resquisições get</h1>
            <div>
                {characters.map((item) => {
                    return (
                        <div key={item.id}>
                            <Image src={item.image} alt="sla" width={200} height={200}/>
                            <h2>{item.name}</h2>
                        </div>
                    )
                })}
            </div>
        </>
    )
    
}

export default FetchPage;