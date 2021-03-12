import React,{useState} from 'react'
import Todo from './Components/Todo'
import Form from './Components/Form'
import FilterButton from './Components/FilterButton'
import './App.css';

function App(props) {

  const[task, setTask]= useState(props.tasks)

  const addTask = (name) => {
    alert(name)
  }

  const taskList = props.tasks.map(task =>  (

  <Todo
   id ={task.id} 
   name={task.name} 
   completed={task.completed}
   key={task.id}
   />

  )
   
   )

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
        3 tasks remaining
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
