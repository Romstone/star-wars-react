import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contacts from "./Contacts";
import {aboutMePage, contactsPage, starWarsPage} from "../utils/constants";
import {AppContext} from "../utils/contextCreator";

const Main = () =>
{
    return (
            <AppContext.Consumer>
                {
                    value =>
                    {
                        switch (value.activePage)
                        {
                            case aboutMePage: return (<AboutMe/>)
                            case starWarsPage: return (<StarWars/>)
                            case contactsPage: return (<Contacts/>)
                            default: return (<Home/>)
                        }
                    }
                }
            </AppContext.Consumer>
        )


};

export default Main;