import React, {Component} from 'react';
import style from "./contacts.module.css";
import {Repository} from "../repository/repository";

class Contacts extends Component
{
    dataRepository = new Repository();
    constructor(props) {
        super(props);
        this.state =
            {
                planets_names: []
            }
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () =>
    {
        const names = localStorage.getItem('planets');
        if (names)
        {
            this.setState({...this.state, planets_names: JSON.parse(names)});
        }
        else
        {
            const planets = await this.dataRepository.getPlanets();
            console.log(planets);
            const planets_names = planets.map((element) => element.name);
            localStorage.setItem('planets', JSON.stringify(planets_names));
            this.setState({...this.state, planets_names: planets_names});
        }
    }

    render()
    {
        return (
            <div className={style.container}>
                <form action=""/>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label htmlFor="country">Country</label>
                <select id="country" name="country">
                    {this.state.planets_names.map((item,index)=> <option value={item} key={index}>{item}</option>)}
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                <input type="submit" value="Submit"/>
            </div>
        );
    }
};

export default Contacts;