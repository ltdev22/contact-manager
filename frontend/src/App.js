import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import './App.css';

import ContactState from './context/contact/ContactState';

function App() {
	return (
		<ContactState>
			<Router>
				<div className="App">
					<Navbar />
					<div className="container">
						<Switch>
							<Route exact path='/' component={Home} />
						</Switch>
					</div>
				</div>
			</Router>
		</ContactState>
	);
}

export default App;
