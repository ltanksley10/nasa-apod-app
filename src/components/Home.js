import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="headline-flexAlign">
                <div>
                    <h1 className="headline">NASA's Astronomy Photo of the Day</h1>
                </div>
                <div>
                    <img className="headline-img" src="https://img.icons8.com/plasticine/160/000000/rocket.png" alt="Rocketship icon" />
                </div>
            </div>
            <div className="home">
                <Link className="home-link" to="/mainpage"><h2>View Here</h2></Link>
            </div>
        </div>
    );
}

export default Home;