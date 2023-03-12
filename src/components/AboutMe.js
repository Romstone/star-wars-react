import React, {Component} from 'react';
import {Repository} from "../repository/repository";
import {thirtyDaysInMs} from "../utils/constants";

class AboutMe extends Component
{
    dataRepository = new Repository();
    constructor(props) {
        super(props);
        this.state =
            {
                isChosen: false,
                id: null,
                name: '',
                picture: '',
                height: '',
                birth_year: '',
                gender: '',
                mass: '',
                hair_color: '',
                skin_color: '',
                eye_color: ''
            }
    }

    handleChange = (e) =>
    {
        this.setState({id: e.target.value});
    }

    getData = async () =>
    {
        const id = this.state.id;
        const pers = localStorage.getItem(`${id}`);
        if (pers)
        {
            const person = JSON.parse(pers);
            const now = new Date();
            const old = new Date(`${person.created}`);
            const timeDiffInMs = now.getTime() - old.getTime();
            if (timeDiffInMs >= thirtyDaysInMs)
            {
                await this.makeResponse(id);
            }
            else
            {
                this.setState({...this.state,
                    isChosen: true,
                    name: person.name,
                    picture: person.image,
                    height: person.height,
                    birth_year: person.birth_year,
                    gender: person.gender,
                    mass: person.mass,
                    hair_color: person.hair_color,
                    skin_color: person.skin_color,
                    eye_color: person.eye_color
                });
            }
        }
        else
        {
            await this.makeResponse(id);
        }
    }

    makeResponse = async (id) =>
    {
        const person = await this.dataRepository.getPerson(id);
        const img = await this.dataRepository.getPicture(person.name);
        person.created = new Date();
        person.image = img;
        localStorage.setItem(`${id}`, JSON.stringify(person));
        this.setState({...this.state,
            isChosen: true,
            name: person.name,
            picture: person.image,
            height: person.height,
            birth_year: person.birth_year,
            gender: person.gender,
            mass: person.mass,
            hair_color: person.hair_color,
            skin_color: person.skin_color,
            eye_color: person.eye_color
        });
    }

    render()
    {
        if(this.state.isChosen)
            return (
                <div>
                    <img src={this.state.picture} alt=""/>
                    <p>name: {this.state.name}</p>
                    <p>height: {this.state.height}</p>
                    <p>birth year: {this.state.birth_year}</p>
                    <p>gender: {this.state.gender}</p>
                    <p>mass: {this.state.mass}</p>
                    <p>hair color: {this.state.hair_color}</p>
                    <p>skin color: {this.state.skin_color}</p>
                    <p>eye color: {this.state.eye_color}</p>
                </div>
            );
        else
            return (
                <div>
                    <label htmlFor={'personId'}>Enter id of a person you'd like to get info about:</label>
                    <input type="number" id={'personId'} onChange={this.handleChange}/>
                    <button className={'bth btn-success'} onClick={this.getData}>Show info!</button>
                </div>
            );
    }
};

export default AboutMe;