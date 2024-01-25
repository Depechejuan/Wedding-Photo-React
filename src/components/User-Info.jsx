function UserInfo({user}){
    console.log(user);

    return(
        <>
            <h3>UserData</h3>
            <p>¡Bienvenido a tu panel! {user.firstName}</p>
            <p>{user.email}</p>
        </>
    )
}

export default UserInfo