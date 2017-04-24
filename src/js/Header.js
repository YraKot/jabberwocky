import React, { Component } from 'react';

const Navigation = () => {
	return(
        <nav className="navigation">
            <div className="nav-btn">
                <div className="nav-btn-icon"></div>
            </div>
        </nav>
    )
}

const Social = () => {
	return(
        <div>
            <span className="fa fa-apple fa-lg" aria-hidden="true"></span>
            <span className="fa fa-chrome fa-lg" aria-hidden="true"></span>
            <a href="https://www.facebook.com/barmaglot.radio/?fref=ts" target="_blank">
                <span className="fa fa-facebook fa-lg" aria-hidden="true"></span>
            </a>
            <span className="fa fa-envelope fa-lg" aria-hidden="true"></span>
        </div>	
    )
}

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="elements elem1"><Navigation /></div>

                <div className="elements elem2">
                <i className="fa fa-play-circle fa-2x" aria-hidden="true"></i>
                </div>

                <div className="elements elem3">
                    <h1>JABBERWOCKY</h1>
                </div>

                <div className="elements elem4"><Social /></div>
                <div className="elements elem5">
                    <p><a href="https://www.youtube.com/" target="_blank">donate</a></p>
                </div>
            </div>
        )
    }
}

export default Header;