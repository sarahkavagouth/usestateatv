import { useState } from 'react'

function App() {

const [numero, setNumero] = useState(100)


const [mostrarTexto, setMostrarTexto] = useState(true)

return (
<div style={{ padding: '20px', fontFamily: 'Arial' }}>
<h1>useState</h1>

{}
<h2>Valor: {numero}</h2>
<button onClick={() => setNumero(numero + 100)}>Aumentar 100</button>

<hr />

{}
<button onClick={() => setMostrarTexto(!mostrarTexto)}>
{mostrarTexto ? 'Esconder' : 'Mostrar'}
</button>

{}
{mostrarTexto ? <p>Este texto aparece quando o estado é true!</p> : null}
</div>
)
}

export default App


