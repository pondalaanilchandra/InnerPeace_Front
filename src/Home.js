import Recent from './Recent';
const Home = () => {
    return ( 
        <div className='flex flex-col mb-96'> 
        <div className='flex gap-x-32 flex-row mb-16 pt-24'>
            <img className='w-1/2 'style={{height:'610px'}} src="nature.jpg" alt="i" />   
            <div className='flex flex-col gap-y-3 pt-5'>
                <p className='text-3xl pl-24 font-light'>My Thoughts</p>
                <img className='w-96 h-80' src="feed.webp" alt="" />
                <div className='w-96 px-6'>
                <p className='text-2xl font-light'>Detoxing my social media feed</p>
                <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                </div>
                <div className='flex justify-center mt-12'>
                <button className='bg-white border border-black hover:text-orange-700 px-10 py-2'><a href="/blog">All Posts</a></button>
                </div>
            </div>  
       </div>
       <Recent />
       </div>
       
    );
}
 
export default Home;