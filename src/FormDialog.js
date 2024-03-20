import Dialog from '@mui/material/Dialog';
import { FaUser, FaEnvelope, FaLock, FaTimes } from 'react-icons/fa';
import { useContext,useEffect,useState} from 'react';
import { UserContext } from './UserContext';
import axios from 'axios';
export default function FormDialog() {
  const [username, setUsername] = useState(''); //
  const [email, setEmail] = useState(''); //
  const [password, setPassword] = useState(''); //
  const [email1,setEmail1]=useState('');
  const [password1,setPassword1]=useState('');
  const [login, setLogin] = useState(false);

   const {open, setOpen,loggedIn,setLoggedIn,user,setUser,id,setId}=useContext(UserContext);
  // const {open, setOpen}=useContext(UserContext);
  const signup = async (e) => {
    e.preventDefault();
    console.log(username, email, password);
    try {
        const response = await axios.post('https://innerpeace-back.onrender.com/signup', { username, email, password }, { withCredentials: true });
        const { data } = response;
        setUser(data.username);
        setId(data.id);
        console.log(data);
        setOpen(false);
        setLoggedIn(true);
    } catch (error) {
        console.error('Error signing up:', error);
        // Handle error (e.g., display error message)
    }
};
  const handlelogin = async (e) => {
    e.preventDefault();
    console.log(email1, password1);
    try {
        const response = await axios.post('https://innerpeace-back.onrender.com/login', { email:email1, password:password1 }, { withCredentials: true });
        const { data } = response;
        setUser(data.username);
        setId(data.id);
        console.log(data);
        setOpen(false);
        setLoggedIn(true);
    } catch (error) {
        console.error('Error logging in:', error);
        // Handle error (e.g., display error message)
    }
};
 const handleClose = () => {
    setOpen(false);
    // setLogin(true);
  };
  const handleOpen = () => {
    setOpen(true);
  }
  // console.log(username,password);
      
  return (
    <Dialog open={open}>
      <div className='flex justify-end m-2'>
        <FaTimes size={24} onClick={handleClose} className='cursor-pointer' />
      </div>
      <div className='w-96 pb-4 px-16'>
        {(!login) && (
          <div>
            <h1 className="text-2xl mb-8 mt-1">Sign up with your account</h1>
            <form onSubmit={signup}>
              <div className="form-group mb-6">
                <div className="flex items-center border-b border-gray-300">
                  <span className="px-3 text-gray-600"><FaUser /></span>
                  <input 
                  type="text" 
                  className="flex-1 py-2 bg-transparent border-none outline-none" 
                  value={username}
                  onChange={ev => setUsername(ev.target.value)} 
                  placeholder="Your name" />
                </div>
              </div>

              <div className="form-group mb-6">
                <div className="flex items-center border-b border-gray-300">
                  <span className="px-3 text-gray-600"><FaEnvelope /></span>
                  <input 
                  type="text" 
                  value={email}
                  onChange={ev => setEmail(ev.target.value)}
                  className="flex-1 py-2 bg-transparent border-none outline-none" 
                  placeholder="Your email address" />
                </div>
              </div>

              <div className="form-group mb-6">
                <div className="flex items-center border-b border-gray-300">
                  <span className="px-3 text-gray-600"><FaLock /></span>
                  <input 
                  type="password" 
                  value={password}
                  onChange={ev => setPassword(ev.target.value)}
                  className="flex-1 py-2 bg-transparent border-none outline-none" 
                  placeholder="Choose a password" />
                </div>
              </div>
              <div className='flex justify-center'>
                <button className='border border-black text-black py-2 px-3 outline-none' type="submit" >Sign up</button>
              </div>
            </form>
            <div>
              <p className="text-center">Already have an account? <a className="text-blue-500 cursor-pointer"  onClick={()=>{setLogin(true)}}>Login</a></p>
            </div>
          </div>
        )}

        {(login) && (
          <div>
            <h1 className="text-2xl mb-8 mt-1">Log into your account</h1>
            <form onSubmit={handlelogin}>
              <div className="form-group mb-6">
                <div className="flex items-center border-b border-gray-300">
                  <span className="px-3 text-gray-600"><FaEnvelope /></span>
                  <input
                   type="text" 
                    value={email1}
                    onChange={ev => setEmail1(ev.target.value)}
                   className="flex-1 py-2 bg-transparent border-none outline-none" 
                   placeholder="Your email address" />
                </div>
              </div>

              <div className="form-group mb-6">
                <div className="flex items-center border-b border-gray-300">
                  <span className="px-3 text-gray-600"><FaLock /></span>
                  <input
                   type="password" 
                    value={password1}
                    onChange={ev => setPassword1(ev.target.value)}
                   className="flex-1 py-2 bg-transparent border-none outline-none" 
                   placeholder="Your password" />
                </div>
              </div>

              <div className='flex justify-center'>
                <button className='border border-black text-black py-2 px-3 outline-none' type="submit" >Log in</button>
              </div>
            </form>
            <div>
              <p className="text-center">Don't have an account? <a className="text-blue-500 cursor-pointer" onClick={()=>{setLogin(false)}}>Sign up</a></p>
            </div>
          </div>
        )}
      </div>
    </Dialog>

  );
}
