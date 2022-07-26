import React from 'react';
import lolLogo from "../assets/img/lol-logo.png";
import error404 from "../assets/img/error-404.png"

const Error = () => {
    return (
        <div className="hero is-fullheight">
            <div className="hero-head">
                <div className="header-summoner">
                    <div className="header-logo">
                        <figure>
                            <img src={lolLogo} />
                        </figure>
                        <p>MASTERIES STATISTIQUES</p>
                    </div>
                </div>
            </div>
            <figure className='error'>
                <img src={error404} style={{ width: "30%" }} />
            </figure>
            <p className='title error'>Error 404</p>
            <div className="hero-foot columns">
                <div className="column is-4 is-11-mobile is-offset-9-desktop is-offset-1-mobile">
                    <p>Gaspar MISSIAEN - Christopher LESSIRARD</p>
                </div>
            </div>
        </div >
    );
};

export default Error;