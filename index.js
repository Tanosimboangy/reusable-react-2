import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const CharacterCounterInput = ({ text, defaults }) => {
	const [data, setData] = useState("");
	const maxLength = 280;


	function addText(badgeText) {
		setData(prev => prev += badgeText + " ")
	}

	return (
		<div className={`counterInput ${data.length > maxLength && "tooLong"}`}>
			<div>
				{defaults.map(b => {
					return <button onClick={() => addText(b)} key={b}>{b}</button>;
				})}
			</div>
			<textarea 
				placeholder={text} 
				value={data}
				onChange={(e) => setData(e.currentTarget.value)}
			/>
			<div>{data.length}/{maxLength}</div>
		</div>
	);
};

const App = () => {
	let defaultMoods = ['Great', 'Okay', 'Bad'];

	return (
		<section>
			<h2>Mood Tracker</h2>
			<CharacterCounterInput text={'How was your day?'} defaults={defaultMoods} />
		</section>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
