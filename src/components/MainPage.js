import React from 'react';
import NavBar from './NavBar';
import TodaysPhoto from './TodaysPhoto';
import DateInput from './DateInput';

const MainPage = () => {
    return (
        <React.Fragment>
            <NavBar />
            <TodaysPhoto />
        </React.Fragment>
    );
}

export default MainPage;