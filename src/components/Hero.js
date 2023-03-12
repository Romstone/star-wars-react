import React from 'react';

const Hero = () =>
{
    return (
        <section className="left float-start m-2 w-25 mr-1 row">
            <img className="col-12" src={require('../images/main.jpg')}/>
        </section>
    );
};

export default Hero;