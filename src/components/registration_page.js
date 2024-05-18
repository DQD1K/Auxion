import React from 'react';


function registr(){
    return(
        <div>
            <h2>Страница регистрации</h2>
            <input defaultValue={"Введите Имя"}></input>
            <input defaultValue={"Введите почту"}></input>
            <input defaultValue={"Введите пароль"}></input>
            <button>Создать аккаунт</button>
        </div>
    )
}


export default registr;