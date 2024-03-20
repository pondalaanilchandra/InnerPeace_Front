const Recent = () => {
    return ( 
        <div className="flex flex-col mx-72">
            <span className="text-5xl mb-4">Recent Posts</span>
            {/* Posts */}
            <div>
                {/* Single post div */}
                <div className="flex flex-row mt-6">
                    <img src="post1.webp" className="w-1/2 h-80" alt="" />


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
                        <p className="mt-3  pt-5 pb-12  border-b border-gray-400 hover:text-orange-700">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                    </div>
                    <div className="text-xs pt-3">0 Comments</div>
                    </div>
                </div>


                <div className="flex flex-row mt-6">
                    <img src="post2.webp" className="w-1/2 h-80" alt="" />

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
                        <p className="mt-3  pt-5 pb-12  border-b border-gray-400 hover:text-orange-700">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                    </div>
                    <div className="text-xs pt-3">0 Comments</div>
                    </div>
                </div>


                <div className="flex flex-row mt-6">
                    <img src="post3.webp" className="w-1/2 h-80" alt="" />

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
                        <p className="mt-3  pt-5 pb-12    border-b border-gray-400 hover:text-orange-700">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                    </div>
                    <div className="text-xs pt-3">0 Comments</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Recent;