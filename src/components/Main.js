import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contacts from "./Contacts";
import {aboutMePage, contactsPage, starWarsPage} from "../utils/constants";

const Main = (props) =>
{
    switch (props.page)
    {
        case aboutMePage: return (
            <AboutMe/>
        )
        case starWarsPage: return (
            <StarWars/>
        )
        case contactsPage: return (
            <Contacts/>
        )
        default: return (
            <Home/>
        )
    }
    return (
        <Home/>
    );
};

export default Main;