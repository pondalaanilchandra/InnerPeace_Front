import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [open, setOpen] = useState(false); // form dialog open/close
  const [loggedIn, setLoggedIn] = useState(false); // false for signup/login, true for logout/dashboard
  const [user,setUser]=useState(null);
  const [id, setId] = useState(null);
  const [openAdd, setOpenAdd] = useState(false);
  useEffect(() => {
    axios.get('https://innerpeace-back.onrender.com/profile', { withCredentials: true })
    .then((res) => {
         console.log(res.data);
         console.log("hi",res.data.username);
         setUser(res.data.username);
         setId(res.data._id);
         console.log("user",user);
        
    });
        // .then((res) => res.json())
        // .then((data) => {
        //     setUser(data.username);
        //     setId(data._id);
       // });
}, []);
  
  return (
    <UserContext.Provider value={{open, setOpen, loggedIn,setLoggedIn,user,setUser,id,setId,openAdd,setOpenAdd}}>
      {children}
    </UserContext.Provider>
  );
}