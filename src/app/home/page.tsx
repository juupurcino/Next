import Image from "next/image";
import type { Metadata } from "next";

//Internos
import {Card} from "@/components/card";

export const metadata: Metadata = {
  title: "Teste next.js",
  description: "Aula de programação de aplicativos",
};


export default function Home() {

  const dados: {imagem : string; titulo: string; cor: string; subtitulo: string; texto: string; cor_texto: string; }[] = [

    {
      imagem: "rosa",
      subtitulo: "4 days ago",
      titulo: "Post One",
      texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      cor: "bg-pink-700",
      cor_texto: "text-pink-700"

    },
    {
      imagem: "laranja",
      subtitulo: "2 days ago",
      titulo: "Post Two",
      texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      cor: "bg-orange-700",
      cor_texto: "text-orange-700"

    },
    {
      imagem: "verde",
      subtitulo: "Today",
      titulo: "Post Tree",
      texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      cor: "bg-green-700",
      cor_texto: "text-green-700"

    },


  ]


  return (
    <>

    <div className="flex flex-wrap justify-center">
      {dados.map((item, index) => (
        <div key={index}>
          <Card cor={item.cor} imagem = {item.imagem} titulo ={item.titulo} subtitulo={item.subtitulo} texto={item.texto} cor_texto = {item.cor_texto}/>
        </div>
      ))}
    </div>

    </>
  );
}
