import {useContext} from 'react';
import {UserContext} from "../context/UserContext";


export const User = () => {

const {user, logIn, logOut, changeCurrency} = useContext(UserContext)

	return (
		<div style={{border: '5px solid orange', margin: '1em', padding: '1em'}}>
			<h3>User</h3>

			{user.isloggedIn && (
				<>
					<h4>{user.name}</h4>
					<p>Currency: {user.currency}</p>
				</>
			)}

			{
				user.isLoggedIn
				? <button onClick={logOut} >Odhlasit</button>
				: <button onClick={logIn} >Prihlasit</button>

			}

			
			
		</div>
	);
}

export default User;