import React from 'react';
import '../src/style/App.css';
import Select from 'react-select';

function App() {

	return (
		<div className="App">
			<h1>COVID 19 Dashboard</h1>
			<div className='dashboard-container'>
				<div className='dashboard-menu'>
					<Select options={locationList}
						className='dashboard-select'
					/>
					<p className='update-date'>Last update: </p>
				</div>
				<div className='dashboard-sumary'></div>
			</div>
		</div>
	);
}

export default App;
