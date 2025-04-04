import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const TodoApp = () => {

    const [nuevaTarea,setNuevaTarea] = useState<string>('')
    const [listaTareas, setListaTareas] = useState<string[]>([])
    const handleAddTask = () => {

    }
    const handleBorrarTarea = (index:number) =>{

    }

    return (
        <div>
            <h1>Lista de tareas</h1>
            <div>
                <input type="text" 
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
                placeholder="Nueva Tarea"
                />
                <button onClick={handleAddTask}></button>
            </div>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
        </div>
  )
}