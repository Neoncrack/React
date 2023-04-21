
const User = ({user}) => {
    <div>
        <img src={user.ip_address} alt={user.ip_address} />
        <h2>{user.first_name}</h2>
        <p>{user.email}</p>
    </div>
}

export default User;