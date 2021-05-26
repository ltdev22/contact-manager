import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Alerts from './components/layouts/Alerts';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import setAuthToken from './utils/setAuthToken';
import ProtectedRoute from './components/routing/ProtectedRoute';
import './App.css';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import ContactState from './context/contact/ContactState';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

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
									<ProtectedRoute exact path='/' component={Home} />
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
