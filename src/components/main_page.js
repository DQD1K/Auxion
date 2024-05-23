import React from 'react';
import Filter from "./components1,1/Filter"
import Show from "./components1,1/Showcase"
import Lots from "./lotData.json"

function mainpage(){
    return(
        <div>
            <main>
                <input className="Poiskovaya stroka" type="text" defaultValue={"Введите название лота"}></input><button>подтвердить</button>
                <Filter />
                <Show objects={Lots.objects} />
               
            </main>
        </div>
    )
}


export default mainpage;