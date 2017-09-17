import React, {Component} from 'react';
import HTTP from "../../common/http";
import {Col, Thumbnail} from "react-bootstrap";
import DoctorList from "./doctorlist";

class DoctorWrapper extends Component {

    data = [
        {
            id: 1,
            name: "Tomasz",
            surname: "Grzybowski",
            specialityId: 2,
            speciality: "Dermatologia",
            img: 'http://www.menforma.pl/img/doctor3.png'
        },
        {
            id: 2,
            name: "Maria",
            surname: "Mosakowska",
            specialityId: 2,
            speciality: "Trymolog",
            img: 'https://static3.depositphotos.com/1003507/253/i/950/depositphotos_2537534-stock-photo-sexy-doctor.jpg'
        }
    ];

    redirectToCalendar = (id) => {
        console.log(this);
        this.props.history.push("/availability");
    }


    render() {
        return (
            <div>
                <DoctorList redirectToCalendar={this.redirectToCalendar} doctors={this.data}/>
            </div>
        );
    }
}

export default DoctorWrapper;