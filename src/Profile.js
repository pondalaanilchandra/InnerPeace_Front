import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext.js';

const Profile = () => {
    const { user } = useContext(UserContext);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('https://innerpeace-back.onrender.com/data', { user }, { withCredentials: true });
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        if (user) {
            fetchData();
        }
    }, [user]);

    return (
        <div className="pt-32">
            <h1>Profile</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <p>Welcome {user}</p>
                    <p>Your email is {data.email}</p>
                    <p>Your password is {data.password}</p>
                </>
            )}
        </div>
    );
};

export default Profile;
