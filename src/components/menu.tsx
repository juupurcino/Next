import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface IMenu {
    op1: string;
    op2: string;
    op3: string;
    op4: string;
    op5: string;
}



export const Menu: React.FC<IMenu> = ({op1, op2, op3, op4, op5}) => {

    const style = {
        nav: "w-auto p-1 w-2/5 text-preto text-lg m-1"
    }

    return(
        
        <div className="font-robFont text-large flex flex-row align-center justify-start text-center bg-zinc-300 border shadow-2xl p-2">
            <Link href={ROUTES.home} className={style.nav}>{op1}</Link>
            <Link href={ROUTES.maths} className={style.nav}>{op2}</Link>
            <Link href={ROUTES.fetchPage} className={style.nav}>{op3}</Link>
            <Link href={ROUTES.axiosPage} className={style.nav}>{op4}</Link>
            <Link href={ROUTES.serverPage} className={style.nav}>{op5}</Link>
        </div>
    
    )

}

// transform scael