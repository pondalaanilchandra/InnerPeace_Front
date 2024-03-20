import { FaLinkedin,FaGithub,FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return ( 
        <section id='bottom'>
        <div className="bg-zinc-800 text-white mt-auto pl-32 py-12 flex gap-x-64  flex-row ">
            
            <div className='w-1/2'>
                <div className='flex gap-3 flex-row'>
                    <a href="https://www.linkedin.com/in/pondala-anil-chandra-b2a897239/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} className='text-white' />
                    </a>
                    <a href="https://www.instagram.com/anil_pondala/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} className='text-white' />
                    </a>
                    <a href="https://github.com/pondalaanilchandra" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} className='text-white' />
                    </a>
                </div>
               <p className='text-2xl'>Inner Peace</p> 
               <p>123-456-7890</p>
               <p>info@site.com</p>
               <p> 2024 by Anil</p>
               <p>Powered and Secured by ....</p>
            </div>
            <div className='w-full'>
                <div className='pb-12'>
                 <p className='text-2xl pb-2'>Contact</p>
                 <p>Ask me anything</p>
                 </div>
                
                    <form action="#" className='flex gap-y-8 flex-col w-full'>
                        <div className='flex flex-row gap-7 '>                        
                            <div className='flex flex-col flex-1'>
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" className='bg-transparent border-b border-white outline-none py-2 hover:border-orange-400'/>
                            </div>
                            <div className='flex flex-col flex-1'>
                            <label htmlFor="email">Email</label>
                            <input type="text" className='bg-transparent border-b border-white outline-none py-2 hover:border-orange-400' required />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="message">Leave Us a Message...</label>
                            <input type="text" className='bg-transparent border-b border-white outline-none py-2 hover:border-orange-400' />
                        </div>
                        <div className='flex justify-end'>
                        <button className='bg-zinc-800 border border-white text-white hover:bg-white hover:text-black py-2 px-6 w-36 outline-none'>Submit</button>
                        </div>
                    </form>
            
            </div>
            <div>

            </div>
            
        </div>
        </section>
     );
}
 
export default Footer;