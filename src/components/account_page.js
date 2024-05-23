import React from "react";
import ShowAccountInfo from "./components1,1/ShowAccountInfo";
import userData from "./superUserData.json"

function Account_page(){
    return(
        <div>
            <ShowAccountInfo users={userData.users} />
        </div>
    )
}
 

export default Account_page;