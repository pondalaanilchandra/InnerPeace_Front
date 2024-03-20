import Dialog from '@mui/material/Dialog';
import { FaTimes } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import axios from 'axios';

export default function AddBlogDialog() {
    const { user,openAdd, setOpenAdd } = useContext(UserContext);
    const [heading, setHeading] = useState('');
    const [summary, setSummary] = useState('');
    const [image, setImage] = useState(null);

    const handleClose = () => {
        setOpenAdd(false);
    };

    const handleImageChange = (e) => {
        // Update image state when a file is selected
        setImage(e.target.files[0]);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const dat={username:user,heading,summary,image};
            console.log('Form data:', dat);

            // Make a POST request to your server to handle the blog creation
            const response = await axios.post('https://innerpeace-back.onrender.com/addblog', dat, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });

            console.log('Blog added:', response.data);

            // Close the dialog after successful blog addition
            setOpenAdd(false);
        } catch (error) {
            console.error('Error adding blog:', error);
        }
    };

    return (
        <Dialog open={openAdd}>
            <div className='flex justify-end m-2'>
                <FaTimes size={24} onClick={handleClose} className='cursor-pointer' />
            </div>
            <div className='w-full pb-16 px-16'>
                <h1 className='text-2xl font-bold flex justify-center mb-6'>Add Blog</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor='heading' className='text-sm'>Heading:</label>
                    <input
                        type="text"
                        value={heading}
                        required
                        onChange={(e) => setHeading(e.target.value)}
                        placeholder="Heading"
                        className='w-full border-b-2 border-gray-300 outline-none mb-2'
                    />
                    <label htmlFor='summary' className='text-sm'>Summary:</label>
                    <textarea
                        name="summary"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        id="summary"
                        cols="30"
                        rows="10"
                        required
                        className='w-full h-auto border-2'
                    ></textarea>
                    <label htmlFor='image' className='text-sm'>Image</label>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        required
                        className='w-full border-b-2 border-gray-300 outline-none mb-2'
                    />
                    <div className='flex justify-center'>
                        <input type="submit" value="Add Blog" className='bg-orange-700 text-white  p-2 rounded-md mt-4 cursor-pointer' />
                    </div>
                </form>
            </div>
        </Dialog>
    );
}
