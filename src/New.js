import React from 'react';
import Nav from './nav';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Blogs from './Blogs';
import Profile from './Profile';
const New = () => {
    return ( 
        <Router>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blog' element={<Blogs />} />
                <Route path='/addblog' element={<Blogs />} />
                <Route path='/profile' element={<Profile />} /> 
            </Routes>
            <Footer />
        </Router>
     );
}
 
export default New;