import Link from "next/link";

interface IMenu {
    op1: string;
    op2: number;
    op3: boolean;
}

export const Menu: React.FC<IMenu> = ({op1, op2, op3}) => {

    return(
        
        <nav className="text-preto font-robFont text-large flex flex-row justify-center align-center">
          {/* <p className="bg-cyan-500 px-2 py-1 w-18 text-branco">{op1}</p>
          <p className="bg-cyan-500 px-2 py-1 w-18 text-branco">{op2}</p>
          <p className="bg-cyan-500 px-2 py-1 w-18 text-branco">"{op3}"</p> */}
        </nav>
    
    )

}