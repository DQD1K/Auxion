import React from "react"

const Show = ({ objects }) =>{
    return(
        <div>
             <h1>Доступные лоты</h1>
            <ul>
                {objects.map(object => (
                    <li key={object.id}>
                    <div>
                        <p>{object.name}</p>
                        <p>{object.description}</p>
                        <p>Cost: {object.cost}</p>
                        <p>Bid: {object.bid}</p>
                    </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default Show