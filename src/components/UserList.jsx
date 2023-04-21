import User from "./User";
const UserList = ({ users }) => {
    return (
        <div>
            <h1>Usuarios Registrados</h1>
            {
                users.length > 0 &&
                users.map((user) => {
                    return (
                        <User user={user}/>
                    )
                })
            }
        </div>
    )
}

export default UserList;