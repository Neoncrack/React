import { useEffect, useState } from "react";
import pedirUser from "./pedirUser";
import UserList from "./UserList";


const ListUserContainer = () => {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        pedirUser()
            .then((res) => {
                setUsers(res);
            })
    }, [])

    return (
        <div>
           <UserList users={users}/>
        </div>
    )
}

export default ListUserContainer;