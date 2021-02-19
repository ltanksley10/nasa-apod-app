import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <Link className="home-link" to="/mainpage"><h1>View NASA's Photo of the Day</h1></Link>
        </div>
    );
}

export default Home;