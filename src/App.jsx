import React, {useState} from 'react';
import '../src/style/App.css';
import Select from 'react-select';

function App() {
	const [activeLocation, setActiveLocation] = useState('AB');
	const [lastUpdated, setlastUpdated] = useState('');
	const locationList = [
		{ value: 'AB', label: 'Alberta' },
		{ value: 'BC', label: 'British Columbia' },
		{ value: 'MB', label: 'Manitoba' },
		{ value: 'NB', label: 'New Brunswick' },
		{ value: 'NL', label: 'Newfoundland and Labrador' },
		{ value: 'NT', label: 'Northwest Territories' },
		{ value: 'NS', label: 'Nova Scotia' },
		{ value: 'NU', label: 'Nunavut' },
		{ value: 'ON', label: 'Ontario' },
		{ value: 'PE', label: 'Prince Edward Island' },
		{ value: 'QC', label: 'Quebec' },
		{ value: 'SK', label: 'Saskatchewan' },
		{ value: 'YT', label: 'Yukon' },
	];
	return (
		<div className="App">
			<h1>COVID 19 Dashboard</h1>
			<div className='dashboard-container'>
				<div className='dashboard-menu'>
					<Select options={locationList}
						className='dashboard-select'
						onChange={(selectedOption) =>
							setActiveLocation(selectedOption.value)
						}
						defaultValue={locationList.filter(
							(options) => options.value === activeLocation
						)}
					/>
					<p className='update-date'>Last update: {lastUpdated}</p>
				</div>
				<div className='dashboard-sumary'></div>
			</div>
		</div>
	);
}

export default App;
