// import Recat from "react";
import Logo from "./sticker.jpg";
import ava from "./sticker (1).jpg"
import BurgerMenu from './BurgerMenu'

function Header(){
    return(
        <div>
            <header>
                <img src={Logo} width={"100"} height={"100"}/>
                <h1>Аукцион</h1>
                <img src={ava} width={"100"} height={"100"} className="burger" />
                <BurgerMenu />
            </header>
        </div>
    );
}

export default Header;