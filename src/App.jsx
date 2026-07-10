import { useState } from "react"
import Tarjeta from "./Tarjeta"

function App() {
  const [tareas, setTareas] = useState([])
  const [texto, setTexto] = useState("")

  const agregar = () => {
    if (texto !== "") {
      setTareas([...tareas, texto])
      setTexto("")
    }
  }

  const eliminar = (index) => {
    const nuevas = tareas.filter((_, i) => i !== index)
    setTareas(nuevas)
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>

      <Tarjeta nombre="Azael" />

      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button onClick={agregar}>Agregar</button>

      <ul>
        {tareas.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => eliminar(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App