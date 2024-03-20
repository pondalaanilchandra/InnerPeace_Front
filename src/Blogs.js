import axios from "axios";
import React from 'react';
import { useState, useEffect, useContext } from 'react';
const Blogs = () => {
    const [posts, setPosts] = useState([]);
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    useEffect(() => {
        axios.get('https://innerpeace-back.onrender.com/blogs', { withCredentials: true })
            .then((res)=> res.data)
            .then((data)=>{
                console.log(data);
                // console.log(data[0]);
                setPosts(data);
                // console.log(data[0].username);
            })
                

                // console.log(res.data.username);
                // setPosts(res.data)
    }, []);
    return ( 
        <div className="pt-32 mb-2">
            <span className="text-6xl pl-72">Blog</span>
             <p className="text-xl pl-72 my-8 font-thin">All posts</p>
             {/* All the posts will be displayed  */}
            <div className=" flex flex-row gap-8 ml-72 mb-8 justify-start flex-wrap">
                {/* This is sample post   */}

                {posts.map(post => (
                    
  <div className="post w-96 h-auto border border-gray-300" key={post.id}>
    {/* This div is for img */}
    <div>
    <img src={`https://innerpeace-back.onrender.com/uploads/${post.image}`} className="h-80 w-96" alt="" />
    </div>
    {/* This div is for user details */}
    <div className="px-6 ">
      <div className="pt-6 pb-3 flex flex-row items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" className="w-9 h-9">
          <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
        </svg>
        <div className="flex flex-col text-xs">
          <p>{post.username}</p>
          <p className="items-center">
  {
    `${month[new Date(post.createdAt).getMonth()]} ${new Date(post.createdAt).getDate()},${new Date(post.createdAt).getFullYear()} `
  }
</p>
{/* Make sure to use the appropriate property for the date */}
        </div>
      </div>
      {/* This is for post details */}
      <div>
        <span className="text-2xl hover:text-orange-700 min-h-20">{post.heading}</span>
        <p className="mt-3 mb-2 py-3 border-b  border-gray-400 hover:text-orange-700 min-h-36" >{post.summary}</p>
      </div>
      <div className="text-xs pb-3">0 Comments</div>
    </div>
  </div>
))}


                <div className="post  w-96 h-auto border border-gray-300">
                    {/* this div is for img */}
                    <div>
                        <img src="post2.webp" className="h-80 w-96" alt="" />
                    </div>
                    {/* this div is for user details */}
                    <div className="px-6 ">
                    <div className="pt-6 pb-3 flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" class="w-9 h-9"><path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" /></svg>
                    <div className="flex flex-col text-xs">
                    <p>Admin</p>
                     <p className="items-center">May 1,2023 </p>
                     </div>
                    </div>
                    {/* this is for post details */}
                    <div>
                        <span className="text-2xl hover:text-orange-700">The one thing I would tell to my 16 year old self</span>
                        <p className="mt-3 mb-2 py-3  border-b border-gray-400 hover:text-orange-700">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                    </div>
                    <div className="text-xs pb-3">0 Comments</div>
                    </div>
                </div>


                <div className="post  w-96 h-auto border border-gray-300">
                    {/* this div is for img */}
                    <div>
                        <img src="post3.webp" className="h-80 w-96" alt="" />
                    </div>
                    {/* this div is for user details */}
                    <div className="px-6 ">
                    <div className="pt-6 pb-3 flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" class="w-9 h-9"><path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" /></svg>
                    <div className="flex flex-col text-xs">
                    <p>Admin</p>
                     <p className="items-center">May 1,2023 </p>
                     </div>
                    </div>
                    {/* this is for post details */}
                    <div>
                        <span className="text-2xl hover:text-orange-700">5 great side effects of running with music</span>
                        <p className="mt-3 mb-2 py-3  border-b border-gray-400 hover:text-orange-700">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                    </div>
                    <div className="text-xs pb-3">0 Comments</div>
                    </div>
                </div>

                <div className="post  w-96 h-auto border border-gray-300">
                    {/* this div is for img */}
                    <div>
                        <img src="post1.webp" className="h-80 w-96" alt="" />
                    </div>
                    {/* this div is for user details */}
                    <div className="px-6 ">
                    <div className="pt-6 pb-3 flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" class="w-9 h-9"><path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" /></svg>
                    <div className="flex flex-col text-xs">
                    <p>Admin</p>
                     <p className="items-center">May 1,2023 </p>
                     </div>
                    </div>
                    {/* this is for post details */}
                    <div>
                        <span className="text-2xl hover:text-orange-700">10 signs you must be a people pleaser</span>
                        <p className="mt-3 mb-2 py-3  border-b border-gray-400 hover:text-orange-700">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                    </div>
                    <div className="text-xs pb-3">0 Comments</div>
                    </div>
                </div>
                
                
            </div>
        </div>
     );
}
 
export default Blogs;