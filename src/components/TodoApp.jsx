import { useState } from "react"

const TodoApp = () => {
    
    const [inputValue, setInputValue] = useState("")
    const [todos, setTodos] = useState([
        {
            title: "Karate"
        },
        {
            title: "Futbol"
        },
        {
            title: "Basketball"
        },
    ])

    const onAddClick = () => {
        alert("Add clicked!")
    }

    return (
        <>
        <div className="todo-container">
            <h1 className="app-title">Todo App</h1>
            <div className="todo-header">
                <input value={inputValue} onChange={e => setInputValue(e.target.value)
                } className="input-add" type="text" placeholder="Yozing" />
                <button onClick={onAddClick} className="btn-add"> Add </button>
            </div>
            <div className="todo-list">
                {
                    todos.map( t => { 
                        console.log(t.title);
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div  className="todo-item">
                                <span> {t.title} </span>
                            </div>

                        )
                    } )
                }

                
            </div>
        </div>
        </>
    )
}

export default TodoApp