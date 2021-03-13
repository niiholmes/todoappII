import React,{useState} from 'react'
import Todo from './Components/Todo'
import Form from './Components/Form'
import FilterButton from './Components/FilterButton'
import './App.css';
import {nanoid} from 'nanoid'

function App(props) {

  const[tasks, setTasks]= useState(props.tasks)
  const[filter, setFilter] = useState('All')

  const addTask = (name) => {
    const newTask = {id: 'todo-' + nanoid() , name: name, completed: false}
    setTasks([...tasks, newTask])
  }

  const toggleTaskCompleted= (id) => {
    const updatedTasks = tasks.map(task => {
      //if this task has the same ID as edited task
      if (id === task.id){
         // use object spread to make a new object
         // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task
    })
  }

  const deleteTask= (id) =>{
    const remainingTasks = tasks.filter(task => id !== task.id)
    setTasks (remainingTasks)
  } 

  const editTask = (id, newName) => {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task
    })
    setTasks(editedTaskList)
  }

  const taskList = tasks.map(task =>  (

  <Todo
   id ={task.id} 
   name={task.name} 
   completed={task.completed}
   key={task.id}
   toggleTaskCompleted={toggleTaskCompleted}
   deleteTask={deleteTask}
   editTask={editTask}
   />

  )
   
   )
   
   const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task'
   const headingText = `${taskList.length} tasks remaining`

  return (
    <div className="todoapp stack-large">

      <h1>GirlFriday</h1>

      <Form addTask={addTask}/>

      <div className="filters btn-group stack-exception">
      <FilterButton/>
      <FilterButton/>
      <FilterButton/>
      </div>

      <h2 id="list-heading">
        {headingText}
      </h2>

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>

    </div>

  );
}

export default App;
