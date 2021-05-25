import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Alerts from './components/layouts/Alerts';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import ContactState from './context/contact/ContactState';

function App() {
	return (
		<AuthState>
			<ContactState>
				<AlertState>
					<Router>
						<div className="App">
							<Navbar />
							<div className="container">
								<Alerts />
								<Switch>
									<Route exact path='/' component={Home} />
									<Route exact path='/register' component={Register} />
									<Route exact path='/login' component={Login} />
								</Switch>
							</div>
						</div>
					</Router>
				</AlertState>
			</ContactState>
		</AuthState>
	);
}

export default App;
