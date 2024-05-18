import Recat from "react";


function Header(){
    return(
        <div>
            <header>
                <p>лого</p>
                <h1>Аукцион</h1>
                <p className="burger">картинка профиля</p>
                <ul className="">
                    <li>
                        <button>о профиле</button>
                    </li>
                    <li>
                        <button>Настройки</button>
                    </li>
                    <li>
                        <button>О нас</button>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default Header;