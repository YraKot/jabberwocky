import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './js/Header';
import App from './js/App';
import Space from './js/Space';
import Home from './js/Home';
import Playlist from './js/Playlist';
import Calendar from './js/Calendar';
import About from './js/About';
import Some from './js/Some';
import Error404 from './js/Error';

import './css/index.scss';

class Menu extends React.Component {
	render() {
		return(
			<div>
				<Router>
					<div>
						<div className="nav-items">
							<ul>
								<li> <Link to="/space">    Космос    </Link> </li>
								<li> <Link to="/">         Головна   </Link> </li>
								<li> <Link to="/podcast">  Програми  </Link> </li>
								<li> <Link to="/playlist"> Плейлист  </Link> </li>
								<li> <Link to="/calendar"> Розклад   </Link> </li>
								<li> <Link to="/about">    Про нас   </Link> </li>
								<li> <Link to="/some">     Ще щось   </Link> </li>
							</ul>
						</div>

						<Route path="/space"    component={Space} /> 
						<Route exact path="/"   component={Home} />
						<Route path="/podcast"  component={Error404} />
						<Route path="/playlist" component={Playlist} />
						<Route path="/calendar" component={Calendar} />
						<Route path="/about"    component={About} />
						<Route path="/some"     component={Some} />
					</div>
				</Router>
			</div>
		)
	}
}

class Wrap extends React.Component {
	render() {
		return(
			<div>
				<Header />
				<Menu />
			</div>
		)
	}
}


ReactDOM.render(
  <Wrap />,
  document.getElementById('root')
);
