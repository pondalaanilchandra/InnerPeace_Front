
import './index.css';
import { useContext, useEffect } from 'react';
import { UserContext } from './UserContext.js';
import { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Dashboard from './DashBoard.js';
import FormDialog from './FormDialog.js';
import AddBlogDialog from './AddBlogDialog.js';
const Nav = () => {
    const {setOpen,user,setOpenAdd}=useContext(UserContext);
    const [loggedIn, setloggedIn] = useState(false);
    useEffect(() => {
       if(user!==undefined && user!==null){
            console.log("hello",user);
            setloggedIn(true);
         }
    }, [user]);
    return ( 
        <div className="fixed flex gap-2 flex-row w-full border-b p-2  px-20 h-24 items-center  bg-white">
            <div className='w-1/3'>
               <p className="text-5xl text-orange-700">Inner Peace</p>
               Thoughts on Lifestyle & Mental Health 
            </div>  
            <div className='flex gap-20 justify-end w-full items-center '>
                <a className='hover:text-orange-700'  href="/">Home</a>
                <a className='hover:text-orange-700'  href="/blog">Blogs</a>
                <a className='hover:text-orange-700 cursor-pointer' onClick={()=>setOpenAdd(true)}>Add Blog</a>
                <AddBlogDialog />
                <ScrollLink to="bottom"  >
                <a className='hover:text-orange-700 cursor-pointer' >Contact</a>
                </ScrollLink>
                {/* if loggedin false  */}
                { !loggedIn && (
                    <>
                        <button onClick={() => setOpen(true)} className='border border-orange-700 text-orange-700 p-2 outline-none'>Log in/Sign up</button>
                        <FormDialog />
                    </>
                ) }
                { loggedIn && (
                    <Dashboard />
                )}
                

                
                
            </div>
        </div>
    );
}

export default Nav;
