
import { useState, createContext } from "react";

export const UserContext = createContext(null);

export function UserProvider({children}) {
  const [user,setUser] = useState({
    isLoggedIn: false,
    name: '',
    currency: 'Kc',
  });

  const logIn = () => {
    setUser({
      isLoggedIn: true,
      name: 'Alena Novakova',
      currency: 'Eur',
    })
  }

  const logOut = () => {
    if( user.isLoggedIn) {
      setUser ({
        isLoggedIn: false,
        name: '',
        currency: 'Kc',
    })  
    } else {
      console.log('Uzivatel se nemuze prihlasi, protoze neni prihlaseny')
    }
  }

  const changeCurrency = (currency) => {
    setUser({
      ...user,
      currency,
    })
  } 




  return (
    <UserContext.Provider value={{
      user,
      logIn,
      logOut,
      changeCurrency,
    }}>
      {children}
    </UserContext.Provider>
  )
}