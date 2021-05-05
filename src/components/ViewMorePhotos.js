import React, {Component} from 'react';
import moment from 'moment';
import fetch from 'isomorphic-fetch';
import NavBar from './NavBar';
import DateInput from './DateInput';
import Photo from './Photo';

const apiKey = process.env.REACT_APP_NASA_KEY;

class ViewMorePhotos extends Component {
    state = {
        date: moment(),
        photo: ""
    };
    
    formatDate = aDate => {
        let m = moment(aDate);
        let year = m.year();
        let month = m.month() + 1;
        let day = m.date();
        return `${year}-${month}-${day}`;
    };
    
    changeDate = dateFromInput => {
        this.setState({ date: dateFromInput });
        this.getPhoto(this.formatDate(dateFromInput));
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
                <DateInput changeDate={this.changeDate} date={this.state.date} />
                <Photo photo={this.state.photo} />
            </React.Fragment>
        );
    }
}

export default ViewMorePhotos;
