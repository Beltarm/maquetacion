import React from 'react';
import Navbar from './components/navbar/Navbar';
import HomeView from './components/home/HomeView';

const App = () => {
	return (
		<div className="container" style={{ maxWidth: '1500px' }}>
			<Navbar />
			<HomeView />
		</div>
	);
};

export default App;
