import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface IMenu {
    op1: string;
    op2: string;
    op3: string;
}



export const Menu: React.FC<IMenu> = ({op1, op2, op3}) => {

    const style = {
        menu: "text-preto font-robFont text-large flex flex-row align-center justify-between text-center bg-teal-800",
        nav: "w-full bg-teal-900 px-2 py-1 w-2/5 text-branco text-2xl "
    }

    return(
        
        <div className={style.menu}>
            <Link href={ROUTES.home} className={style.nav}>{op1}</Link>
            <Link href={ROUTES.generalFunction} className={style.nav}>{op2}</Link>
            <Link href={ROUTES.maths} className={style.nav}>{op3}</Link>
        </div>
    
    )

}

// transform scael