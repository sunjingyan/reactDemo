import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import Clock from './components/Clock';
import ClockState from './components/ClockState';
import HelloWorld from './components/HelloWorld';
import Welcome from './components/Welcome';
import Toggle from './components/Toggle';

// ****1
// const helloElement = <div>hello, world!</div>;
// ReactDOM.render(
//   helloElement,
//   document.getElementById('root')
// );


//****2
// function tick() {
// 	const element = (
// 		<div>
// 			<h1>hello, world!</h1>
// 			<h2>It is {new Date().toLocaleTimeString()}.</h2>
// 		</div>
// 		);
// 	ReactDOM.render(element, document.getElementById('root'));
// }
//setInterval(tick, 1000);


//****3
// function timer() {
// 	var i=0;
// 	setInterval(function() {
// 		console.log(i);
// 		i++;
// 	}, 1000);
// }

//****4
// ReactDOM.render(<HelloWorld />, document.getElementById('root'));

//****5
//ReactDOM.render(<Welcome name="Sun Jing Yan"/>, document.getElementById('root'));

/****6
function WelcomeFun(props) {
	return <h1>{props.name}</h1>;
}

function WelcomeApp() {
	return <div>
		<WelcomeFun name='sun' />
		<WelcomeFun name='jing' />
		<WelcomeFun name='yan' />
	</div>;
}

ReactDOM.render(<WelcomeApp />, document.getElementById('root'));
*/

/****7
// function Clock(props) {
// 	return 
// 	<div>
// 		Time is {props.date.toLocalTimeString()}.
// 	</div>;
// }
// function tick() {
// 	ReactDOM.render(<Clock date={new Date()}/>, document.getElementById('root'));
// }*/


/****8
// function tick() {
// 	ReactDOM.render(<ClockState/>, document.getElementById('root'));
// }
//setInterval(tick, 1000);*/

ReactDOM.render(<Toggle/>, document.getElementById('root'));


