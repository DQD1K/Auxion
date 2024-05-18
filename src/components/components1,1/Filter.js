import React from "react";


function Filter(){
    return(
        <div>
            <p>Выберете сортировку</p>
                <ul>
                    <li>
                        <button>По названию</button>
                    </li>
                    <li>
                        <button>По стоимости</button>
                    </li>
                    <li>
                        <button>По дате создания</button>
                    </li>
                    <li>
                        <button>По времени окончания</button>
                    </li>
                </ul>
        </div>
    );
}

export default Filter;