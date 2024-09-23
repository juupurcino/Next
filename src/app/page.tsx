import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teste next.js",
  description: "Aula de programação de aplicativos",
};

export default function Home() {

  const style = {

    in: "border-b-rose-900 border-2 rounded-md p-1 outline-none w-full",
    la: "self-start mt-6",
    botao: "rounded-lg bg-pink-900 text-branco p-1.5 w-20 m-5",
    login : "w-1/2 flex items-center justify-center flex-wrap flex-col m-20 border-l-rose-900 border-2 p-10 shadow-2xl ",
    logon : "flex items-center justify-center",

  }
  return (
    <>

    <div className={style.logon}>
      <form className={style.login}>
        <h1 className="text-2xl m-5">Login</h1>
        <label htmlFor="" className={style.la}>Email</label>
        <input className={style.in} type="text" />
        <label htmlFor="" className={style.la}>Senha</label>
        <input className={style.in} type="password" />
        <button className={style.botao}>Entrar</button>
      </form>
    </div>

    <footer>
      
    </footer>

    </>
  );
}
