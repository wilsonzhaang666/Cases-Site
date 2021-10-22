import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">

            <p>WELCOME</p>
            <h3>Protecting Your Phone<br />
            Dressing Your Phone</h3>
            <Link className="btn" to="/cases">View All Cases</Link>
        </section>
    )
}

export default Hero
