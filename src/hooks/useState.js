function calculated() {
	console.log('Calculating')
	return Math.trunc(Math.random() * 25)
}

function App() {

	const [counter, setCounter] = useState(() => {
		return calculated()
	})

	function increment() {
		setCounter(counter + 1)
	}
	function decrement() {
		if (counter > 0) {
			setCounter(counter - 1)
		}
	}

	return (
		<div className='container'>
			<h1>useState</h1>
			<h2>Counter {counter}</h2>
			<button onClick={increment} className='btn btn-success'>Add</button>
			<button onClick={decrement} className='btn btn-danger'>Reduce</button>
		</div>
	);
}