import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import NavBar from './NavBar';
import DateInput from './DateInput';
import Photo from './Photo';

const apiKey = process.env.REACT_APP_NASA_KEY;

class ViewMorePhotos extends Component {
    state = {
        date: "",
        photo: ""
    };
    
    changeDate = e => {
        e.preventDefault();
        let dateFromInput = e.target[0].value;
        this.setState({ date: dateFromInput });
        this.getPhoto(dateFromInput);
    };
    
    getPhoto = date => {
        fetch( `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`)
            .then(response => response.json())
            .then(photoData => this.setState({ photo: photoData }));
    };
    
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <DateInput changeDate={this.changeDate} />
                <Photo photo={this.state.photo} />
            </React.Fragment>
        );
    }
}

export default ViewMorePhotos;
