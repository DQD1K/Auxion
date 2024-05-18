import React from 'react';
import Filter from "./components1,1/Filter"
import Show from "./components1,1/Showcase"

function mainpage(){
    return(
        <div>
            <main>
                <input className="Poiskovaya stroka" type="text" defaultValue={"Введите название лота"}></input><button>подтвердить</button>
                <Filter />
                <Show />
               
            </main>
        </div>
    )
}


export default mainpage;