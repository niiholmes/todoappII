import React, {useState} from 'react'



const Form = (props) => {

    const[name, setName] = useState('')


const handleSubmit = (e) => {
    e.preventDefault()
    props.addTask(name)
    setName('')
}

const handleChange = (e)=> {
    setName(e.target.value)
}

    return(
        <div>
             <form onSubmit ={handleSubmit}>
        <h2 className="label-wrapper">
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          placeholder='What needs to be done?'
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
      </form>
        </div>
    )
}



export default Form