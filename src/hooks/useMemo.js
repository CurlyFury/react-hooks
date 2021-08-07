function complex(num) {
  let i = 0
  while (i < 100000000) i++
  return num * 2
}


function App() {

  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  const computed = useMemo(() => {
    return complex(number)
  }, [number])

  return (
    <div className={'container'}>
      <h1 style={styles}>Calculated property {computed}</h1>
      <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)} >add</button>
      <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}  >reduce</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}  >change</button>
    </div>
  )
}