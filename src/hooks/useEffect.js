const [type, setType] = useState('users')

const [data, setData] = useState([])

const [position, setPosition] = useState({
	x: 0,
	y: 0
})

useEffect(() => {
	window.addEventListener('mousemove', event => {
		setPosition({
			x: event.clientX,
			y: event.clientY
		})
	})
}, [])

// useEffect(() => console.log('render'))

useEffect(() => {
	fetch(`https://jsonplaceholder.typicode.com/${type}`)
		.then(response => response.json())
		.then(json => setData(json))
}, [type])

return (
	<div>
		<h1>useEffect</h1>

		<h2>Mouse's coordinates</h2>
		<pre>{JSON.stringify(position, null, 2)}</pre>

		<h2>Resources: {type}</h2>

		<button onClick={() => setType('users')}>Users</button>
		<button onClick={() => setType('todos')}>Todo</button>
		<button onClick={() => setType('posts')}>Posts</button>

		<pre>{JSON.stringify(data, null, 2)}</pre>

	</div>
)